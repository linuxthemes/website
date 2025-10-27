// https://astro.build/config

// @ts-check
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [expressiveCode()],
  vite: {
    plugins: [tailwindcss()],
  },
});
