Feature: Implementación de la Ruta "Kotlin Multiplatform" como Cúspide del Aprendizaje
  Como administrador de la plataforma
  Quiero integrar KMP como la ruta final en la escalera de aprendizaje
  Para que los estudiantes apliquen todos sus conocimientos previos en un ecosistema unificado

  Scenario: Transformar el enlace externo en una ruta interna completa
    Given que el archivo "astro.config.mjs" tiene un enlace externo a KMP
    When elimino el enlace externo
    And creo el directorio "src/content/docs/roadmap/kotlin-multiplatform/"
    Then la plataforma debe estar lista para albergar el contenido nativo de KMP

  Scenario: Estructurar la narrativa de "La Cima" en el Index
    Given el archivo "src/content/docs/roadmap/kotlin-multiplatform/index.mdx"
    When redacto la introducción conectando las 4 rutas previas
    And defino a KMP como el integrador de Frontend, Backend y Arquitectura
    Then el estudiante debe entender que este es el paso final de su formación

  Scenario: Generar los 12 peldaños de la maestría en KMP
    Given el estándar de 12 lecciones de 4 horas
    When creo los archivos "1.mdx" al "12.mdx" con el currículo de integración total
    Then cada lección debe requerir conocimientos de las rutas anteriores
