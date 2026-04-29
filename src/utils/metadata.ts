import { toCanonicalUrl, toRootUrl, toSubpathUrl } from './siteUrl';

const setLinkHref = (selector: string, href: string) => {
  const element = document.querySelector<HTMLLinkElement>(selector);
  if (element) {
    element.href = href;
  }
};

const setMetaContent = (selector: string, content: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.content = content;
  }
};

export function syncDocumentMetadata() {
  if (typeof window === 'undefined') return;

  const { pathname } = window.location;
  const canonicalUrl = toCanonicalUrl(pathname);

  setLinkHref('link[rel="canonical"]', canonicalUrl);
  setLinkHref('link[data-site-alternate="root"]', toRootUrl(pathname));
  setLinkHref('link[data-site-alternate="subpath"]', toSubpathUrl(pathname));
  setMetaContent('meta[property="og:url"]', canonicalUrl);
}
