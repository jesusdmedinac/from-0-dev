Feature: Implementación de la Sección de Masterclasses
  Como administrador de la plataforma
  Quiero ofrecer rutas intensivas de 2 horas (Masterclasses)
  Para que los desarrolladores con poco tiempo obtengan resultados inmediatos

  Scenario: Crear la estructura de directorios para Masterclasses
    Given que la plataforma soporta rutas en "/masterclass/"
    When creo los directorios "src/content/docs/masterclass/ia-desarrolladores/"
    And creo los directorios "src/content/docs/masterclass/kotlin-multiplatform/"
    Then la infraestructura debe estar aislada de los roadmaps de 12 lecciones

  Scenario: Configurar la navegación de Masterclasses en la Sidebar
    Given el archivo "astro.config.mjs"
    When añado una nueva sección "Masterclasses (Intensivas 2h)"
    And incluyo las subcategorías de IA y KMP
    Then los usuarios deben ver esta sección como una vía rápida de aprendizaje

  Scenario: Generar los 4 módulos de 30 minutos para cada Masterclass
    Given el objetivo de 2 horas totales por masterclass
    When genero los archivos "modulo-1.mdx" al "modulo-4.mdx" para ambas rutas
    Then cada módulo debe estar diseñado para 30 minutos de aprendizaje práctico
