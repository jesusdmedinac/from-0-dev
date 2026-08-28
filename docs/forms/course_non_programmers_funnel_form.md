# Course 1: Funnel & Registration Form (Para No Programadores)

## Metadata
- **Form Name:** Programación Desde0 - Para no programadores: Registro y Comunidad
- **Slug / Purpose:** `course-non-programmers-funnel`
- **Target Audience:** Absolute beginners, professionals from non-technical areas, and career switchers wanting to learn programming from scratch.
- **Live Online Classes:** Starts Sunday September 6. Sundays 9:00 AM - 11:00 AM (Morning) and 4:00 PM - 6:00 PM (Evening).
- **Duration:** 24 weeks (12 lessons, 2 weeks per lesson).
- **Pricing:** $200 MXN per class (Pay-per-session model).
- **Certification:** Official Diploma of Participation issued by Desde0 (Attendance + ShortURL Project Completion).

---

## Strategic Placements

### 1. Course Welcome / Hub Page (`src/content/docs/roadmap/para-no-programadores/index.mdx`)
- **Placement:** Section before CTA / Next steps ("Clases en Vivo", "Diploma Oficial de Participación").
- **Goal:** Main conversion point for Sunday cohorts starting Sept 6 ($200 MXN/session), schedule preference polling (9-11 AM vs 4-6 PM), and general onboarding.

### 2. Global Index / Portal (`src/content/docs/roadmap/index.mdx` & Landing)
- **Placement:** Dedicated CardGrid link for Course 1 registration.
- **Goal:** Onboard visitors exploring the 4 learning routes.

### 3. Lesson CTAs (`src/components/cta/para-no-programadores/cta.astro`)
- **Placement:** Reusable `<Cta />` component placed at the beginning and end of all 12 lessons (`1.mdx` to `12.mdx`).
- **Goal:** Capture high-intent readers studying self-paced material who want live instructor guidance.

---

## Canonical Tally MCP Payload

```json
{
  "title": "Programación Desde0 - Para no programadores: Registro y Comunidad",
  "styling": {
    "submitButtonText": "Apartar mi Lugar en el Curso"
  },
  "groups": [
    {
      "blocks": [
        {
          "type": "TEXT",
          "html": "👋 <b>¡Bienvenido a Programación Desde0!</b><br>Completa este breve formulario para apartar tu lugar en las <b>clases en vivo (Inicio: Domingo 6 de Septiembre, $200 MXN/clase)</b>, votar por tu horario preferido y acceder al material y comunidad del curso."
        }
      ]
    },
    {
      "blocks": [
        { "type": "TITLE", "html": "¿Cuál es tu nombre completo?" },
        { "type": "INPUT_TEXT", "placeholder": "Ej. Ana Martínez" }
      ]
    },
    {
      "blocks": [
        { "type": "TITLE", "html": "¿Cuál es tu correo electrónico?" },
        { "type": "INPUT_EMAIL", "placeholder": "tu-correo@ejemplo.com" }
      ]
    },
    {
      "blocks": [
        { "type": "TITLE", "html": "Número de WhatsApp / Teléfono (opcional para recordatorios de clase)" },
        { "type": "INPUT_TEXT", "placeholder": "+52 55 1234 5678" }
      ]
    },
    {
      "blocks": [
        { "type": "TITLE", "html": "¿Cuál es tu experiencia actual con la tecnología?" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Cero experiencia en programación (empiezo desde cero absoluto)" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "He intentado aprender con videos/tutoriales pero me quedé a medias" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Uso herramientas de oficina (Excel, Notion, No-Code) y quiero dar el salto a programar" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Trabajo en áreas no técnicas (Diseño, Negocios, Marketing, Salud, etc.) y quiero entender software" }
      ]
    },
    {
      "blocks": [
        { "type": "TITLE", "html": "¿Cuál es tu principal motivación para tomar este curso?" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Cambiar de carrera hacia la industria de la tecnología" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Automatizar tareas y mejorar en mi trabajo actual" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Curiosidad, desarrollo personal y agilidad mental" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Construir mi propia idea o proyecto personal" }
      ]
    },
    {
      "blocks": [
        { "type": "TITLE", "html": "¿Qué horario de clases en vivo prefieres para los domingos?" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Domingos de 9:00 AM a 11:00 AM (Matutino)" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Domingos de 4:00 PM a 6:00 PM (Vespertino)" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Cualquiera de los dos horarios me funciona" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Prefiero estudiar 100% por mi cuenta con el material escrito" }
      ]
    },
    {
      "blocks": [
        { "type": "TITLE", "html": "🎓 ¿Te interesa obtener el Diploma Oficial de Participación de Desde0?" },
        { "type": "TEXT", "html": "<i>Requisitos: Asistir a las sesiones en vivo y completar las etapas del proyecto web ShortURL.</i>" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Sí, deseo obtener mi diploma de participación oficial" },
        { "type": "MULTIPLE_CHOICE_OPTION", "text": "Solo deseo asistir a las clases y aprender sin diploma" }
      ]
    },
    {
      "blocks": [
        { "type": "TITLE", "html": "¿Qué aspectos del curso te entusiasman más?" },
        { "type": "CHECKBOX", "text": "Aprender a pensar como programador (Lógica y resolución de problemas)" },
        { "type": "CHECKBOX", "text": "Crear mi primera página web interactiva (HTML, CSS y JavaScript)" },
        { "type": "CHECKBOX", "text": "Construir el proyecto completo ShortURL (Frontend, Servidor y Base de Datos)" },
        { "type": "CHECKBOX", "text": "Aprender a publicar proyectos en internet en la nube (DevOps)" }
      ]
    },
    {
      "blocks": [
        { "type": "TITLE", "html": "¿Tienes alguna duda o expectativa que te gustaría compartir?" },
        { "type": "TEXTAREA", "placeholder": "Cuéntanos tus expectativas o preguntas..." }
      ]
    }
  ]
}
```

---

## Form Integration URL

- **URL (Production):** `https://tally.so/r/7RrOeP`
- **Form ID:** `7RrOeP`
- **Workspace ID:** `wgbE9P`
- **Status:** `PUBLISHED`
