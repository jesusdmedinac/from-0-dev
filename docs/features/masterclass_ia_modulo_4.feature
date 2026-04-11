Feature: Redacción del Módulo 4 de la Masterclass de IA
  Como instructor de la plataforma
  Quiero redactar el cuarto módulo de la Masterclass de IA
  Para que los desarrolladores aprendan a blindar su código y automatizar la entrega

  Scenario: Enseñar el Testing en flujos agénticos
    Given que la IA genera código más rápido de lo que podemos revisarlo
    When explico que el testing es la barrera de defensa más crítica
    And defino qué delegar a la IA (happy paths, helpers) y qué no (lógica crítica)
    Then el estudiante debe ver los tests como una red de seguridad obligatoria

  Scenario: Introducir el Security Review automático
    Given el riesgo de introducir vulnerabilidades con código autogenerado
    When presento herramientas de revisión automática de seguridad (ej: claude-code-security-review)
    And explico la importancia de detectar inyecciones y auth débil en cada PR
    Then el estudiante debe integrar la seguridad como un requisito arquitectónico

  Scenario: Automatizar la Entrega (CI/CD + Release Please)
    Given la necesidad de despliegues frecuentes y seguros
    When introduzco GitHub Actions para la integración continua
    And explico cómo "Release Please" automatiza el versionado y las notas de lanzamiento
    Then el estudiante debe tener un flujo de entrega profesional y automatizado
