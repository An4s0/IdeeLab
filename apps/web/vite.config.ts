import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/bundle-report.html",
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
});
