/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_ROOT_SITE_URL?: string;
  readonly VITE_SUBPATH_SITE_URL?: string;
  readonly VITE_SUBPATH_BASE?: string;
  readonly VITE_CANONICAL_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
