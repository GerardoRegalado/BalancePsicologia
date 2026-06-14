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
├── asset-review-sheet-transparent.png
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
├── balance-favicon-transparent-candidate.png
├── balance-logo-horizontal-color.png
├── balance-logo-horizontal-color-transparent.png
├── balance-logo-stacked-black.png
├── balance-logo-stacked-black-transparent.png
├── balance-logo-stacked-color.png
├── balance-logo-stacked-color-transparent.png
├── balance-logo-stacked-white.png
└── balance-logo-stacked-white-transparent.png
```

Reglas de separacion:

- `docs/design/brand/source/` conserva originales recibidos del cliente.
- `docs/design/brand/asset-audit.md` documenta auditoria, limitaciones y recomendaciones.
- `docs/design/brand/asset-review-sheet.png` y `docs/design/brand/asset-review-sheet-transparent.png` son ayudas visuales de revision.
- `public/brand/` contiene derivados web optimizados; Phase 3.3 consume solo los dos PNG transparentes definidos en `config/brand.ts` y fueron aprobados visualmente en contexto el 2026-06-13.
- La landing no debe consumir otros derivados fuera de esta prueba; el favicon activo y Open Graph no deben consumir estos derivados hasta una fase aprobada.
- Phase 3.3 debera preferir PNG transparente aprobado si no existe SVG candidato fiel y aprobado.
- No existen candidatos SVG creados en esta fase; la fuente vectorial oficial sigue pendiente del cliente.

## Integracion tecnica Phase 3.9

Phase 3.9 integra tecnicamente favicon y Open Graph sin modificar los originales ni redisenar la identidad.

| Uso | Archivo | Fuente | Estado |
| --- | --- | --- | --- |
| Favicon | `app/icon.png` | `public/brand/balance-favicon-transparent-candidate.png` | Integrado tecnicamente; validacion contextual final pendiente en Phase 3.10 |
| Apple icon | `app/apple-icon.png` | `public/brand/balance-favicon-transparent-candidate.png` | Integrado tecnicamente; validacion contextual final pendiente en Phase 3.10 |
| Open Graph | `public/media/balance-psicologia-og.png` | Logo horizontal transparente aprobado | Creado en Phase 3.9; aprobacion visual final pendiente en Phase 3.10 |

Notas:

- `app/favicon.ico` heredado fue retirado.
- `public/media/og-default.svg` del template fue eliminado.
- No se modificaron archivos fuente en `docs/design/brand/source/`.
- No se genero SVG nuevo ni se vectorizo el logo.
- El nuevo OG mide 1200x630 y usa colores aprobados de identidad.

## Cierre contextual Phase 3.3

El cliente reviso y aprobo visualmente en la landing los dos PNG transparentes integrados en header y footer el 2026-06-13.

La aprobacion aplica solo a estas superficies y tamanos dentro de la landing actual. Favicon, Open Graph, fuente vectorial oficial y variantes no utilizadas siguen pendientes.

| Superficie | Asset en prueba | Tamano aplicado | Estado |
| --- | --- | --- | --- |
| Header | `/brand/balance-logo-horizontal-color-transparent.png` | 145px mobile, 185px desktop | Aprobado visualmente en contexto |
| Footer | `/brand/balance-logo-stacked-color-transparent.png` | 165px mobile, 145px desktop | Aprobado visualmente en contexto |

Notas:

- Las rutas y dimensiones intrinsecas se centralizan en `config/brand.ts`.
- Si el logo requiere reemplazo manual, Phase 3.3 debe poder cambiar el archivo desde `config/brand.ts` sin tocar la estructura de header/footer.
- No se integro favicon candidato; queda pendiente para Phase 3.9.
- No se reemplazo Open Graph; queda pendiente para Phase 3.9.
- No existe fuente vectorial oficial SVG/PDF/AI/EPS dentro del repositorio.
- Las variantes transparentes no utilizadas siguen pendientes de validacion humana si se desean integrar despues.
- No se usaron filtros, fondos artificiales, blend modes, mascaras ni wrappers blancos.

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
- Phase 3.9: integrar tecnicamente favicon, Open Graph y metadata final.
- Phase 3.10: validacion visual final de favicon, Open Graph y QA publico antes de promocion.
