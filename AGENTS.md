# Guía para Agentes de IA sobre el Proyecto "Desde0"

Este documento sirve como punto de partida para que los agentes de IA entiendan la estructura, propósito y stack tecnológico del proyecto "Desde0". El objetivo es proporcionar un contexto completo para asistir en tareas de desarrollo, creación de contenido y análisis.

## 1. Resumen del Proyecto

"Desde0" es una plataforma web educativa construida con **Astro** y **Starlight**. Su propósito principal es ofrecer rutas de aprendizaje (`roadmaps`) de programación para diferentes perfiles de estudiantes, desde principiantes absolutos hasta desarrolladores que buscan especializarse.

Además del contenido estático, el sitio integra funcionalidades dinámicas e interactivas como **autenticación de usuarios y un chat en tiempo real**, utilizando **React** y **Firebase**.

## 2. Stack Tecnológico Principal

-   **Framework**: [Astro](https://astro.build/) (para el sitio general y la arquitectura de "islas").
-   **Contenido y Documentación**: [Starlight](https://starlight.astro.build/) (para gestionar las rutas de aprendizaje en `/src/content/docs/`).
-   **Framework de UI (Islas)**: [React](https://react.dev/) (para componentes interactivos como chat y autenticación).
-   **Estilos**: [Tailwind CSS](https://tailwindcss.com/) (con un tema personalizado).
-   **Backend y Servicios**: [Firebase](https://firebase.google.com/) (para autenticación y base de datos en tiempo real).
-   **Lenguaje**: TypeScript.
-   **Formato de Contenido**: MDX (`.mdx`), que permite usar componentes de React/Astro dentro de Markdown.

## 3. Arquitectura y Estructura de Archivos

-   **`astro.config.mjs`**: Archivo de configuración central. Define las integraciones (Starlight, React, Tailwind) y la estructura de la barra lateral de la documentación.
-   **`src/content/docs/roadmap/`**: El corazón del contenido educativo. Está organizado en subdirectorios que corresponden a las rutas de aprendizaje.
    -   `para-no-programadores/`
    -   `para-principiantes/`
    -   `stack-personalizado/`
    -   `software-engineering/`
-   **`src/components/`**: Contiene componentes reutilizables de Astro. Aquí se encuentran elementos de UI como `navbar`, `hero` y `cta`. Los componentes específicos de las rutas de aprendizaje (como CTAs personalizados) también se alojan aquí.
-   **`src/pages/`**: Define las rutas principales de la aplicación.
    -   `index.astro`: La landing page.
    -   `auth/`: Contiene la lógica de autenticación (isla de React).
    -   `chat/`: Contiene la aplicación de chat (isla de React).
-   **`src/layouts/`**: Plantillas generales de diseño para las páginas.

## 4. Estrategia de Contenido

### Rutas de Aprendizaje

El contenido se divide en cuatro rutas, cada una dirigida a un público específico. **Referencia: `ANALYSIS.md`**.

1.  **Para no programadores**: Fundamentos básicos de programación con analogías y un tono muy didáctico.
2.  **Para principiantes (Juniors)**: Enfocado en la empleabilidad, enseñando herramientas y prácticas estándar de la industria (React, Node.js, Git).
3.  **Stack personalizado**: Para desarrolladores que buscan especializarse y acelerar su crecimiento, con un enfoque en estrategia y ciclo de vida del software.
4.  **Ingeniería de software**: Temas teóricos y de alto nivel sobre principios de la ingeniería de software.

### Guía de Estilo

Para crear o modificar contenido, es crucial seguir las directrices de `CONTENT_STYLE.md`. Los puntos clave son:

-   **Tono**: Alentador, empático y conversacional.
-   **Estructura de Lección**: Cada lección en `.mdx` debe estar diseñada para una sesión de aprendizaje de aproximadamente **4 horas**. Esto requiere un desarrollo de contenido profundo y detallado, que incluya no solo la teoría principal, sino también múltiples actividades prácticas (`<Aside>`), ejemplos extendidos y discusiones teóricas. La estructura general debe incluir:
    1.  Frontmatter (título, descripción).
    2.  CTA (Call to Action) inicial.
    3.  Introducción y contenido principal dividido con `###`.
    4.  Uso extensivo de componentes interactivos como `<Aside>`, `<LinkCard>` e `<iframe>`.
    5.  CTA final.
-   **Formato**: Usar **negritas** para términos clave, comentar el código y hacer preguntas para fomentar la interacción.

### Estado de Avance

El proyecto está en desarrollo activo. Muchas lecciones están incompletas y marcadas como "WIP" (Work in Progress). Para conocer el estado actual de cada lección, **consulta el archivo `PROGRESS.md`**.

## 5. Instrucciones para el Agente

-   **Punto de Partida**: Utiliza este documento (`AGENTS.md`) como tu principal fuente de contexto sobre el proyecto.
-   **Creación de Contenido**: Al generar nuevas lecciones o modificar existentes, adhiérete estrictamente a las guías en `CONTENT_STYLE.md` y replica la estructura y tono del contenido existente en `src/content/docs/roadmap/`.
-   **Análisis Técnico**: Para entender la implementación de una característica, examina los archivos en `src/components/` (componentes reutilizables) y `src/pages/` (rutas y lógica de página).
-   **Consultas Específicas**:
    -   **Stack y dependencias**: `package.json`.
    -   **Objetivos y público del contenido**: `ANALYSIS.md`.
    -   **Estado de las lecciones**: `PROGRESS.md`.
    -   **Configuración del proyecto**: `astro.config.mjs`.
-   **Comandos**: Los comandos básicos del proyecto (`dev`, `build`, etc.) se encuentran en `README.md`.