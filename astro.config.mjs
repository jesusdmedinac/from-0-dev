import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Programación desde 0',
			social: {
				github: 'https://github.com/jesusdmedinac',
			},
			sidebar: [
        {
          label: 'Para no programadores',
          items: [
            { label: 'Antes de empezar', link: '/roadmap/para-no-programadores/1' },
            { label: 'Conceptos básicos', link: '/roadmap/para-no-programadores/2'},
            { label: 'Language Tour', link: '/roadmap/para-no-programadores/3'},
            { label: 'Paradigmas', link: '/roadmap/para-no-programadores/4'},
            { label: 'Stacks', link: '/roadmap/para-no-programadores/5'},
            { label: 'Frontend', link: '/roadmap/para-no-programadores/6'},
            { label: 'Backend', link: '/roadmap/para-no-programadores/7'},
            { label: 'Base de datos', link: '/roadmap/para-no-programadores/8'},
            { label: 'Uso de terminal', link: '/roadmap/para-no-programadores/9'},
            { label: 'Controles de versión', link: '/roadmap/para-no-programadores/10'},
            { label: 'Sistemas operativos', link: '/roadmap/para-no-programadores/11'},
            { label: 'DevOps', link: '/roadmap/para-no-programadores/12'},
          ]
        },
			],
		}),
	],
});
