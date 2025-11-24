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
            'tokyo-night',
            'nord',
            'rose-pine-dawn',
            'material-theme-lighter',
            'dracula', 'dracula-soft',
            'min-dark', 'min-light',
            'dark-plus', 'light-plus',
            'one-dark-pro', 'one-light',
            'github-dark', 'github-light',
            'everforest-dark', 'everforest-light',
            'catppuccin-mocha', 'catppuccin-latte',
        ],
    }), mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
});