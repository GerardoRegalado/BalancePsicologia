# Assets oficiales de marca

Esta carpeta prepara la recepcion de archivos oficiales de identidad visual proporcionados por el cliente antes de auditarlos en Phase 3.2.

## Proposito

- `source/` contiene archivos originales recibidos del cliente.
- Los archivos originales todavia no se consideran optimizados ni integrados.
- Los assets se validaran durante Phase 3.2.
- Los assets preparados para web se exportan a `public/brand/` despues de auditoria, sin integrarlos automaticamente.
- Los assets para Open Graph podran exportarse despues a `public/media/`.

No se deben reemplazar assets de produccion hasta una fase aprobada.

## Reglas

- No guardar datos clinicos.
- No guardar credenciales, secretos ni tokens.
- No guardar archivos ajenos a identidad visual.
- No modificar directamente los archivos originales dentro de `source/`.
- Los derivados deben usar nombres claros en kebab-case.
- No redisenar logos ni variantes sin aprobacion expresa.
- No integrar logos en la landing durante esta preparacion documental.

## Estructura actual

```text
docs/design/brand/
├── README.md
├── asset-audit.md
├── asset-review-sheet.png
└── source/
    ├── favicon.png
    ├── logo_horizontal.png
    ├── logo_monochrome_blanco.png
    ├── logo_monochrome_color.png
    └── logo_monochrome_negro.png
```

Nota:

- Estos son archivos fuente originales en PNG.
- Todavia no son derivados optimizados de produccion.
- No deben renombrarse ni modificarse directamente.
- Phase 3.2 debera auditar dimensiones, recortes, transparencia, contraste, legibilidad y uso previsto.
- Debe confirmarse si existe una fuente vectorial SVG/PDF/AI.
- Los derivados futuros deberan usar nombres en kebab-case.
- `favicon.png` es candidato fuente, no favicon de produccion final.
- `logo_horizontal.png` debe revisarse visualmente para confirmar que su composicion y recorte funcionan realmente como variante horizontal.
- Los derivados para produccion deberan optimizar peso y eliminar metadata innecesaria cuando aplique.
- `public/brand/` contiene derivados web preparados en Phase 3.2, pero no integrados.

## Derivados web creados

```text
public/brand/
├── balance-favicon-candidate.png
├── balance-logo-horizontal-color.png
├── balance-logo-stacked-black.png
├── balance-logo-stacked-color.png
└── balance-logo-stacked-white.png
```

Reglas de separacion:

- `docs/design/brand/source/` conserva originales recibidos del cliente.
- `docs/design/brand/asset-audit.md` documenta auditoria, limitaciones y recomendaciones.
- `docs/design/brand/asset-review-sheet.png` es solo ayuda visual de revision.
- `public/brand/` contiene derivados web optimizados, sin integracion activa todavia.
- La landing, el favicon activo y Open Graph no deben consumir estos derivados hasta una fase aprobada.

## Estructura orientativa para archivos recibidos

Los nombres siguientes son orientativos y dependen de los archivos realmente proporcionados por el cliente:

```text
docs/design/brand/
├── README.md
└── source/
    ├── balance-logo-primary.svg
    ├── balance-logo-horizontal.svg
    ├── balance-logo-symbol.svg
    ├── balance-logo-monochrome.svg
    └── balance-logo-preview.png
```

## Destinos futuros

- Phase 3.2: revisar formatos, seleccionar variantes, validar contraste/legibilidad y preparar derivados.
- Phase 3.3: integrar identidad visual aprobada en UI/configuracion de marca.
- Phase 3.9: validar favicon, Open Graph y metadata final.
