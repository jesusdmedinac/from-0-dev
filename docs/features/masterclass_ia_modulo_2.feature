Feature: Redacción del Módulo 2 de la Masterclass de IA
  Como instructor de la plataforma
  Quiero redactar el segundo módulo de la Masterclass de IA
  Para que los desarrolladores dominen el Spec-Driven Development y la gestión de contexto

  Scenario: Introducir el Spec-Driven Development (SDD)
    Given la necesidad de control sobre la generación de código
    When explico que el SDD desplaza el foco de "escribir código" a "validar intención"
    And presento el archivo "spec.md" como la única fuente de verdad
    Then el estudiante debe entender que la IA es el brazo ejecutor, no el arquitecto

  Scenario: Enseñar la estructura de un spec.md profesional
    Given el estándar de calidad de Desde0
    When desgloso los 5 ejes: Rol, Contexto, Tarea Exacta, Restricciones y Formato
    And proveo un ejemplo práctico de un spec para un componente real
    Then el estudiante debe ser capaz de replicar la estructura para sus propios proyectos

  Scenario: Dominar el Contexto y AGENT.md
    Given el problema de la "amnesia" entre sesiones de chat
    When explico el uso de AGENT.md como system prompt persistente
    And introduzco el concepto de Model Context Protocol (MCP) para conectar herramientas
    Then el estudiante debe saber cómo mantener a sus agentes alineados con las reglas del proyecto
