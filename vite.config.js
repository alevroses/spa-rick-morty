import { defineConfig } from "vite";

// vite.config.js
export default defineConfig({
  root: "src",
  server: {
    open: true,
  },
  build: {
    outDir: "../dist",
  },
  base: "/spa-rick-morty/",
});
