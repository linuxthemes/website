// https://astro.build/config

// @ts-check
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [expressiveCode({
      themes: ['catppuccin-macchiato', 'catppuccin-latte'],
    //   themeCssSelector: (theme) => `[data-theme='${theme.name}']`,
    // plugins: [pluginLineNumbers()],
  }), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  
});