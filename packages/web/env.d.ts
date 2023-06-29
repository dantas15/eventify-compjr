/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // readonly VITE_: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}