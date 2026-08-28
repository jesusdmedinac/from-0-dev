import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';

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
          label: 'Masterclasses (Intensivas 2h)',
          collapsed: false,
          items: [
            {
              label: 'IA para Desarrolladores',
              items: [
                { label: 'Módulo 1: El Cambio de Mindset', link: '/masterclass/ia-desarrolladores/modulo-1' },
                { label: 'Módulo 2: Metodología SDD & Contexto', link: '/masterclass/ia-desarrolladores/modulo-2' },
                { label: 'Módulo 3: Orquestación Agéntica', link: '/masterclass/ia-desarrolladores/modulo-3' },
                { label: 'Módulo 4: Blindaje y Entrega', link: '/masterclass/ia-desarrolladores/modulo-4' },
              ]
            },
            {
              label: 'Kotlin Multiplatform',
              items: [
                { label: 'Módulo 1: La Promesa de KMP', link: '/masterclass/kotlin-multiplatform/modulo-1' },
                { label: 'Módulo 2: Arquitectura de Conexión', link: '/masterclass/kotlin-multiplatform/modulo-2' },
                { label: 'Módulo 3: UI Universal con Compose', link: '/masterclass/kotlin-multiplatform/modulo-3' },
                { label: 'Módulo 4: Delivery & Interop', link: '/masterclass/kotlin-multiplatform/modulo-4' },
              ]
            }
          ]
        },
        {
          label: 'Para no programadores',
          items: [
            { label: 'Bienvenida y Registro', link: '/roadmap/para-no-programadores/' },
            { label: 'Antes de empezar', link: '/roadmap/para-no-programadores/1' },
            { label: 'Conceptos básicos', link: '/roadmap/para-no-programadores/2' },
            { label: 'Language Tour', link: '/roadmap/para-no-programadores/3' },
            { label: 'Paradigmas', link: '/roadmap/para-no-programadores/4' },
            { label: 'Stacks', link: '/roadmap/para-no-programadores/5' },
            { label: 'Frontend', link: '/roadmap/para-no-programadores/6' },
            { label: 'Backend', link: '/roadmap/para-no-programadores/7' },
            { label: 'Base de datos', link: '/roadmap/para-no-programadores/8' },
            { label: 'Uso de la Terminal', link: '/roadmap/para-no-programadores/9' },
            { label: 'Control de versiones', link: '/roadmap/para-no-programadores/10' },
            { label: 'Sistemas operativos', link: '/roadmap/para-no-programadores/11' },
            { label: 'DevOps', link: '/roadmap/para-no-programadores/12' }
          ]
        },
        {
          label: 'Para principiantes (Juniors)',
          items: [
            { label: 'Introducción y Configuración del Entorno', link: '/roadmap/para-principiantes/1' },
            { label: 'Introducción a la Programación Orientada a Objetos', link: '/roadmap/para-principiantes/2' },
            { label: 'Desarrollo Frontend', link: '/roadmap/para-principiantes/3' },
            { label: 'Desarrollo Backend', link: '/roadmap/para-principiantes/4' },
            { label: 'Bases de Datos', link: '/roadmap/para-principiantes/5' },
            { label: 'Integración Frontend y Backend', link: '/roadmap/para-principiantes/6' },
            { label: 'Control de versiones con Git', link: '/roadmap/para-principiantes/7' },
            { label: 'Uso de la Terminal y Sistemas Operativos', link: '/roadmap/para-principiantes/8' },
            { label: 'DevOps Básico', link: '/roadmap/para-principiantes/9' },
            { label: 'Desarrollo de Aplicaciones Móviles', link: '/roadmap/para-principiantes/10' },
            { label: 'Metodologías Ágiles y Buenvas Prácticas', link: '/roadmap/para-principiantes/11' },
            { label: 'Proyecto Final y Preparación para el Empleo', link: '/roadmap/para-principiantes/12' },
          ]
        },
        {
          label: 'Elige tu Stack personalizado',
          items: [
            { label: 'Introducción y Objetivos de carrera', link: '/roadmap/stack-personalizado/1' },
            { label: 'Planeación y Estimación', link: '/roadmap/stack-personalizado/2' },
            { label: 'Diseño y Arquitectura de Aplicaciones', link: '/roadmap/stack-personalizado/3' },
            { label: 'Backend Development: RESTful y GraphQL', link: '/roadmap/stack-personalizado/4' },
            { label: 'Frontend Development: UI/UX y Componentes Reutilizables', link: '/roadmap/stack-personalizado/5' },
            { label: 'Base de datos y ORM', link: '/roadmap/stack-personalizado/6' },
            { label: 'Integración Continua y Despliegue Automatizado (CI/CD)', link: '/roadmap/stack-personalizado/7' },
            { label: 'Testing: Unitario, Integración y End-to-End', link: '/roadmap/stack-personalizado/8' },
            { label: 'Seguridad de Aplicaciones Web', link: '/roadmap/stack-personalizado/9' },
            { label: 'Optimización de Rendimiento', link: '/roadmap/stack-personalizado/10' },
            { label: 'Despligue en Producción', link: '/roadmap/stack-personalizado/11' },
            { label: 'Monitoreo y Mantenimiento', link: '/roadmap/stack-personalizado/12' }
          ]
        },
        {
          label: 'Ingeniería de Software',
          items: [
            { label: 'Introducción a la Ingeniería de Software', link: '/roadmap/software-engineering/1' },
            { label: 'Requisitos de Software', link: '/roadmap/software-engineering/2' },
            { label: 'Diseño de Software', link: '/roadmap/software-engineering/3' },
            { label: 'Metodologías de Desarrollo', link: '/roadmap/software-engineering/4' },
            { label: 'Arquitectura de Software', link: '/roadmap/software-engineering/5' },
            { label: 'Pruebas y Validación de Software', link: '/roadmap/software-engineering/6' },
            { label: 'Mantenimiento y Evolución de Software', link: '/roadmap/software-engineering/7' },
            { label: 'Gestión de Configuración y Control de Versiones', link: '/roadmap/software-engineering/8' },
            { label: 'Seguridad en el Desarrollo de Software', link: '/roadmap/software-engineering/9' },
            { label: 'Ingeniería de la Usabilidad y Experiencia de Usuario', link: '/roadmap/software-engineering/10' },
            { label: 'Ingeniería de la Confiabilidad y Rendimiento', link: '/roadmap/software-engineering/11' },
            { label: 'Tendencias y Futuro de la Ingeniería de Software', link: '/roadmap/software-engineering/12' },
          ]
        },
        {
          label: 'Kotlin Multiplatform (La Cima)',
          collapsed: true,
          items: [
            { label: 'Introducción', link: '/roadmap/kotlin-multiplatform/' },
            { label: 'L1: La Cima: ¿Por qué KMP es el paso final?', link: '/roadmap/kotlin-multiplatform/1' },
            { label: 'L2: Kotlin Multiplatform Foundation (Compartiendo lógica)', link: '/roadmap/kotlin-multiplatform/2' },
            { label: 'L3: Arquitectura Limpia en KMP (Aplicando Ingeniería)', link: '/roadmap/kotlin-multiplatform/3' },
            { label: 'L4: Compose Multiplatform para UI Universal', link: '/roadmap/kotlin-multiplatform/4' },
            { label: 'L5: Networking y Serialización Multiplataforma', link: '/roadmap/kotlin-multiplatform/5' },
            { label: 'L6: Persistencia Local con SQLDelight', link: '/roadmap/kotlin-multiplatform/6' },
            { label: 'L7: Inyección de Dependencias Avanzada', link: '/roadmap/kotlin-multiplatform/7' },
            { label: 'L8: Testing Multiplataforma (Calidad)', link: '/roadmap/kotlin-multiplatform/8' },
            { label: 'L9: CI/CD para iOS, Android y Web', link: '/roadmap/kotlin-multiplatform/9' },
            { label: 'L10: Interoperabilidad con Swift y JavaScript', link: '/roadmap/kotlin-multiplatform/10' },
            { label: 'L11: Optimización y Rendimiento', link: '/roadmap/kotlin-multiplatform/11' },
            { label: 'L12: Proyecto Final: La Súper-App (El Gran Reto)', link: '/roadmap/kotlin-multiplatform/12' },
          ]
        },
        {
          label: 'IA: El Director de Orquesta (Alternativa)',
          collapsed: true,
          items: [
            { label: 'Introducción', link: '/roadmap/ia-para-desarrolladores/' },
            { label: 'L1: El Nuevo Paradigma (Arquitecto de Orquestación)', link: '/roadmap/ia-para-desarrolladores/1' },
            { label: 'L2: Ingeniería de Prompts de Alto Valor', link: '/roadmap/ia-para-desarrolladores/2' },
            { label: 'L3: Aprendizaje Acelerado con IA (RAG & NotebookLM)', link: '/roadmap/ia-para-desarrolladores/3' },
            { label: 'L4: Vibe Coding vs. Ingeniería de Software', link: '/roadmap/ia-para-desarrolladores/4' },
            { label: 'L5: Spec-Driven Development (SDD)', link: '/roadmap/ia-para-desarrolladores/5' },
            { label: 'L6: AI-First IDEs (Cursor & Plan Mode)', link: '/roadmap/ia-para-desarrolladores/6' },
            { label: 'L7: Terminales Agénticas (Claude Code)', link: '/roadmap/ia-para-desarrolladores/7' },
            { label: 'L8: Control del Contexto y MCP', link: '/roadmap/ia-para-desarrolladores/8' },
            { label: 'L9: Agent Rules (AGENT.md)', link: '/roadmap/ia-para-desarrolladores/9' },
            { label: 'L10: Human in the Loop (HITL) & Multi-Agent', link: '/roadmap/ia-para-desarrolladores/10' },
            { label: 'L11: Testing y Seguridad Agéntica', link: '/roadmap/ia-para-desarrolladores/11' },
            { label: 'L12: El Ciclo de Vida Autónomo y Despliegue', link: '/roadmap/ia-para-desarrolladores/12' },
          ]
        },
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
    react(),
	],
});
