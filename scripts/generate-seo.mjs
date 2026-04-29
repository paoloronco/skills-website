import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const DEFAULT_SUBPATH_SITE_URL = 'https://paoloronco.it';
const DEFAULT_SUBPATH_BASE = '/skills';

const loadEnvFile = (file) => {
  const path = resolve(process.cwd(), file);
  if (!existsSync(path)) return {};

  return readFileSync(path, 'utf8')
    .split(/\r?\n/)
    .reduce((env, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return env;

      const separator = trimmed.indexOf('=');
      if (separator === -1) return env;

      const key = trimmed.slice(0, separator).trim();
      const value = trimmed.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
      env[key] = value;
      return env;
    }, {});
};

const localEnv = {
  ...loadEnvFile('.env'),
  ...loadEnvFile('.env.local')
};

const getEnv = (key, fallback) => process.env[key] || localEnv[key] || fallback;

const normalizeOrigin = (value, fallback) => {
  try {
    return new URL(value || fallback).origin;
  } catch {
    return fallback;
  }
};

const normalizeBasePath = (value, fallback) => {
  const candidate = (value || fallback).trim();
  if (!candidate || candidate === '/') return '';
  return `/${candidate.replace(/^\/+|\/+$/g, '')}`;
};

const normalizeUrl = (value, fallback) => {
  try {
    const url = new URL(value || fallback);
    url.hash = '';
    return url.toString();
  } catch {
    return fallback;
  }
};

const subpathOrigin = normalizeOrigin(
  getEnv('VITE_SUBPATH_SITE_URL', DEFAULT_SUBPATH_SITE_URL),
  DEFAULT_SUBPATH_SITE_URL
);
const subpathBase = normalizeBasePath(
  getEnv('VITE_SUBPATH_BASE', DEFAULT_SUBPATH_BASE),
  DEFAULT_SUBPATH_BASE
);
const canonicalUrl = normalizeUrl(
  getEnv('VITE_CANONICAL_URL', `${subpathOrigin}${subpathBase || '/'}/`),
  `${subpathOrigin}${subpathBase || '/'}/`
);
const sitemapUrl = new URL('sitemap.xml', canonicalUrl).toString();
const lastmod = new Date().toISOString().slice(0, 10);

const robots = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${canonicalUrl}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`;

writeFileSync(resolve(process.cwd(), 'public', 'robots.txt'), robots);
writeFileSync(resolve(process.cwd(), 'public', 'sitemap.xml'), sitemap);
