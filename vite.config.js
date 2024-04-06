import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "student-o5w",
    project: "javascript-react"
  })],

  assetsInclude: "**/*.glb",

  build: {
    sourcemap: true
  }
});