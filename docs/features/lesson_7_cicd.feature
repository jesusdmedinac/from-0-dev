Feature: Lección 7 - Integración Continua y Despliegue (4 Horas)

  Scenario: Automatización con GitHub Actions
    Given un repositorio Git funcional
    Then el estudiante debe aprender a crear Workflows automatizados
    And configurar triggers para cada Pull Request o Push a main

  Scenario: Pipelines de Calidad (CI)
    Given el código del proyecto
    Then la pipeline debe ejecutar automáticamente el linter y el build
    And fallar si el código no cumple con los estándares definidos

  Scenario: Estrategias de Despliegue (CD)
    Given la necesidad de entregar valor constante
    Then debe aprender sobre entornos de Staging y Producción
    And configurar el despliegue automático a una plataforma (Vercel, Netlify, Railway)

  Scenario: Taller: Mi Primer Pipeline Profesional
    Given el proyecto personal en construcción
    Then el estudiante debe tener una pipeline que valide su código
    And lograr su primer "Auto-deploy" exitoso al fusionar una rama
    And documentar el flujo en un [ADR-estrategia-despliegue](/roadmap/stack-personalizado/3)
