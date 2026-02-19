Feature: Lección Extendida de Desarrollo Backend - RESTful vs GraphQL (4 Horas)

  Scenario: Explicación de Arquitectura RESTful y Buenas Prácticas
    Given que el estudiante inicia la sección de REST
    Then debe encontrar los principios básicos (Recursos, Verbos HTTP, Stateless)
    And aprender sobre Códigos de Estado HTTP (2xx, 4xx, 5xx)
    And aprender técnicas de Paginación y Filtrado
    And ver un ejemplo de respuesta de error estandarizada

  Scenario: GraphQL Avanzado: Mutations y Real-time
    Given que el estudiante conoce las Queries
    Then debe aprender sobre Mutations para modificar datos
    And conocer las Subscriptions para actualizaciones en tiempo real
    And ver un ejemplo de manejo de errores específico de GraphQL

  Scenario: Seguridad y Comunicación entre Capas
    Given que el estudiante va a exponer su API al mundo
    Then debe entender el flujo de Autenticación con JWT
    And conocer los conceptos de CORS y Rate Limiting para protección del servidor

  Scenario: Taller de Implementación: La API de Tu Proyecto Personal
    Given que el estudiante ya tiene un Roadmap (L1), Backlog (L2) y Arquitectura (L3)
    Then debe elegir formalmente entre REST o GraphQL mediante un ADR
    And diseñar los endpoints o el Schema para su funcionalidad principal
    And definir la estrategia de seguridad y errores para su propio sistema
    And preparar la documentación técnica para la fase de construcción

  Scenario: Comparativa Estratégica y Herramientas
    Given que el estudiante necesita elegir una herramienta
    Then debe ver una tabla comparativa exhaustiva
    And encontrar recursos de herramientas profesionales (Postman, Apollo, etc.)
