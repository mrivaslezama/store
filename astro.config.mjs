import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mrivaslezama.github.io/store/',
	base: '/',
	integrations: [mdx(), sitemap()],
	output: 'server',
	adapter: netlify(),
  
});


