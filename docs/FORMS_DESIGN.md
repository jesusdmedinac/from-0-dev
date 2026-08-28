# Form Design System & Specifications (from-0-dev)

This document defines the architectural guidelines, JSON/MCP specifications, and lifecycle management for interactive forms created with **Tally MCP** across the `from-0-dev` ecosystem.

---

## 1. Objectives & Funnel Strategy

Forms in the Desde0 platform serve three strategic functions:
1. **Lead & Student Onboarding (Funnel Top):** Capture student demographics, previous technical background, schedule preference, and motivations.
2. **Pedagogical Feedback Loops (Mid-Funnel):** Collect difficulty ratings and friction points throughout lessons.
3. **Course Diploma & Project Delivery (Funnel Bottom):** Validate attendance, deliver project milestone checks, and issue official Diplomas of Participation.

---

## 2. Active Form Specifications

| Form Name | Target Audience | Strategic Placement | Production URL | Spec Document |
| :--- | :--- | :--- | :--- | :--- |
| **Programación Desde0 - Para no programadores: Registro y Comunidad** | Absolute beginners & non-programmers | Course Hub (`index.mdx`), `<Cta />` components, Portal Home | [https://tally.so/r/7RrOeP](https://tally.so/r/7RrOeP) | [course_non_programmers_funnel_form.md](./forms/course_non_programmers_funnel_form.md) |

---

## 3. MCP Management Workflow

To create, update, or sync any form:
1. Define/Update the spec in `docs/forms/<form_name>.md`.
2. Execute `create_new_form` or `load_form` via Tally MCP.
3. Insert questions with `create_blocks`.
4. Publish with `save_form` (`status: "PUBLISHED"`).
5. Update embedded links in documentation `.mdx` files and `<Cta />` components.
