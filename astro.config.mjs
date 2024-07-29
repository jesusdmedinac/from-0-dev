import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  base: '/',
  site: "https://desde0.jesusdmedinac.com",
	integrations: [
		starlight({
			title: 'Desde0',
      customCss: [
        // Path to your Tailwind base styles:
        './src/custom.css',
      ],
			sidebar: [
        {
          label: 'Para no programadores',
          link: '/roadmap/para-no-programadores/',
        },
        {
          label: '[Próximamente] Para principiantes (Juniors)',
          link: '/roadmap/para-principiantes/',
        },
        {
          label: '[Próximamente] Elige tu Stack personalizado',
          link: '/roadmap/stack-personalizado/',
        },
        {
          label: '[Próximamente] Ingeniería de Software',
          link: '/roadmap/software-engineering/'
        },
        {
          label: 'Kotlin Multiplatform',
          link: 'https://kmp.jesusdmedinac.com/'
        }
			],
      social: {
        youtube: 'https://www.youtube.com/@jesusdmedinac',
        linkedin: 'https://www.linkedin.com/in/jesusdmedinac/',
        facebook: 'https://www.facebook.com/jesusdmedinac',
        instagram: 'https://www.instagram.com/jesusdmedinac',
        'x.com': 'https://x.com/JesusDMedinaC',
        github: 'https://github.com/jesusdmedinac',
        discord: 'https://discord.gg/nChTf3PdGJ',
        twitch: 'https://www.twitch.tv/jesusdmedinac',
      }
		}),
    tailwind(),
    mdx(), 
    sitemap(),
	],
});
