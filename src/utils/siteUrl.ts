const DEFAULT_ROOT_SITE_URL = 'https://skills.paoloronco.it';
const DEFAULT_SUBPATH_SITE_URL = 'https://paoloronco.it';
const DEFAULT_SUBPATH_BASE = '/skills';

const trimTrailingSlashes = (value: string) => value.replace(/\/+$/, '');

const normalizeOrigin = (value: string | undefined, fallback: string) => {
  const candidate = trimTrailingSlashes((value || fallback).trim());

  try {
    const url = new URL(candidate);
    return url.origin;
  } catch {
    return fallback;
  }
};

const normalizeBasePath = (value: string | undefined, fallback: string) => {
  const candidate = (value || fallback).trim();
  if (!candidate || candidate === '/') return '';

  return `/${candidate.replace(/^\/+|\/+$/g, '')}`;
};

const normalizeAbsoluteUrl = (value: string | undefined, fallback: string) => {
  const candidate = (value || fallback).trim();

  try {
    const url = new URL(candidate);
    url.hash = '';
    return url.toString();
  } catch {
    return fallback;
  }
};

export const rootSiteUrl = normalizeOrigin(
  import.meta.env.VITE_ROOT_SITE_URL,
  DEFAULT_ROOT_SITE_URL
);

export const subpathSiteUrl = normalizeOrigin(
  import.meta.env.VITE_SUBPATH_SITE_URL,
  DEFAULT_SUBPATH_SITE_URL
);

export const subpathBase = normalizeBasePath(
  import.meta.env.VITE_SUBPATH_BASE,
  DEFAULT_SUBPATH_BASE
);

export const canonicalBaseUrl = normalizeAbsoluteUrl(
  import.meta.env.VITE_CANONICAL_URL,
  `${subpathSiteUrl}${subpathBase || '/'}/`
);

export const stripRuntimeBase = (pathname: string) => {
  if (!subpathBase) return pathname || '/';
  if (pathname === subpathBase) return '/';
  if (pathname.startsWith(`${subpathBase}/`)) {
    return pathname.slice(subpathBase.length) || '/';
  }

  return pathname || '/';
};

const normalizeRoutePath = (pathname: string) => {
  const clean = stripRuntimeBase(pathname || '/');
  return clean.startsWith('/') ? clean : `/${clean}`;
};

const joinUrl = (origin: string, basePath: string, routePath: string) => {
  const url = new URL(origin);
  const base = basePath.replace(/\/+$/, '');
  const route = routePath === '/' ? '/' : routePath;
  url.pathname = `${base}${route}`.replace(/\/{2,}/g, '/') || '/';
  return url.toString();
};

export const toRootUrl = (pathname: string) =>
  joinUrl(rootSiteUrl, '', normalizeRoutePath(pathname));

export const toSubpathUrl = (pathname: string) =>
  joinUrl(subpathSiteUrl, subpathBase, normalizeRoutePath(pathname));

export const toCanonicalUrl = (pathname: string) => {
  const canonical = new URL(canonicalBaseUrl);
  const basePath = canonical.pathname.replace(/\/+$/, '');
  const routePath = normalizeRoutePath(pathname);
  canonical.pathname = `${basePath}${routePath === '/' ? '/' : routePath}`.replace(/\/{2,}/g, '/');
  canonical.search = '';
  canonical.hash = '';
  return canonical.toString();
};
