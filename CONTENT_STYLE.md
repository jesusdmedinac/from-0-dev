# Guía de Estilo y Metodología para Contenido de Cursos

Esta guía define el tono, metodología pedagógica, estructura y formato para crear y actualizar lecciones en la plataforma "Desde0", asegurando que cada lección funcione como una **sesión intensiva de aprendizaje de 4 horas** y a la vez como un **cuaderno de trabajo autodidacta de alto nivel**.

---

## 1. Tono, Voz y Perspectiva

- **Primera Persona Conversacional e Inclusiva**: Escribe en primera persona del plural o singular ("*Vamos a hacer un experimento juntos*", "*Acompáñame a desarmar este código*", "*Veamos qué ocurre si...*"). Evita acotaciones distantes o en tercera persona tipo libreto teatral (ej. NO escribir `*(El instructor proyecta su pantalla...)*`).
- **Alentador y Empático**: Reconoce la curva de aprendizaje y combate activamente el síndrome del impostor ("*La computadora no te juzga*", "*Cometer errores es parte natural del trabajo diario*").
- **Claro y Basado en Analogías Cotidianas**: Antes de introducir un término técnico, contextualízalo con una analogía del mundo real (ej. *variables = cajas etiquetadas en estanterías*, *funciones = máquinas de café*, *HTML/CSS/JS = estructura, estética y cerebro de una casa o auto*).
- **Pragmático y Directo**: Enseña la lógica directamente sobre código real ejecutable (evitando pseudocódigo abstracto o sintaxis ficticias intermedias que generen sobrecarga cognitiva).

---

## 2. Metodología de Sesión de 4 Horas (Las 5 Fases Pedagógicas)

Cada lección en `.mdx` debe estar estructurada obligatoriamente bajo las siguientes **5 fases metodológicas**:

```
Estructura de la Sesión
├── ☕ Fase 1: Rompehielos / Revisión del Tema Anterior y Conclusiones
├── 🎯 Fase 2: Introducción al Tema y Fundamentos Teóricos
├── 💻 Fase 3: Práctica Asistida en Vivo
├── 🗣️ Fase 4: Exposición, Debate y Debugging
└── 🏠 Fase 5: Reto Semanal y Práctica en Casa
```

### ⏱️ Regla Crítica: Tiempos Invisibles y Formato de Comentarios (.md vs .mdx)
- **NO colocar marcas de tiempo visibles** en los encabezados ni en el texto para los estudiantes (ej. NO escribir `## Fase 1 (30 min)` ni `### Reto 1 (20 min)`).
- **Distinción obligatoria de comentarios según el tipo de archivo**:
  - **En archivos `.mdx` (todas las lecciones en `src/content/docs/`)**: Los comentarios en el código fuente **deben usar la sintaxis JSX/MDX `{/* texto */}`** (`{/* Duración estimada para el instructor: 45 min */}`). Los comentarios HTML `<!-- -->` están prohibidos en `.mdx` porque rompen el compilador Rollup/MDX.
  - **En archivos `.md` (documentación general, `README.md`, `PROGRESS.md`, `AGENTS.md`, ADRs)**: Los comentarios invisibles utilizan la sintaxis estándar de Markdown/HTML `<!-- texto -->`.

---

### Descripción de las 5 Fases:

#### ☕ Fase 1: Rompehielos / Revisión del Tema Anterior y Conclusiones
<!-- Duración sugerida para el instructor: ~30 min -->
- En la **Lección 1**: Rompehielos, reflexión sobre metas personales ("tu por qué"), requisitos técnicos y mapa de ruta del curso.
- En las **Lecciones 2 en adelante**: Puesta en común del reto de la semana previa, dudas frecuentes y puente conceptual hacia la nueva lección.

#### 🎯 Fase 2: Introducción al Tema y Fundamentos Teóricos
<!-- Duración sugerida para el instructor: ~45 min -->
- Explicación dialogada y profunda de los conceptos clave.
- Desglose con tablas comparativas, diagramas de flujo y analogías memorables.
- **Experimentos Guiados en Vivo**: Pasos secuenciales donde el alumno/instructor observa cómo reacciona una aplicación real.

#### 💻 Fase 3: Práctica Asistida en Vivo
<!-- Duración sugerida para el instructor: ~90 min -->
- Taller central con **3 a 4 retos guiados progresivos** (de menor a mayor complejidad).
- Cada reto debe incluir su **Objetivo**, código fuente paso a paso comentado, explicación de por qué funciona y mini-desafíos para experimentar.

#### 🗣️ Fase 4: Exposición, Debate y Debugging
<!-- Duración sugerida para el instructor: ~45 min -->
- Espacio de puesta en común donde se contrastan distintas soluciones.
- **Anatomía de un Error**: Diagnóstico de los 3 o 4 errores típicos en vivo (`SyntaxError`, `ReferenceError`, confusiones de operadores como `=` vs `===`, bucles infinitos, alcance de variables) explicando la causa raíz y cómo resolverlos.

#### 🏠 Fase 5: Reto Semanal y Práctica en Casa
<!-- Duración sugerida para el instructor: ~30 min -->
- **Proyecto Semanal Estructurado**: Un reto práctico completo que integra todo lo aprendido en la sesión.
- Debe incluir especificaciones funcionales paso a paso y **Criterios de Entrega/Evaluación** para que el alumno pueda autoevaluarse.

---

## 3. Estructura de Archivo `.mdx` y Componentes

Toda lección debe importar y usar los componentes estándar de Starlight y Desde0:

```javascript
import { Aside, CardGrid, LinkCard } from '@astrojs/starlight/components';
import Cta from '@components/cta/para-no-programadores/cta.astro'; // Ajustar según la ruta
```

### Componentes Clave:
- `<Cta></Cta>`: Debe ubicarse **al inicio** (después de imports) y **al final** de la lección.
- `<Aside type="tip|note|caution|danger" title="...">`: Para reflexiones, advertencias técnicas o criterios de evaluación.
- `<CardGrid><LinkCard ... /></CardGrid>`: Para la sección de **Recursos y Videos Recomendados**.

---

## 4. Citas, Fuentes Confiables y Videos

- **Sección de Recursos Obligatoria**: Antes de la conclusión, toda lección debe incluir una sección `## 📚 Recursos y Videos Recomendados` con tarjetas `<LinkCard>`.
- **Calidad de Fuentes**: 
  - Para rutas de principiantes / no programadores: Videos formativos claros, ligeros y accesibles de alta calidad pedagógica.
  - Para rutas intermedias / avanzadas: Documentación oficial (MDN, React.dev), libros estándar y literatura técnica de empresas reconocidas (Google, AWS, OWASP).

---

## 5. Referencias Cruzadas (Nomenclatura LX)

Para mantener la cohesión en toda la ruta de aprendizaje:
- **Formato**: `[Texto descriptivo (LX)](/ruta/a/leccion)`
- **Regla**: Toda lección debe enlazar al inicio a la lección previa (ej. `[Lección 1: Antes de empezar (L1)](/roadmap/para-no-programadores/1)`) y al cierre a la siguiente lección (ej. `[Lección 3: Language Tour (L3)](/roadmap/para-no-programadores/3)`).

---

## 6. Plantilla Oficial de Lección (`template.mdx`)

````mdx
---
title: Título de la Lección
description: Guía y cuaderno de trabajo para una sesión intensiva de 4 horas. [Resumen motivador de los aprendizajes clave].
---

import { Aside, CardGrid, LinkCard } from '@astrojs/starlight/components';
import Cta from '@components/cta/para-no-programadores/cta.astro';

<Cta></Cta>

Párrafo introductorio conectando con la [Lección Anterior (LX-1)](/roadmap/...)...

---

## 🗺️ Estructura de la Sesión

{/* 
Guía metodológica para el instructor:
- Fase 1: Revisión del Tema Anterior / Rompehielos (~30 min)
- Fase 2: Introducción al Tema y Fundamentos Teóricos (~45 min)
- Fase 3: Práctica Asistida en Vivo (~90 min)
- Fase 4: Exposición, Debate y Debugging (~45 min)
- Fase 5: Reto Semanal y Práctica en Casa (~30 min)
*/}

Cada una de nuestras sesiones semanales sigue una metodología pedagógica dividida en **5 fases**:

```
Estructura de la Sesión
├── ☕ Fase 1: Revisión del Tema Anterior y Conclusiones
├── 🎯 Fase 2: Introducción al Tema y Fundamentos
├── 💻 Fase 3: Práctica Asistida en Vivo
├── 🗣️ Fase 4: Exposición, Debate y Debugging
└── 🏠 Fase 5: Reto Semanal y Práctica en Casa
```

---

{/* Duración estimada para el instructor: 30 min */}
## ☕ Fase 1: Revisión del Tema Anterior y Conclusiones

{/* Tiempo sugerido: 15 min */}
### 1. Puesta en Común del Reto Anterior
...

{/* Tiempo sugerido: 15 min */}
### 2. El Puente Conceptual
...

---

{/* Duración estimada para el instructor: 45 min */}
## 🎯 Fase 2: Introducción al Tema y Fundamentos Teóricos

{/* Tiempo sugerido: 15 min */}
### 1. Concepto A
...

{/* Tiempo sugerido: 15 min */}
### 2. Concepto B
...

{/* Tiempo sugerido: 15 min */}
### 🔍 Experimento en Vivo: [Nombre del Experimento]
Vamos a hacer un experimento juntos...

---

{/* Duración estimada para el instructor: 90 min */}
## 💻 Fase 3: Práctica Asistida en Vivo

Abriremos nuestro entorno de desarrollo y construiremos juntos los siguientes retos guiados:

{/* Tiempo sugerido: 20 min */}
### 🧩 Reto 1: [Nombre del Reto 1]
**Objetivo:** ...
```javascript
// Código comentado
```

{/* Tiempo sugerido: 25 min */}
### 🧩 Reto 2: [Nombre del Reto 2]
...

{/* Tiempo sugerido: 25 min */}
### 🧩 Reto 3: [Nombre del Reto 3]
...

{/* Tiempo sugerido: 20 min */}
### 🧩 Reto 4: [Nombre del Reto 4]
...

---

{/* Duración estimada para el instructor: 45 min */}
## 🗣️ Fase 4: Exposición de Resultados, Debate y Debugging

### 🐞 Errores Típicos y Trampas Comunes
#### 1. [Nombre del Error Común]
* **El error:** ...
* **Causa y Solución:** ...

---

{/* Duración estimada para el instructor: 30 min */}
## 🏠 Fase 5: Definición de Práctica en Casa / Reto Semanal

### 🏆 Proyecto Semanal: "[Nombre del Proyecto]"
**Descripción del Reto:** ...
#### Especificaciones Técnicas:
1. ...
2. ...

<Aside type="tip" title="Criterio de Entrega">
Instrucciones de auto-evaluación...
</Aside>

---

## 📚 Recursos y Videos Recomendados

<CardGrid>
  <LinkCard
    title="Recurso 1"
    href="https://..."
    description="..."
  />
  <LinkCard
    title="Recurso 2"
    href="https://..."
    description="..."
  />
</CardGrid>

---

## 🚀 Conclusión y Próximos Pasos

Resumen de logros... En la próxima sesión continuaremos con **[Siguiente Lección (LX+1)](/roadmap/...)**.

<Cta></Cta>
````
