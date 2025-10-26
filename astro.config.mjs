// @ts-check
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode()],

  vite: {
    plugins: [tailwindcss()]
  }
});