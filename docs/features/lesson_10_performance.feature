Feature: Lección 10 - Optimización de Rendimiento (4 Horas)

  Scenario: Diagnóstico de Cuellos de Botella
    Given que la aplicación ya es funcional
    Then el estudiante debe aprender a usar Lighthouse y DevTools
    And identificar componentes que se renderizan innecesariamente o queries lentas

  Scenario: Optimización en el Servidor (Backend & DB)
    Given la base de datos de la [Lección 6 (L6)](/roadmap/stack-personalizado/6)
    Then debe aprender sobre Indexación de tablas
    And implementar estrategias de Caché (Redis o en memoria) para datos frecuentes

  Scenario: Optimización en el Cliente (Frontend)
    Given el bundle de la [Lección 5 (L5)](/roadmap/stack-personalizado/5)
    Then debe aplicar Code Splitting y Lazy Loading
    And optimizar la carga de imágenes y fuentes críticas

  Scenario: Taller: Haciendo que Mi App Vuele
    Given el proyecto en producción
    Then el estudiante debe lograr una puntuación superior a 90 en Lighthouse (Performance)
    And reducir el tiempo de respuesta de su API principal en un 30%
    And documentar las optimizaciones en un [ADR-rendimiento](/roadmap/stack-personalizado/3)
