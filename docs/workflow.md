# Workflow

Flujo comercial y técnico oficial para operar este template sin sobreingeniería.

## 1. Discovery

- El cliente llena `docs/client-discovery.md`.
- `docs/client-discovery.md` está pensado para clientes no técnicos y debe llenarse con lenguaje simple y ejemplos claros.
- `docs/client-discovery.md` es la fuente principal de verdad para objetivo, alcance, restricciones, contenido, branding, integraciones y prioridad.
- Interpretación obligatoria:
  - `[x]` = seleccionado.
  - `[ ]` = no seleccionado.
  - respuestas en texto libre = fuente de verdad.
  - dominio deseado = parte del discovery.

## 2. Project Scope

- Generar o actualizar `docs/project-scope.md` a partir de `docs/client-discovery.md`.
- Definir alcance incluido, excluido, supuestos, dependencias y criterios de aceptación.
- `docs/project-scope.md` debe existir antes de `docs/quote.md`.

## 3. Quote

- Generar o actualizar `docs/quote.md` usando `pricing-strategy`, con base en `docs/client-discovery.md` + `docs/project-scope.md`.
- La cotización debe considerar desarrollo asistido por IA/Codex como acelerador de implementación, sin omitir validación, feedback, QA y coordinación.
- `docs/quote.md` debe quedar alineado al scope aprobado.

## 4. Prompt para Stitch

- Generar el prompt definitivo para Stitch en una corrida separada.
- Requiere como base:
  - `docs/client-discovery.md`
  - `docs/project-scope.md`
  - `docs/quote.md`
- El prompt final se guarda en la sección C de `PROMPTS.md`.

## 5. Exportación Stitch y guardado en `docs/design/`

- Stitch no se integra automáticamente con Codex.
- El usuario copia el prompt final manualmente, lo ejecuta en Stitch y exporta un `.zip`.
- El usuario guarda manualmente en `docs/design/` solo los artefactos relevantes y aprobados.
- `docs/design/` reemplaza el uso anterior de `docs/design.md` como fuente principal de diseño.
- La estructura esperada dentro de `docs/design/` es:
  - `DESIGN.md` para el design system / visual system exportado por Stitch.
  - una carpeta por vista aprobada.
  - dentro de cada carpeta de vista: normalmente `screen.png` y `code.html`.

## 6. Development Strategy

- Solo después de tener discovery + scope + quote + diseño aprobado dentro de `docs/design/`, Codex genera `docs/development-strategy.md` (modo plan).
- La estrategia define stack, arquitectura, features, riesgos, dependencias, fases, criterios de aceptación, skills y validaciones manuales.

## 7. Implementation with Codex

- Codex implementa tomando como base obligatoria:
  - `docs/client-discovery.md`
  - `docs/project-scope.md`
  - `docs/quote.md`
  - `docs/design/README.md`
  - los artefactos aprobados dentro de `docs/design/`
  - `docs/development-strategy.md`
- La implementación se ejecuta por fases según `docs/development-strategy.md`.
- No se debe avanzar a la siguiente fase hasta que la fase actual quede validada o corregida.
- No se deben inventar secciones, features o integraciones fuera del scope aprobado.

## 8. QA / Delivery

- Validar funcionalidad, responsive, contenido, metadata y comportamiento esperado según alcance.
- Correr `npm run validate` antes de cierre cuando aplique.
- Si existe ambiente `staging`, validar ahí antes de promover a `main`.
- Entregar solo lo aprobado y registrar ampliaciones como fase posterior.

## Reglas operativas

- `docs/client-discovery.md` manda sobre interpretaciones verbales o mensajes sueltos.
- `docs/project-scope.md` se cierra antes de `docs/quote.md`.
- `docs/quote.md` se cierra antes de generar el prompt para Stitch.
- `docs/development-strategy.md` se genera después de tener discovery + scope + quote + diseño aprobado dentro de `docs/design/`.
- Si cambia el alcance, actualizar scope y cotización antes de seguir implementando.
