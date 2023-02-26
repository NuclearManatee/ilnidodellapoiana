import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ilnidodellapoiana.com',
  integrations: [mdx(), sitemap(
    {
      customPages: ['https://www.ilnidodellapoiana.com','https://www.ilnidodellapoiana.com/photos','https://www.ilnidodellapoiana.com/location','https://www.ilnidodellapoiana.com/about']
    }
  ), react()],
  output: "server",
  adapter: netlify()
});