import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://skincreator-beta.glitch.me/skin-overlay/',
  base: 'skin-overlay',
  output: 'server', // Add this line to enable SSR
});
