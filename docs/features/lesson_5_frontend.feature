Feature: Lección 5 - Frontend Development (4 Horas)

  Scenario: Principios de UI/UX para Desarrolladores
    Given que el estudiante inicia la sección de Frontend
    Then debe aprender sobre consistencia visual, jerarquía y espaciado
    And conocer herramientas de diseño (Figma/Canva) para prototipado rápido

  Scenario: Sistemas de Componentes y Reutilización
    Given el diseño de la interfaz
    Then el estudiante debe aprender a identificar patrones repetitivos
    And construir una biblioteca de componentes base (Buttons, Inputs, Cards)
    And aplicar principios de Atomic Design (opcional pero recomendado)

  Scenario: Gestión de Estado y Consumo de API (Mocking)
    Given el contrato técnico definido en la [Lección 4 (L4)](/roadmap/stack-personalizado/4)
    Then debe aprender a manejar el estado global vs local
    And implementar un Mock Server para visualizar datos antes de tener el backend real
    And manejar estados de carga (Loading) y error en la UI

  Scenario: Taller: Maquetación del Proyecto Personal
    Given el [Backlog (L2)](/roadmap/stack-personalizado/2) y el [Roadmap (L1)](/roadmap/stack-personalizado/1)
    Then el estudiante debe maquetar la vista principal de su proyecto
    And conectar la UI con el Mock Server diseñado en la Fase 2
    And documentar la estructura de componentes en un [ADR-frontend-arquitectura](/roadmap/stack-personalizado/3)
