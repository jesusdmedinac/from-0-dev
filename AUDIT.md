# 🛡️ Panel Ejecutivo de Auditoría: Cursos Principales (Course Quality Dashboard)

Este documento es el **Tablero de Control de Calidad** para los **4 Cursos Principales** de la plataforma **Desde0** que se rigen bajo el estándar pedagógico de **sesiones de 4 horas en 5 fases**.

> [!NOTE]
> **Alcance:** Este sistema de auditoría aplica exclusivamente a los 4 cursos principales listados abajo. Otros formatos (como las *Masterclasses Intensivas* o el ecosistema de cursos de *Kotlin*) cuentan con estructuras pedagógicas distintas y tendrán sus propios marcos de auditoría especializados más adelante.

---

## 📊 Estado General de Cumplimiento por Ruta (Cursos Principales)

| Ruta de Aprendizaje | Total Lecciones | Conformes 🟢 | En Progreso 🟡 | Pendientes 🔴 | % Cumplimiento | Informe Detallado |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Para no programadores** | 12 | 12 | 0 | 0 | **100%** 🟢 | [Ver Auditoría](docs/audit/para-no-programadores.md) |
| **Para principiantes** | 12 | 0 | 7 | 5 | **0%** 🟡 | [Ver Auditoría](docs/audit/para-principiantes.md) |
| **Stack personalizado** | 12 | 0 | 4 | 8 | **0%** 🟡 | [Ver Auditoría](docs/audit/stack-personalizado.md) |
| **Software Engineering** | 12 | 0 | 0 | 12 | **0%** 🔴 | [Ver Auditoría](docs/audit/software-engineering.md) |

---

## 📐 Estándar Mínimo de Aprobación para Lecciones (Quality Gate)

Para que una lección sea certificada como **🟢 Conforme**, debe cumplir con el **100%** de los siguientes 9 criterios técnicos y pedagógicos definidos en [`CONTENT_STYLE.md`](CONTENT_STYLE.md):

1. **Estructura en 5 Fases:** Fase 1 (Revisión/Rompehielos), Fase 2 (Teoría dialogada), Fase 3 (Práctica asistida), Fase 4 (Debugging de errores) y Fase 5 (Reto semanal estructurado).
2. **Formato de Comentarios en MDX:** Uso exclusivo de `{/* Duración estimada para el instructor: XX min */}` en código fuente (prohibido `<!-- -->` en `.mdx`).
3. **Redacción en 1ª Persona Inclusiva:** Pasos guiados y colaborativos (*"vamos a hacer un experimento juntos..."*).
4. **Práctica Asistida en Vivo:** De 3 a 4 retos guiados progresivos con código comentado pedagógicamente.
5. **Sección de Debugging:** Diagnóstico de 3 a 4 trampas, excepciones o errores comunes en vivo.
6. **Reto Semanal para Casa:** Especificaciones claras y criterios de evaluación/autoevaluación.
7. **Fuentes Confiables:** Sección `## 📚 Recursos y Videos Recomendados` con al menos 4 tarjetas `<LinkCard>` enlazando a documentación oficial y videos formativos.
8. **Referencias Cruzadas `(LX)`:** Enlace al inicio hacia la lección anterior y al cierre hacia la siguiente lección.
9. **Compilación Limpia:** Compilación exitosa en Astro (`astro build`).

---

## 🤖 Protocolo Obligatorio para Agentes de IA

1. **Antes de empezar:** Consultar el archivo de auditoría específico de la ruta en `docs/audit/<curso>.md`.
2. **Durante el desarrollo:** Seguir rigurosamente la plantilla y las 5 fases de `CONTENT_STYLE.md`.
3. **Al finalizar:**
   - Ejecutar la compilación de prueba (`pnpm exec astro build`).
   - Actualizar la fila de la lección en `docs/audit/<curso>.md` marcando los criterios cumplidos.
   - Actualizar el contador general en este archivo (`AUDIT.md`) y en `PROGRESS.md`.
