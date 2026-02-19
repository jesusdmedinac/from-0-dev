Feature: Lección 6 - Base de Datos y ORM (4 Horas)

  Scenario: Modelado de Datos Profesional
    Given los requerimientos del [Backlog (L2)](/roadmap/stack-personalizado/2)
    Then el estudiante debe aprender a normalizar datos
    And crear diagramas de Entidad-Relación (ERD) para su proyecto
    And entender las diferencias prácticas entre SQL y NoSQL para su caso de uso

  Scenario: Implementación con ORMs
    Given un motor de base de datos elegido
    Then debe aprender a configurar un ORM (Prisma, TypeORM, Mongoose)
    And realizar migraciones de esquema de forma segura
    And entender el concepto de "Data Seeding" para desarrollo

  Scenario: Capa de Persistencia y Repositorios
    Given el diseño de [Arquitectura (L3)](/roadmap/stack-personalizado/3)
    Then debe implementar el patrón Repository para aislar la DB del dominio
    And conectar los Resolvers (GraphQL) o Controladores (REST) con la base de datos real

  Scenario: Taller: Persistencia de Mi Proyecto
    Given el diseño de la [API (L4)](/roadmap/stack-personalizado/4)
    Then el estudiante debe persistir su primera entidad real en la base de datos
    And verificar que la UI de la [Lección 5 (L5)](/roadmap/stack-personalizado/5) ahora muestra datos reales
    And crear un [ADR-seleccion-bbdd](/roadmap/stack-personalizado/3) justificando la tecnología elegida
