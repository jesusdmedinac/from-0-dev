Feature: Lección 11 - Despliegue en Producción (4 Horas)

  Scenario: Contenedores con Docker
    Given la necesidad de portabilidad
    Then el estudiante debe aprender a crear un Dockerfile optimizado para su app
    And orquestar servicios (App + DB) usando Docker Compose

  Scenario: Infraestructura en la Nube
    Given un entorno de producción real
    Then debe explorar servicios como AWS (App Runner/S3), Google Cloud o Railway
    And entender el concepto de Infraestructura como Código (IaC) básico

  Scenario: Gestión de Dominios y SSL
    Given que la app debe ser accesible al público
    Then debe configurar un dominio personalizado
    And asegurar la comunicación mediante certificados SSL/TLS

  Scenario: Taller: Lanzamiento Oficial
    Given que el proyecto cumple con los estándares de [Seguridad (L9)](/roadmap/stack-personalizado/9)
    Then el estudiante debe realizar el despliegue final en una plataforma cloud profesional
    And verificar la conectividad de extremo a extremo
    And documentar la infraestructura en un [ADR-infraestructura](/roadmap/stack-personalizado/3)
