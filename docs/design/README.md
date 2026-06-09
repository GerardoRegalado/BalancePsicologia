# Design Assets

Carpeta oficial para guardar y organizar los artefactos de diseño aprobados exportados desde Stitch.

Este contenido se llena manualmente una vez que exista un diseño aprobado en Stitch y se haya exportado el `.zip` correspondiente.

## Qué contiene `docs/design/`

- `DESIGN.md`: design system / visual system exportado por Stitch. Debe concentrar paleta, tipografía, lineamientos visuales, tono de UI y reglas del sistema visual aprobado.
- Carpetas por vista: una carpeta por cada pantalla o vista exportada desde Stitch.
- Dentro de cada carpeta de vista normalmente pueden existir:
  - `screen.png`
  - `code.html`

## Estructura esperada

```text
docs/design/
  README.md
  DESIGN.md
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
| Landing pública |  |  |
| Login |  |  |
| Dashboard |  |  |
| Otras vistas |  |  |
