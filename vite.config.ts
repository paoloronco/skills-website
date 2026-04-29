import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const normalizeSubpathBase = (value?: string) => {
  const candidate = (value || '/skills').trim();
  if (!candidate || candidate === '/') return '';
  return `/${candidate.replace(/^\/+|\/+$/g, '')}`;
};

const normalizeOrigin = (value: string | undefined, fallback: string) => {
  try {
    return new URL(value || fallback).origin;
  } catch {
    return fallback;
  }
};

const normalizeUrl = (value: string | undefined, fallback: string) => {
  try {
    const url = new URL(value || fallback);
    url.hash = '';
    return url.toString();
  } catch {
    return fallback;
  }
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const subpathBase = normalizeSubpathBase(env.VITE_SUBPATH_BASE);
  const rootSiteUrl = normalizeOrigin(env.VITE_ROOT_SITE_URL, 'https://skills.paoloronco.it');
  const subpathSiteUrl = normalizeOrigin(env.VITE_SUBPATH_SITE_URL, 'https://paoloronco.it');
  const subpathAlternateUrl = `${subpathSiteUrl}${subpathBase || '/'}/`.replace(/([^:]\/)\/+/g, '$1');
  const canonicalUrl = normalizeUrl(env.VITE_CANONICAL_URL, subpathAlternateUrl);

  return {
    base: './',
    plugins: [
      react(),
      {
        name: 'dual-url-html-base',
        transformIndexHtml(html) {
          return html
            .replaceAll('__APP_SUBPATH_BASE__', subpathBase)
            .replaceAll('__CANONICAL_URL__', canonicalUrl)
            .replaceAll('__ROOT_ALTERNATE_URL__', `${rootSiteUrl}/`)
            .replaceAll('__SUBPATH_ALTERNATE_URL__', subpathAlternateUrl);
        }
      }
    ],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      headers: {
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=()',
        'Content-Security-Policy-Report-Only': "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' https:; font-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests",
        'X-XSS-Protection': '0',
      },
    },
    preview: {
      headers: {
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=()',
        'Content-Security-Policy-Report-Only': "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' https:; font-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests",
        'X-XSS-Protection': '0',
      },
    },
  };
});
