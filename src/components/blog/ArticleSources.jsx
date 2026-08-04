export default function ArticleSources({ sources }) {
  if (!sources?.length) return null;
  return (
    <section aria-labelledby="article-sources" className="mt-8 border-t border-[#d6d6d6] pt-8">
      <h2 id="article-sources" className="mb-5 text-[clamp(28px,3vw,40px)] font-bold leading-[1.1] tracking-[-0.01em] text-[#0a0a0a]">
        Sources
      </h2>
      <ul className="list-disc space-y-3 pl-6">
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-red-600 underline decoration-red-200 underline-offset-4 hover:text-red-700">
              {source.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}