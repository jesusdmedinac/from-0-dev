Feature: Uso Obligatorio de Fuentes Confiables en Lecciones

  Scenario: Actualizar lecciones de 'Para no programadores' con fuentes
    Given que la ruta "Para no programadores" (L1 a L7) tiene contenido base
    Then el agente debe revisar cada lección existente
    And añadir una sección de "Referencias y Lecturas Recomendadas" usando `<LinkCard>`
    And asegurarse de que los enlaces dirijan a documentación oficial, libros o plataformas externas confiables

  Scenario: Actualizar lecciones de 'Para principiantes' con fuentes
    Given que la ruta "Para principiantes" (L1 a L7) tiene contenido base
    Then el agente debe revisar cada lección existente
    And añadir una sección de "Referencias y Lecturas Recomendadas" usando `<LinkCard>`
    And asegurarse de que los enlaces dirijan a documentación oficial, libros o plataformas externas confiables

  Scenario: Actualizar lecciones de 'Stack personalizado' con fuentes
    Given que la ruta "Stack personalizado" (L1 a L4) ha sido redactada
    Then el agente debe revisar cada lección existente
    And añadir notas en línea para justificar patrones de diseño y arquitecturas
    And añadir una sección de "Referencias y Lecturas Recomendadas" usando `<LinkCard>` con fuentes de alto nivel

  Scenario: Actualizar lecciones de 'Ingeniería de software' con fuentes
    Given que la ruta "Ingeniería de software" (L1) ha sido comenzada
    Then el agente debe revisar cada lección existente
    And añadir una sección de "Referencias y Lecturas Recomendadas" usando `<LinkCard>`
    And apoyarse explícitamente en bibliotecas y papers de la industria (ej. SWEBOK)
