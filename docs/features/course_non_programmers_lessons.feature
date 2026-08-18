Feature: Non-Programmers Course Curriculum (Lessons 1 to 12)
  As an aspiring developer with zero coding background
  I want a structured, practical, 4-hour 5-phase weekly learning curriculum
  So that I can build fundamental programming skills and publish a real-world ShortURL full-stack application

  # =========================================================================
  # BLOCK 1: FOUNDATIONS & MINDSET (LESSONS 1 - 2) [COMPLETED]
  # =========================================================================

  Scenario: Lesson 1 - Getting Started, Web Architecture & Browser Console
    Given the student opens the lesson "Antes de empezar" (L1)
    When the lesson is delivered in 5 distinct phases
    Then it provides icebreaker reflection prompts and technical prerequisites
    And it explains web architecture (Client, DNS, Server, HTML/CSS/JS) with live breakdown experiments
    And it guides 3 live console challenges: console.log, alert/prompt, and live DOM manipulation
    And it teaches common beginner errors debugging (SyntaxError, ReferenceError, string concatenation)
    And it assigns the "Lifetime & Biography Calculator" weekly homework project

  Scenario: Lesson 2 - Core Programming Concepts & JavaScript Fundamentals
    Given the student opens the lesson "Conceptos básicos" (L2)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 1 homework and bridges into memory and variables
    And it explains variables (let/const), primitive & complex types, operators, conditionals, loops, and functions
    And it guides 4 live console challenges: bill calculator, virtual bouncer access control, loop tables, and modular functions
    And it debugs 4 classic traps: = vs ===, while infinite loops, block scope, and NaN
    And it assigns the "Minimarket Billing Assistant" weekly homework project

  # =========================================================================
  # BLOCK 2: LANGUAGE TOUR, PARADIGMS & ARCHITECTURE (LESSONS 3 - 5)
  # =========================================================================

  Scenario: Lesson 3 - JavaScript Language Tour & Error Handling
    Given the student opens the lesson "Language Tour" (L3)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 2 billing assistant and function modularity
    And it deeply explains modern string methods, array methods (map, filter, reduce), complex objects, and try/catch/finally
    And it guides 4 live challenges: text cleaner, product catalog filter, try/catch error shield, and in-memory contact search
    And it debugs undefined properties access and accidental array mutations
    And it assigns the "Sales Analytics Engine" weekly homework project

  Scenario: Lesson 4 - Programming Paradigms (OOP, Functional & Async)
    Given the student opens the lesson "Paradigmas" (L4)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 3 sales analytics engine
    And it explains Imperative vs Declarative, OOP (classes/methods/encapsulation), Functional (pure functions), and Asynchronous JS (Promises, async/await)
    And it guides 4 live challenges: BankAccount OOP class, functional pipeline, setTimeout Promises simulation, and async/await API fetch simulation
    And it debugs unhandled promise rejections and missing await keywords
    And it assigns the "Online Food Order Async Simulator" weekly homework project

  Scenario: Lesson 5 - Tech Stacks & ShortURL Project Architecture Kickoff
    Given the student opens the lesson "Stacks" (L5)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 4 async food order simulator
    And it explains what a Tech Stack is, compares popular industry stacks, and introduces the course project: ShortURL
    And it guides 4 live challenges: system architecture flow, data model design, shortcode generator algorithm, and project directory structure
    And it debates architectural separation between Frontend and Backend
    And it assigns the "ShortURL In-Memory Prototype" weekly homework project

  # =========================================================================
  # BLOCK 3: FULL-STACK SHORTURL CONSTRUCTION (LESSONS 6 - 8)
  # =========================================================================

  Scenario: Lesson 6 - Frontend Development (Semantic HTML, Responsive CSS & DOM Events)
    Given the student opens the lesson "Frontend" (L6)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 5 ShortURL prototype
    And it explains Semantic HTML5, CSS Flexbox responsive design, and DOM event listeners
    And it guides 4 live challenges: semantic form layout, mobile-ready CSS styling, submit event interceptor with preventDefault, and dynamic result card with clipboard copy
    And it debugs page reloads on form submit and Flexbox centering issues
    And it assigns the "Real-Time URL Visual Validator" weekly homework project

  Scenario: Lesson 7 - Backend Development (Node.js, Express & REST API)
    Given the student opens the lesson "Backend" (L7)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 6 frontend UI
    And it explains HTTP protocol, status codes (200, 201, 302, 404), REST methods (GET, POST), and Express servers
    And it guides 4 live challenges: Express server setup on port 3000, POST /api/shorten endpoint, GET /:code redirect endpoint, and connecting Frontend with fetch()
    And it debugs CORS issues, EADDRINUSE port collisions, and missing express.json() middleware
    And it assigns the "GET /api/metrics/:code Analytics Endpoint" weekly homework project

  Scenario: Lesson 8 - Databases & Persistence (SQLite & SQL)
    Given the student opens the lesson "Base de datos" (L8)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 7 in-memory API limitations
    And it explains relational databases, tables, columns, primary keys, and essential SQL (CREATE, INSERT, SELECT, UPDATE)
    And it guides 4 live challenges: shorturl.db database creation, interactive SQL queries, Node.js SQLite integration, and persisting API endpoints
    And it debugs SQL syntax errors and basic SQL injection risks
    And it assigns the "Persistent Click Counter Tracker" weekly homework project

  # =========================================================================
  # BLOCK 4: PROFESSIONAL TOOLING & DEPLOYMENT (LESSONS 9 - 12)
  # =========================================================================

  Scenario: Lesson 9 - Terminal Mastery (Command Line Interface)
    Given the student opens the lesson "Uso de terminal" (L9)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 8 database persistence integration
    And it explains GUI vs CLI, filesystem hierarchies, absolute vs relative paths, and safe terminal usage
    And it guides 4 live challenges: directory navigation (pwd/ls/cd), file manipulation (mkdir/touch/mv/rm), file searching (cat/grep), and executing Node.js scripts via CLI
    And it debugs path resolution errors, permission denials, and dangerous commands
    And it assigns the "Terminal Project Explorer & Scaffold" weekly homework project

  Scenario: Lesson 10 - Version Control with Git and GitHub
    Given the student opens the lesson "Control de versiones" (L10)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 9 terminal commands
    And it explains version control fundamentals, Git repository lifecycle (Working, Staging, History), and commits
    And it guides 4 live challenges: git init and .gitignore configuration, atomic commits, GitHub remote linking & push, and feature branches
    And it debugs accidental commits of node_modules and basic merge conflicts
    And it assigns the "ShortURL Public GitHub Repository & README" weekly homework project

  Scenario: Lesson 11 - Operating Systems & Environment Variables
    Given the student opens the lesson "Sistemas operativos" (L11)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 10 GitHub repository
    And it explains OS architecture (Kernel, Processes, Threads, Memory) and Environment Variables (.env) for security
    And it guides 4 live challenges: live process monitoring, dotenv configuration in ShortURL, graceful shutdown signal handling (SIGINT/SIGTERM), and npm run scripts
    And it debugs committing .env secrets and memory leaks
    And it assigns the "Multi-Environment Dynamic Configurator" weekly homework project

  Scenario: Lesson 12 - DevOps, Cloud Deployment & Graduation
    Given the student opens the lesson "DevOps" (L12)
    When the lesson is delivered in 5 distinct phases
    Then it reviews the Lesson 11 environment configurations
    And it explains DevOps principles (Build, Test, Deploy), PaaS cloud providers, custom domains, and HTTPS
    And it guides 4 live challenges: production build readiness, connecting GitHub to Cloud PaaS, cloud environment variables setup, and live global deployment
    And it debugs build log failures and cloud SQLite permissions
    And it conducts the course retrospective, certificate awards, and orientation for the next roadmap
