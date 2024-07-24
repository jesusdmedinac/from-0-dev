import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Programación desde 0',
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
		}),
	],
});
