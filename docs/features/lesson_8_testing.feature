Feature: Lección 8 - Testing: Unitario a E2E (4 Horas)

  Scenario: La Pirámide de Testing
    Given que el estudiante busca código a prueba de fallos
    Then debe aprender el balance entre Unit, Integration y End-to-End
    And conocer la filosofía TDD (Test Driven Development)

  Scenario: Pruebas de Lógica (Unit & Integration)
    Given las reglas de negocio en el [Dominio (L3)](/roadmap/stack-personalizado/3)
    Then debe escribir pruebas para sus funciones críticas y servicios
    And aprender a usar Mocks y Stubs para aislar dependencias externas

  Scenario: Pruebas de Interfaz (E2E)
    Given la aplicación funcionando en el [Frontend (L5)](/roadmap/stack-personalizado/5)
    Then debe configurar herramientas como Playwright o Cypress
    And automatizar un flujo crítico (ej: Login o Registro) desde la perspectiva del usuario

  Scenario: Taller: Blindando Mi Proyecto
    Given el pipeline de [CI/CD (L7)](/roadmap/stack-personalizado/7)
    Then el estudiante debe integrar las pruebas en su flujo automatizado
    And alcanzar una cobertura razonable en su lógica de negocio
    And documentar la estrategia en un [ADR-estrategia-testing](/roadmap/stack-personalizado/3)
