# AGENTS.md

## Stack base

- Next.js App Router
- TypeScript estricto
- Tailwind CSS
- ESLint + Prettier
- Vitest para validación base

## Objetivo del repo

- Mantener una sola app bien organizada hasta que exista una razón fuerte para separar apps o paquetes.
- Servir como base comercial para landings, sitios institucionales y proyectos que luego puedan crecer a panel interno.
- Priorizar claridad de responsabilidades sobre abstracciones prematuras.

## Reglas de arquitectura

- `app/` compone rutas, layouts y metadata; no debe concentrar lógica de proveedor ni contenido duro.
- `config/` define branding, navegación, metadata, settings globales y roadmap operacional.
- `content/` guarda copy editable, estructura de secciones y placeholders comerciales.
- `services/` encapsula integraciones externas mediante contratos y adapters.
- `components/sections/` debe seguir siendo reusable, content-driven y libre de lógica provider-specific.
- `components/ui/` contiene primitivas visuales; `components/layout/` estructura superficies compartidas; `components/admin/` queda reservado para piezas internas.

## Server vs Client Components

- Usa Server Components por defecto.
- Cambia a Client Component solo si el componente necesita estado local interactivo, eventos del navegador, hooks de cliente o integración directa con librerías que requieran DOM.
- No conviertas una sección completa en Client Component si el comportamiento interactivo puede aislarse en una pieza hija.
- Si un componente pasa a cliente, revisa que no importe secretos, config sensible o utilidades exclusivas del servidor.

## Branding y contenido editable

- Todo rebrand empieza en `config/brand.ts` y `config/site.ts`.
- El contenido editable vive en `content/*`.
- Si un string se puede cambiar por cliente, no debe quedar enterrado dentro de la UI.
- Las secciones deben recibir contenido por props o importar un módulo de `content/*`, no declarar copy de negocio inline.

## Integraciones y servicios

- Ninguna lógica específica de proveedor pertenece a UI, layouts o páginas.
- Cualquier integración externa debe entrar por `services/*`.
- Primero define el contrato, luego el adapter y finalmente el punto de composición en `index.ts`.
- Si todavía no entra al alcance, deja un placeholder documentado antes que una integración incompleta.

## Reglas para futuras secciones del sitio

- Mantén `components/sections/*` enfocadas en presentación y composición.
- Si una sección futura necesita datos remotos, resuélvelos fuera de la sección y pasa el resultado listo para render.
- Prepara placeholders en `content/` para services, packages, testimonials, FAQ y lead forms antes de construir la UI final.

## Reglas para futuros módulos admin

- `app/admin` sigue siendo una sola superficie interna hasta que haya auth real, base de datos o complejidad operacional suficiente para separar apps.
- Los primeros módulos esperados son `clients`, `leads`, `projects`, `content` y `media`.
- No implementar auth, DB ni uploads reales hasta que el alcance del proyecto lo exija.
- Si se agrega lógica de admin, mantener la frontera entre contenido editable, workflows internos y servicios de infraestructura.

## Performance y Next.js

- Mantén metadata centralizada con `buildMetadata`.
- Usa `next/image` cuando entren imágenes remotas reales y documenta hostname/base URL en config.
- Preserva límites claros entre contenido estático, contenido cacheable y partes dinámicas.
- Antes de agregar estado global o fetches en cliente, valida si la necesidad puede resolverse en servidor o mediante Cache Components.

## Qué evitar

- No agregar auth, base de datos, CMS o uploads reales antes de tiempo.
- No duplicar contenido comercial en múltiples componentes.
- No introducir dependencias nuevas sin justificar valor claro y mantenimiento.
- No mezclar decisiones de negocio, branding o media strategy dentro de primitivas de UI.

## Checklist antes de cerrar una tarea

- ¿La responsabilidad quedó en la capa correcta?
- ¿Branding y site config se tocaron primero cuando hubo cambios de marca?
- ¿El contenido editable quedó en `content/*` o `config/*` según corresponda?
- ¿Las integraciones externas quedaron detrás de `services/*`?
- ¿Las secciones siguen siendo reusables y content-driven?
- ¿Se respetaron los límites Server vs Client Components?
- ¿Hay impacto en docs, roadmap o decisiones que deba registrarse?
- ¿Corrieron `lint`, `typecheck`, `test` y `build`?
