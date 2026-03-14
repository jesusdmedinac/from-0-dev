Feature: Lección 9 - Seguridad de Aplicaciones Web (4 Horas)

  Scenario: El Top 10 de OWASP
    Given que el estudiante debe proteger los datos del usuario
    Then debe aprender a identificar y prevenir Inyecciones, XSS y CSRF
    And realizar una auditoría básica de sus dependencias (npm audit)

  Scenario: Autenticación y Autorización Robusta
    Given la implementación de [JWT (L4)](/roadmap/stack-personalizado/4)
    Then debe aprender sobre el manejo seguro de Cookies (HttpOnly, Secure)
    And implementar RBAC (Role-Based Access Control) para proteger rutas críticas

  Scenario: Protección de la Infraestructura
    Given que la API está expuesta
    Then debe configurar Headers de seguridad (Helmet, CSP)
    And aprender sobre encriptación de datos sensibles en tránsito y reposo

  Scenario: Taller: Hardening de Mi Aplicación
    Given el proyecto personal casi completo
    Then el estudiante debe corregir al menos 3 vulnerabilidades potenciales
    And implementar un flujo de recuperación de contraseña seguro
    And documentar las políticas en un [ADR-seguridad](/roadmap/stack-personalizado/3)
