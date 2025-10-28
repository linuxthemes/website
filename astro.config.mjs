// https://astro.build/config

// @ts-check
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

export default defineConfig({
    site: 'https://linuxthemes.org',
    base: '/',
    integrations: [expressiveCode({
        themes: [
            // 'dark-plus', 'light-plus',
            'github-dark', 'github-light'
        ],
        // plugins: [pluginLineNumbers()],
    }), mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
});