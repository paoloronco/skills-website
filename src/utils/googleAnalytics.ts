const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initGoogleAnalytics() {
  if (!measurementId || typeof window === 'undefined') {
    return;
  }

  const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;

  if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = scriptSrc;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);
}
