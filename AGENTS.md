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

### Guía de Estilo y Metodología Pedagógica

Para crear o modificar contenido, es **obligatorio** seguir las directrices de `CONTENT_STYLE.md`. Los puntos clave son:

-   **Tono y Perspectiva**: Redacción en primera persona inclusiva ("*Vamos a hacer un experimento juntos*", "*Veamos qué ocurre si...*"). Prohibidas las acotaciones impersonales o en tercera persona tipo libreto.
-   **Estructura de Lección de 4 Horas en 5 Fases**: Cada lección en `.mdx` debe estructurarse obligatoriamente en 5 bloques pedagógicos:
    1.  **Fase 1**: Rompehielos / Revisión de la semana previa y puente conceptual (~30 min).
    2.  **Fase 2**: Introducción teórica dialogada y experimentos guiados en vivo (~45 min).
    3.  **Fase 3**: Práctica asistida en vivo con 3 a 4 retos guiados progresivos (~90 min).
    4.  **Fase 4**: Exposición de resultados, debate y debugging de errores comunes (`SyntaxError`, `ReferenceError`, trampas de sintaxis) (~45 min).
    5.  **Fase 5**: Reto semanal estructurado y práctica en casa con criterios de evaluación (~30 min).
-   **Regla de Tiempos Invisibles**: **NO colocar marcas de tiempo visibles para el alumno** en títulos o textos. Todos los tiempos se especifican como comentarios HTML (`<!-- Duración estimada para el instructor: XX min -->`) en el código fuente.
-   **Enfoque Pragmático (Sin pseudocódigo abstracto innecesario)**: Enseñar la lógica de programación directamente sobre código real ejecutable del ecosistema del curso (ej. JavaScript).
-   **Formato y Componentes**:
    -   Frontmatter (título, descripción).
    -   CTA inicial (`<Cta></Cta>`).
    -   Estructura en 5 fases con encabezados `##`.
    -   Uso de `<Aside type="tip|note|caution">` para reflexiones y criterios de evaluación.
    -   Sección obligatoria de `## 📚 Recursos y Videos Recomendados` con `<CardGrid>` y `<LinkCard>`.
    -   CTA final (`<Cta></Cta>`).
-   **Referencias Cruzadas**: Toda lección debe enlazar al inicio a la lección previa y al cierre a la siguiente usando el formato **`[Texto descriptivo (LX)](/ruta/a/leccion)`**.

### Estado de Avance

El proyecto está en desarrollo activo. Para conocer el estado actual de cada lección, **consulta el archivo `PROGRESS.md`**.

## 5. Proceso de Desarrollo (AI Planning Process)

Para cualquier tarea de desarrollo, refactorización o creación de nuevas funcionalidades, es **obligatorio** seguir el **Proceso de Planificación de 5 Pasos** detallado en `AI_PLANNING_PROCESS.md`:

1.  **Definir la idea** en lenguaje natural.
2.  **Generar Features y Escenarios** en formato **Gherkin**.
3.  **Persistir Features** en archivos `.feature` (en `docs/features/`).
4.  **Actualizar `PROGRESS.md`** con la lista de escenarios.
5.  **Desarrollar escenario por escenario**, realizando commits atómicos por cada uno.

## 6. Instrucciones para el Agente

-   **Punto de Partida**: Utiliza este documento (`AGENTS.md`) y `CONTENT_STYLE.md` como tu principal fuente de contexto sobre el proyecto.
-   **Metodología de Contenido**: Toda nueva lección o modificación debe cumplir con el estándar de **4 horas en 5 fases**, **tiempos invisibles en comentarios HTML**, **primera persona inclusiva** y **retos prácticos guiados**.
-   **Documentación de Decisiones (ADRs)**: Al sugerir o crear registros de decisión arquitectónica, utiliza **nombres semánticos** (ej: `ADR-backend-comunicacion.md`) en lugar de números secuenciales, siguiendo el formato definido en `CONTENT_STYLE.md`.
-   **Creación de Contenido y Uso de Fuentes**:
    -   Al generar nuevas lecciones o modificar existentes, adhiérete estrictamente a las guías en `CONTENT_STYLE.md` y replica la estructura y tono del contenido existente.
    -   **REGLA IRROMPIBLE (FUENTES CONFIABLES)**: Toda lección debe incluir una sección final de "Recursos y Videos Recomendados" utilizando `<CardGrid>` y `<LinkCard>`, enlazando a fuentes de alta calidad pedagógica (videos claros para principiantes / no programadores, y documentación oficial como MDN/React.dev o estándares OWASP/AWS para cursos técnicos).
-   **Análisis Técnico**: Para entender la implementación de una característica, examina los archivos en `src/components/` (componentes reutilizables) y `src/pages/` (rutas y lógica de página).
-   **Consultas Específicas**:
    -   **Stack y dependencias**: `package.json`.
    -   **Objetivos y público del contenido**: `ANALYSIS.md`.
    -   **Estado de las lecciones**: `PROGRESS.md`.
    -   **Configuración del proyecto**: `astro.config.mjs`.
-   **Comandos**: Los comandos básicos del proyecto (`dev`, `build`, etc.) se encuentran en `README.md`.