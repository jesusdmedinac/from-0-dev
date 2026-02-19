Feature: Estandarización de Referencias Cruzadas (Nomenclatura LX) en Roadmaps

  Scenario: Actualizar Lección 1 con referencias y vínculo a L2
    Given que la Lección 1 menciona objetivos de carrera y el inicio del curso
    Then debe incluir la nomenclatura (L1) en su contenido relevante
    And debe terminar con un vínculo explícito a la [Lección 2 (L2)](/roadmap/stack-personalizado/2) en la sección de Conclusión

  Scenario: Actualizar Lección 2 con referencias a L1 y vínculo a L3
    Given que la Lección 2 menciona la meta SMART definida anteriormente
    Then debe usar el formato [Meta SMART (L1)](/roadmap/stack-personalizado/1)
    And debe terminar con un vínculo explícito a la [Lección 3 (L3)](/roadmap/stack-personalizado/3) en la sección de Conclusión

  Scenario: Actualizar Lección 3 con referencias a L1, L2 y vínculo a L4
    Given que la Lección 3 menciona el Roadmap y el Backlog
    Then debe usar los formatos [Roadmap (L1)](/roadmap/stack-personalizado/1) y [Backlog (L2)](/roadmap/stack-personalizado/2)
    And debe terminar con un vínculo explícito a la [Lección 4 (L4)](/roadmap/stack-personalizado/4) en la sección de Conclusión

  Scenario: Verificación de consistencia global
    Given que todas las lecciones del Stack Personalizado han sido actualizadas
    Then no debe haber menciones a lecciones previas o futuras sin el formato [Texto (LX)](/vínculo)
    And la navegación entre L1 -> L2 -> L3 -> L4 debe ser fluida y funcional
