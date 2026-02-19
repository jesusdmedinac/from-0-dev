Feature: Lección de Desarrollo Backend - RESTful vs GraphQL

  Scenario: Explicación de Arquitectura RESTful
    Given que el estudiante inicia la sección de REST
    Then debe encontrar los principios básicos (Recursos, Verbos HTTP, Stateless)
    And una analogía del mundo real (ej. un menú de restaurante o biblioteca)
    And un ejemplo de código de un endpoint REST bien diseñado

  Scenario: Explicación de GraphQL y su propuesta de valor
    Given que el estudiante llega a la sección de GraphQL
    Then debe entender el concepto de "Graph", Esquemas y Resolvers
    And ver un ejemplo de cómo una sola consulta resuelve el problema de múltiples peticiones (N+1)
    And un ejemplo de código de una Query y un Schema básico

  Scenario: Comparativa Estratégica para Toma de Decisiones
    Given que el estudiante necesita elegir entre REST y GraphQL
    Then la lección debe presentar una tabla comparativa (Overfetching, Versioning, Tooling)
    And una guía de decisión basada en el tamaño del equipo y complejidad del frontend

  Scenario: Elementos Interactivos y Práctica
    Given la estructura de la lección de 4 horas
    Then debe incluir un <Aside> con un reto de diseño de API
    And <LinkCard> hacia playgrounds interactivos (ej. Apollo Explorer o JSONPlaceholder)
