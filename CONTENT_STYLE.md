# Guía de Estilo para Contenido del Curso

Esta guía define el tono, estructura y formato para crear nuevas lecciones en la plataforma "Desde0", asegurando consistencia con el material existente (e.g., ruta "Para no programadores").

## 1. Tono y Voz

- **Alentador y Empático**: El tono debe ser motivador ("¡Prepárate para dar el primer paso!", "No te preocupes si no entiendes a la primera"). Reconoce la dificultad de aprender algo nuevo.
- **Claro y Accesible**: Evita jerga técnica innecesaria. Si usas un término técnico, defínelo inmediatamente o usa una analogía.
- **Conversacional**: Escribe como si estuvieras hablando directamente con el estudiante ("Veamos", "Imagina", "¿Cómo te fue?").
- **Práctico**: Enfócate en la aplicación real de los conceptos.

## 2. Estructura de una Lección (`.mdx`)

Cada archivo `.mdx` debe seguir esta estructura general:

### A. Frontmatter

Encabezado YAML con metadatos básicos.

```yaml
---
title: Título de la Lección
description: Breve descripción motivadora de lo que se aprenderá.
---
```

### B. Importaciones

Importa los componentes necesarios al inicio.

```javascript
import Link from "@components/ui/link.astro";
import { Icon } from "@astrojs/starlight/components";
import { Image } from "astro:assets";
import Cta from "@components/cta/para-no-programadores/cta.astro"; // Ajustar ruta según corresponda
```

### C. CTA Inicial

Siempre incluye el componente de llamada a la acción al principio.

```jsx
<Cta></Cta>
```

### D. Introducción

Un párrafo introductorio que conecte con el lector y explique el "por qué" de la lección.

### E. Contenido Principal

Divide el contenido en secciones claras usando encabezados de nivel 3 (`###`).

- **Conceptos**: Explica el _qué_ y el _cómo_.
- **Analogías**: Usa comparaciones con la vida real (e.g., variables = cajas, algoritmos = recetas).
- **Bloques de Código**: Usa bloques de código con resaltado de sintaxis.
  ```js
  // Ejemplo comentado
  var variable = "valor";
  ```
- **Listas**: Usa listas numeradas para pasos secuenciales y viñetas para características.

### F. Recursos Visuales e Interactivos

- **Imágenes**: Usa el componente `<Image />` para diagramas explicativos.
- **Callouts**: Usa bloques especiales para notas o definiciones importantes.
  ```markdown
  <Aside type="note">
  **Definición**: Texto de la definición.
  </Aside>
  ```
  o
  ```jsx
  <Aside title="Nota">Texto de la nota</Aside>
  ```
- **Enlaces Externos**: Usa `LinkCard` para recursos recomendados (documentación oficial, tours interactivos).
- **Sandboxes**: Para ejemplos de código interactivos y complejos, utiliza `iframe` de CodeSandbox.
  ```html
  <iframe
    src="https://codesandbox.io/embed/ID_DEL_SANDBOX?view=editor+%2B+preview&module=%2Fsrc%2FApp.tsx"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="Título del Ejemplo"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
  ```

### G. Conclusión

Un breve resumen de lo aprendido y palabras de aliento para continuar.

### H. CTA Final

Cierra siempre con el componente de llamada a la acción.

```jsx
<Cta></Cta>
```

## 3. Citas y Fuentes Confiables

Para asegurar la calidad y credibilidad del contenido, basamos nuestras enseñanzas en mejores prácticas de la industria de ingeniería de software.

-   **Referencias y Lecturas Recomendadas**: Toda lección **debe** terminar (justo antes de la Conclusión o del CTA final) con una sección explícita de recursos utilizando el componente `<LinkCard>`. 
-   **Fuentes Permitidas**: Enlaza a documentación oficial (e.g., React.dev, MDN), libros estándar (e.g., _Clean Code_, _Refactoring UI_), estándares (e.g., OWASP, W3C) o artículos técnicos de empresas reconocidas (e.g., AWS, Google Cloud, Figma, Vercel).
-   **Notas en línea**: Cuando establezcas una regla estricta o hables de una práctica recomendada en el cuerpo del texto, considera agregar un enlace directo hacia la fuente que la respalda.

## 4. Formato y Buenas Prácticas

- **Código Comentado**: Comenta las líneas de código explicadas para reforzar el aprendizaje.
- **Énfasis**: Usa **negritas** para términos clave la primera vez que aparecen.
- **Interactividad**: Haz preguntas al lector para invitar a la reflexión ("¿Listo?", "¿Pudiste hacerlo?").
- **Ejemplos Reales**: Usa ejemplos de código que sean funcionales y fáciles de entender.
- **Nomenclatura de ADRs**: Para documentar decisiones arquitectónicas, usa nombres semánticos en lugar de números.
    - **Formato**: `ADR-[nombre-descriptivo].md` (ej: `ADR-frontend-framework.md`, `ADR-base-de-datos.md`).

## 5. Referencias Cruzadas (Nomenclatura LX)

Para mantener la cohesión en las rutas de aprendizaje, especialmente cuando una lección depende de entregables de una anterior, se debe usar la siguiente nomenclatura:

- **Formato**: `[Texto descriptivo (LX)](/ruta/a/leccion)`
- **Uso**: Siempre que menciones un concepto, entregable o decisión tomada en una lección previa.
- **Vínculos**: El vínculo es obligatorio. Usa rutas relativas de Starlight (ej: `/roadmap/stack-personalizado/2`).

**Ejemplos:**
- "...basado en tu [Roadmap (L1)](/roadmap/stack-personalizado/1)..."
- "...tomando como base tu [Backlog (L2)](/roadmap/stack-personalizado/2)..."
- "...según el diseño de tu [Arquitectura (L3)](/roadmap/stack-personalizado/3)..."

## 6. Planificación de Contenido Complejo

Para lecciones extensas o complejas (que requieran múltiples actividades, ejemplos de código avanzados o integraciones), se recomienda seguir el **Proceso de Planificación de 5 Pasos** (ver `AI_PLANNING_PROCESS.md`):

1.  **Definir el objetivo pedagógico** en lenguaje natural.
2.  **Esbozar la estructura** y escenarios de aprendizaje en Gherkin.
3.  **Validar la estructura** antes de redactar el contenido completo.
4.  **Actualizar el progreso** en `PROGRESS.md`.
5.  **Redactar sección por sección**, asegurando que cada una cumpla con su objetivo.

## 7. Ejemplo de Plantilla

````mdx
---
title: Título del Tema
description: Descripción corta y atractiva.
---

import Cta from "@components/cta/para-no-programadores/cta.astro";

<Cta></Cta>

Introducción al tema...

### Subtítulo del Concepto

Explicación del concepto...

```js
// Ejemplo de código
const ejemplo = "Hola Mundo";
```
````

### Conclusión

Resumen...

<Cta></Cta>

```

```
