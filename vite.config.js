import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr(), react()],
  css: {
   postcss: {
    plugins: [tailwindcss()],
   },
  },
  server: {
    host: true,
    port: 3000
  }
});