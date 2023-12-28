import { resolve } from "node:path";
import { mergeConfig } from "vite";

import basicConfig from "./vite.config";

export default mergeConfig(basicConfig, {
  build: {
    minify: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html")
      },
      output: {
        dir: "dist/main",
        compact: true,
        entryFileNames: "static/js/[name]-[hash].js",
        chunkFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name].[ext]"
      }
    }
  }
});
