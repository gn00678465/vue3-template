import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PUBLIC_PATH,
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@main": fileURLToPath(new URL("./src/main", import.meta.url))
    }
  }
});
