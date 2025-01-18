import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "~app": path.resolve(__dirname, "src/app"),
      "~contexts": path.resolve(__dirname, "src/contexts"),
      "~hooks": path.resolve(__dirname, "src/hooks"),
      "~layout": path.resolve(__dirname, "src/layout"),
      "~pages": path.resolve(__dirname, "src/pages"),
      "~routes": path.resolve(__dirname, "src/routes"),
      "~sections": path.resolve(__dirname, "src/sections"),
      "~utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
