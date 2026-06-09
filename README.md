# Repo Base

Plantilla principal para arrancar proyectos comerciales ligeros con Next.js, TypeScript y Tailwind CSS.

## Sirve para

- Landing pages
- Sitios institucionales
- SPAs ligeras
- Marketing sites
- Proyectos que luego puedan crecer a admin panel o SaaS ligero

## Stack

- Next.js App Router
- TypeScript estricto
- Tailwind CSS
- ESLint + Prettier
- Vitest como base de testing

## Scripts

```bash
npm run dev
npm run check
npm run validate
npm run lint
npm run format
npm run typecheck
npm run test
npm run build
npm run unlight:staging
npm run unlight:prod
```

## Node recomendado

Usa `20.19.0` o superior. El proyecto incluye `.nvmrc`.

## Documentación

- `docs/client-discovery.md`
- `docs/project-scope.md`
- `docs/quote.md`
- `docs/design.md`
- `docs/development-strategy.md`
- `docs/workflow.md`
- `docs/skills.md`
- `PROMPTS.md`

## Estructura rápida

```text
app/
components/
config/
content/
docs/
lib/
services/
tests/
types/
```

## Qué mejora en v1.1

- Configuración de branding, site y media con variables de entorno más completas
- Fronteras más claras entre `config/`, `content/`, `services/` y `components/sections/`
- Placeholder operativo para la futura superficie admin
- Documentación más cercana al flujo real de proyectos freelance
- Baseline tests para metadata, media y readiness del template

## Nota sobre media

El repo no implementa todavía uploads reales ni cloud storage operativo. Sí deja lista la capa de adapters y la documentación para conectar Cloudflare R2 o AWS S3 cuando el proyecto lo necesite.
