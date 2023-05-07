import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mrivaslezama.github.io/store/',
	base: '/store',
	integrations: [mdx(), sitemap()],
});
