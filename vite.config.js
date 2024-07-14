// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/dev/altayar": {
        target: "https://sisdeve.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev\/altayar/, "/dev/altayar"),
      },
    },
  },
});
