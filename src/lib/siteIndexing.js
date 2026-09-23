// PRELAUNCH SAFETY SWITCH
// Keep false until the new Spoor's site replaces the current production site.
// `npm run site:launch` changes this to true and updates robots/_headers/index.html.
export const SITE_INDEXING_ENABLED = false;

export const PRODUCTION_HOSTS = new Set([
  'spoorsheatingandac.com',
  'www.spoorsheatingandac.com',
]);

export function shouldIndexCurrentHost() {
  if (typeof window === 'undefined') return false;
  return SITE_INDEXING_ENABLED && PRODUCTION_HOSTS.has(window.location.hostname);
}
