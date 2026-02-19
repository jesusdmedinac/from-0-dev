Feature: Nomenclatura Semántica para ADRs

  Scenario: Actualizar guías de estilo y agentes
    Given que el proyecto ahora usa nombres claros para ADRs
    Then AGENTS.md debe indicar que no se usen números en ADRs
    And CONTENT_STYLE.md debe definir el formato ADR-[nombre-descriptivo].md

  Scenario: Refactorizar Lección 3 (Introducción a ADRs)
    Given que la Lección 3 presenta ejemplos numerados (001, 002)
    Then los ejemplos deben cambiarse a nombres descriptivos (ej: ADR-frontend-framework.md)
    And la explicación debe enfatizar la claridad sobre la secuencia

  Scenario: Refactorizar Lección 4 (Taller Backend)
    Given que la Lección 4 solicita crear el "ADR-004"
    Then la instrucción debe cambiar a "ADR-comunicacion-backend" (o similar)
    And debe referenciar los ADRs previos con sus nuevos nombres semánticos
