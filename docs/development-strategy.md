# Development Strategy

Plantilla reusable para definir la estrategia técnica y el plan de implementación antes de ejecutar con Codex.

## Contexto base

- Fuente principal: `docs/client-discovery.md`
- Scope aprobado: `docs/project-scope.md`
- Cotización aprobada: `docs/quote.md`
- Jerarquía de diseño: `docs/design/README.md`
- Artefactos visuales aprobados: `docs/design/DESIGN.md` y carpetas por vista dentro de `docs/design/`

## Resumen del proyecto

- Nombre del proyecto:
- Tipo de proyecto:
- Objetivo principal:
- Resultado esperado:
- Versión del proyecto (si aplica):

## Recomendación técnica

### Stack recomendado

- Base del repo: Next.js App Router + TypeScript + Tailwind CSS
- Librerías o servicios adicionales:

### Arquitectura recomendada

- Enfoque general:
- Qué va en `config/`:
- Qué va en `content/`:
- Qué va en `components/`:
- Qué va en `services/`:
- Si se requiere `app/admin`, backend, base de datos o storage:

## Funcionalidades principales

- 

## Supuestos

- 

## Dependencias

- 

## Riesgos

- 

## Fases de desarrollo

### Fase 1

- Objetivo:
- Entregables:
- Qué implementa Codex:
- Qué validar manualmente:
- Skills o agentes recomendados:
- Criterios de aceptación:

### Fase 2

- Objetivo:
- Entregables:
- Qué implementa Codex:
- Qué validar manualmente:
- Skills o agentes recomendados:
- Criterios de aceptación:

### Fase 3

- Objetivo:
- Entregables:
- Qué implementa Codex:
- Qué validar manualmente:
- Skills o agentes recomendados:
- Criterios de aceptación:

## Estrategia de implementación en este repo

- Rebranding y settings globales: `config/brand.ts`, `config/site.ts`, `config/media.ts`
- Contenido editable: `content/*`
- UI y composición: `app/*`, `components/*`
- Integraciones y adapters: `services/*`
- QA técnico: `npm run validate`

## Validación final antes de entrega

- Revisar que el alcance implementado coincida con `docs/project-scope.md`
- Confirmar que no se agregaron features fuera del discovery y del scope
- Validar responsive, contenido, integraciones, metadata y flujo principal
- Registrar pendientes como fase futura y no mezclarlos con el alcance aprobado
