/// <reference types="vite/client" />

declare module "@vite/client" {
  interface ImportMetaEnv {
    readonly VITE_API_ENDPOINT: string;
    readonly VITE_APP_TITLE: string;
    readonly VITE_DEBUG: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
