// Legacy range handler retained as the Worker module entry for Wrangler.
// Static media is intentionally NOT routed through this Worker in wrangler.jsonc.
// Cloudflare's static asset service handles image/video delivery directly.
export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const pathname = new URL(request.url).pathname;
    if (!/\.(mp4|webm|mov)$/i.test(pathname) ||
        !['GET', 'HEAD'].includes(request.method) || response.status !== 200 ||
        !response.headers.get('Content-Type')?.startsWith('video/')) {
      return response;
    }

    const headers = new Headers(response.headers);
    headers.set('Accept-Ranges', 'bytes');
    const fullResponse = () => new Response(response.body, { status: 200, headers });
    const range = request.headers.get('Range');
    if (request.method === 'HEAD' || !range) return fullResponse();

    const ifRange = request.headers.get('If-Range');
    if (ifRange && (ifRange.startsWith('W/') ||
        (ifRange !== headers.get('ETag') && ifRange !== headers.get('Last-Modified')))) {
      return fullResponse();
    }

    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match || (!match[1] && !match[2]) ||
        !Number.isSafeInteger(Number(match[1])) ||
        !Number.isSafeInteger(Number(match[2])) ||
        (match[1] && match[2] && Number(match[2]) < Number(match[1]))) {
      return fullResponse();
    }

    const completeBody = await response.arrayBuffer();
    const size = completeBody.byteLength;
    const start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
    const requestedEnd = match[1] && match[2] ? Number(match[2]) : size - 1;

    if (start >= size) {
      headers.set('Content-Range', `bytes */${size}`);
      headers.set('Content-Length', '0');
      return new Response(null, { status: 416, headers });
    }

    const end = Math.min(requestedEnd, size - 1);
    const body = completeBody.slice(start, end + 1);
    headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
    headers.set('Content-Length', String(body.byteLength));
    return new Response(body, { status: 206, headers });
  },
};
