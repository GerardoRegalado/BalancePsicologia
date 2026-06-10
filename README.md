# Balance Psicologia

Proyecto web para Balance Psicologia, consultorio psicologico en Aguascalientes, Mexico.

La entrega actual se organiza por fases: primero una pagina temporal publica para `www.balancepsicologia.com` y despues una landing publica completa. La app privada de `app.balancepsicologia.com` queda documentada como vision futura y no forma parte de la implementacion actual.

## Stack

- Next.js App Router
- TypeScript estricto
- Tailwind CSS
- ESLint + Prettier
- Vitest

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run check
npm run build
npm run validate
npm run format
npm run format:check
```

## Node recomendado

Usa Node `20.19.0` o superior.

## Documentacion

- `docs/client-discovery.md`
- `docs/project-scope.md`
- `docs/quote.md`
- `docs/design/README.md`
- `docs/design/DESIGN.md`
- `docs/development-strategy.md`
- `docs/workflow.md`
- `PROMPTS.md`

## Estructura principal

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

## Nota de alcance

No se debe implementar login, base de datos, pacientes, notas clinicas, finanzas, CRM, pagos ni app privada real sin un alcance posterior aprobado.
