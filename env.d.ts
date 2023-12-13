/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PUBLIC_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
