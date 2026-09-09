import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile } from 'node:fs/promises';

// The existing deployment has no Worker and returns the complete static asset.
// The same fixtures exercise the media handler once configured in wrangler.jsonc.
const config = JSON.parse(await readFile(new URL('../wrangler.jsonc', import.meta.url)));
const handler = config.main
  ? (await import(new URL(`../${config.main}`, import.meta.url))).default
  : { fetch: (request, env) => env.ASSETS.fetch(request) };
const bytes = new TextEncoder().encode('0123456789');
const env = { ASSETS: { fetch: async (request) => new Response(
  request.method === 'HEAD' ? null : bytes,
  { headers: { 'Content-Type': 'video/mp4', 'Content-Length': '10', ETag: '"test-video"', 'X-Robots-Tag': 'noindex, nofollow, noarchive' } }
) } };
const request = (range, options = {}) => new Request('https://spoor.olivemedia.agency/assets/video/example.mp4', {
  ...options, headers: { ...(range ? { Range: range } : {}), ...options.headers },
});

for (const [range, contentRange, body] of [
  ['bytes=0-1', 'bytes 0-1/10', '01'],
  ['bytes=3-6', 'bytes 3-6/10', '3456'],
  ['bytes=7-', 'bytes 7-9/10', '789'],
  ['bytes=-3', 'bytes 7-9/10', '789'],
  ['bytes=8-99', 'bytes 8-9/10', '89'],
]) {
  test(`video delivery supports ${range}`, async () => {
    const response = await handler.fetch(request(range), env);
    assert.equal(response.status, 206);
    assert.equal(response.headers.get('Content-Range'), contentRange);
    assert.equal(response.headers.get('Content-Length'), String(body.length));
    assert.equal(response.headers.get('Accept-Ranges'), 'bytes');
    assert.equal(response.headers.get('Content-Type'), 'video/mp4');
    assert.equal(response.headers.get('X-Robots-Tag'), 'noindex, nofollow, noarchive');
    assert.equal(await response.text(), body);
  });
}

test('out-of-bounds ranges return an empty 416 with the total size', async () => {
  const response = await handler.fetch(request('bytes=10-'), env);
  assert.equal(response.status, 416);
  assert.equal(response.headers.get('Content-Range'), 'bytes */10');
  assert.equal(await response.text(), '');
});

test('normal requests and stale If-Range return the complete video', async () => {
  for (const req of [request(), request('bytes=0-1', { headers: { 'If-Range': '"old-video"' } })]) {
    const response = await handler.fetch(req, env);
    assert.equal(response.status, 200);
    assert.equal(await response.text(), '0123456789');
  }
});

test('matching If-Range permits the requested bytes', async () => {
  const response = await handler.fetch(request('bytes=0-1', { headers: { 'If-Range': '"test-video"' } }), env);
  assert.equal(response.status, 206);
  assert.equal(await response.text(), '01');
});

test('HEAD retains the complete size and does not return a body', async () => {
  const response = await handler.fetch(request('bytes=0-1', { method: 'HEAD' }), env);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('Content-Length'), '10');
  assert.equal(await response.text(), '');
});

test('unsupported or malformed ranges fall back to the complete response', async () => {
  for (const range of ['bytes=0-1,5-6', 'items=0-1', 'bytes=oops', 'bytes=6-3']) {
    const response = await handler.fetch(request(range), env);
    assert.equal(response.status, 200);
    assert.equal(await response.text(), '0123456789');
  }
});

test('non-video assets keep their existing behavior', async () => {
  const req = new Request('https://spoor.olivemedia.agency/assets/images/test.webp', { headers: { Range: 'bytes=0-1' } });
  const response = await handler.fetch(req, env);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), '0123456789');
});

test('asset bindings without Content-Length still produce an exact range', async () => {
  const bindingEnv = { ASSETS: { fetch: async () => new Response(bytes, { headers: { 'Content-Type': 'video/mp4' } }) } };
  const response = await handler.fetch(request('bytes=0-1'), bindingEnv);
  assert.equal(response.status, 206);
  assert.equal(response.headers.get('Content-Range'), 'bytes 0-1/10');
  assert.equal(response.headers.get('Content-Length'), '2');
  assert.equal(await response.text(), '01');
});
