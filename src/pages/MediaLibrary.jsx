import { useEffect, useMemo, useState } from 'react';
import { Copy, Film, Image as ImageIcon, Search } from 'lucide-react';

const ALL = 'All';

function noIndexThisPage() {
  let robots = document.querySelector('meta[name="robots"]');
  if (!robots) {
    robots = document.createElement('meta');
    robots.setAttribute('name', 'robots');
    document.head.appendChild(robots);
  }
  robots.setAttribute('content', 'noindex, nofollow, noarchive, nosnippet');
  document.title = "Spoor's Internal Media Library";
}

function MediaCard({ item }) {
  const [copied, setCopied] = useState(false);
  const copyRef = async () => {
    const text = `Image ${item.id}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 900);
    } catch {
      // Clipboard can be blocked in some preview contexts. The number remains visible.
    }
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" style={{ contentVisibility: 'auto', containIntrinsicSize: '420px' }}>
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100">
        {item.kind === 'video' ? (
          <video className="h-full w-full object-cover" src={item.src} controls muted preload="metadata" />
        ) : (
          <img className="h-full w-full object-contain" src={item.src} alt="" loading="eager" decoding="async" />
        )}
        <button
          type="button"
          onClick={copyRef}
          className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-sm font-bold text-white shadow-lg"
          title="Copy this media reference"
        >
          #{item.id}
          <Copy className="h-3.5 w-3.5" />
        </button>
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700 shadow">
          {copied ? 'Copied' : item.source}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          {item.kind === 'video' ? <Film className="h-4 w-4" /> : <ImageIcon className="h-4 w-4" />}
          {item.category}
        </div>
        <div className="break-words text-sm font-semibold text-slate-900">{item.name}</div>
        <div className="line-clamp-2 break-all text-xs leading-5 text-slate-500" title={item.path}>{item.path}</div>
      </div>
    </article>
  );
}

export default function MediaLibrary() {
  const [data, setData] = useState({ items: [], count: 0 });
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(ALL);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    noIndexThisPage();
    fetch('/media-library.json', { cache: 'no-store' })
      .then((r) => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => [ALL, ...new Set(data.items.map((item) => item.category))], [data.items]);
  const items = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return data.items.filter((item) => {
      const categoryMatch = filter === ALL || item.category === filter;
      const textMatch = !needle || `${item.id} ${item.name} ${item.path} ${item.category}`.toLowerCase().includes(needle);
      return categoryMatch && textMatch;
    });
  }, [data.items, filter, query]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-[1680px] px-5 py-5 md:px-8">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Internal visual reference</div>
              <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">Spoor's Media Library</h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
                Reference media by number in change requests. Example: “Use images 1, 19, 22 and 101 on the swamp coolers page.”
              </p>
            </div>
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row xl:w-[620px]">
              <label className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search number, filename or category"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3 text-sm outline-none ring-red-500 focus:ring-2"
                />
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm font-medium outline-none ring-red-500 focus:ring-2"
              >
                {categories.map((category) => <option key={category}>{category}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500">
            <span>{loading ? 'Loading media…' : `${items.length} shown of ${data.count} total`}</span>
            <span>Hidden from site navigation</span>
            <span>Permanent noindex</span>
            <span>Reference numbers persist as the library grows</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1680px] px-5 py-6 md:px-8 md:py-8">
        {loading ? (
          <div className="py-20 text-center text-slate-500">Building visual library…</div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {items.map((item) => <MediaCard key={item.key} item={item} />)}
          </div>
        )}
      </section>
    </main>
  );
}
