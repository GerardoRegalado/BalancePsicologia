# Design Assets

Carpeta oficial para guardar y organizar los artefactos de diseño aprobados exportados desde Stitch.

Este contenido se llena manualmente una vez que exista un diseño aprobado en Stitch y se haya exportado el `.zip` correspondiente.

## Qué contiene `docs/design/`

- `DESIGN.md`: design system / visual system exportado por Stitch. Debe concentrar paleta, tipografía, lineamientos visuales, tono de UI y reglas del sistema visual aprobado.
- Carpetas por vista: una carpeta por cada pantalla o vista exportada desde Stitch.
- `brand/`: assets oficiales de identidad proporcionados por el cliente. Es distinto de las carpetas de vistas exportadas desde Stitch.
- Dentro de cada carpeta de vista normalmente pueden existir:
  - `screen.png`
  - `code.html`

## Assets oficiales de marca

`docs/design/brand/` contiene assets oficiales de identidad proporcionados por el cliente.

- Los originales se conservan en `docs/design/brand/source/`.
- La carpeta `brand/` no reemplaza a `DESIGN.md` ni a las vistas exportadas desde Stitch.
- La validacion y preparacion de assets se realiza en Phase 3.2.
- La integracion en UI/configuracion de marca se realiza en Phase 3.3.
- `public/brand/` queda reservado para futuros assets optimizados de produccion, pero todavia no debe crearse.

Separacion de responsabilidades:

- `docs/phase-3-input-inventory.md`: clasificacion, estado y readiness de insumos.
- `docs/phase-3-public-inputs.md`: valores exactos publicos para llenar manualmente y aprobar antes de integracion.
- `docs/design/brand/source/`: archivos originales de marca.
- `public/brand/`: futuros assets optimizados de produccion, todavia no crear.

## Estructura esperada

```text
docs/design/
  README.md
  DESIGN.md
  brand/
    README.md
    source/
  home/
    screen.png
    code.html
  login/
    screen.png
    code.html
  dashboard/
    screen.png
    code.html
  _view-template/
    README.md
```

## Jerarquía de verdad para implementación visual

Usa este orden de prioridad cuando haya dudas o conflictos:

1. `screen.png` = referencia visual principal.
2. `DESIGN.md` = sistema visual: colores, tipografía, estilo, componentes y lineamientos.
3. `code.html` = referencia estructural y semántica, pero nunca código final de producción.
4. `docs/project-scope.md` = límite funcional aprobado.
5. `docs/development-strategy.md` = guía técnica y orden de implementación.

## Reglas de uso

- No copiar `code.html` directamente a producción.
- Usar `screen.png` como fuente principal para fidelidad visual.
- Usar `DESIGN.md` para tokens visuales, estilo y lineamientos de diseño.
- Usar `code.html` solo para entender estructura, copy visible, layout y componentes.
- Si `screen.png` y `code.html` entran en conflicto, priorizar `screen.png`.
- Si el diseño contiene algo fuera de `docs/project-scope.md`, no implementarlo sin validación.
- Si falta `DESIGN.md`, documentar el hueco como supuesto o riesgo en `docs/development-strategy.md`; no inventar sistema visual sin dejar constancia.

## Proceso manual recomendado

1. Generar el prompt para Stitch desde `PROMPTS.md`.
2. Ejecutar Stitch manualmente.
3. Exportar el `.zip` desde Stitch.
4. Guardar en esta carpeta solo los artefactos aprobados:
   - `DESIGN.md` si Stitch lo entregó.
   - Cada carpeta de vista aprobada con su `screen.png` y `code.html`.

## Mapeo manual de vistas

Completa esta tabla para dejar claro qué carpeta corresponde a cada superficie del proyecto.

| Vista o superficie | Carpeta aprobada en `docs/design/` | Notas |
| --- | --- | --- |
| Página temporal / próximamente | `fase_0_proximamente` | Vista aprobada para la Fase 0. Página simple de “Balance Psicología está en construcción”. |
| Landing pública - Desktop | `fase_1_landing_page_desktop` | Vista desktop aprobada para la Fase 1. Usar `screen.png` como referencia visual principal y `code.html` solo como referencia estructural. |
| Landing pública - Mobile | `fase_1_landing_page_mobile` | Vista mobile aprobada para la Fase 1. Debe guiar el comportamiento responsive junto con la vista desktop. |
| Login | No aplica | No está incluido en el scope actual. Pertenece a una fase futura de `app.balancepsicologia.com`. |
| Dashboard | No aplica | No está incluido en el scope actual. Pertenece a una fase futura de `app.balancepsicologia.com`. |
| Otras vistas | No aplica | No hay otras vistas aprobadas para esta entrega. No inventar pantallas fuera del scope. |
