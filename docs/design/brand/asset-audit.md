# Auditoria de assets de marca - Phase 3.2

Fecha de auditoria: 2026-06-13

Esta auditoria revisa archivos fuente de marca para preparar derivados web sin modificar originales, redisenar la identidad, vectorizar PNG ni integrar assets en UI, favicon activo, metadata u Open Graph.

## Archivos revisados

- `docs/design/brand/source/favicon.png`
- `docs/design/brand/source/logo_horizontal.png`
- `docs/design/brand/source/logo_monochrome_blanco.png`
- `docs/design/brand/source/logo_monochrome_color.png`
- `docs/design/brand/source/logo_monochrome_negro.png`

## Tabla tecnica

| Archivo | Formato | Dimensiones | Relacion | Tamano | Transparencia | Bounding box visual aprox. | Margenes / espacio vacio relevante | Variante aparente | Fondos recomendados | Legibilidad pequena | Uso recomendado | Limitaciones | Estado |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `favicon.png` | PNG RGB | 1254x1254 | 1.00 | 1,002,479 bytes | Sin alpha | x0 y0 w1254 h1254 | No hay margen util recortable; esquinas blancas por fondo opaco alrededor de tile redondeado | Simbolo / app tile a color | Fondos claros o uso como tile cuadrado | A 48px funciona; a 32px conserva lectura general; a 16px pierde detalle interno y las esquinas opacas se perciben | Fuente para favicon candidato futuro; no reemplazar `app/favicon.ico` todavia | No es icono transparente; el detalle dorado pierde fuerza a 16px; requiere validacion humana | Aprobado como candidato; pendiente de validacion humana |
| `logo_horizontal.png` | PNG RGB | 1448x1086 | 1.33 | 781,335 bytes | Sin alpha | x134 y380 w1179 h312 | Mucho fondo blanco: izq. 134px, der. 135px, arriba 380px, abajo 394px | Logo horizontal a color con simbolo + wordmark + descriptor | Fondos claros o superficies donde el fondo blanco sea aceptable | Wordmark no debe usarse demasiado pequeno; para header conviene ancho aprox. 160-220px minimo segun layout | Candidato principal para header y footer en Phase 3.3 mediante derivado recortado | Fuente no tiene transparencia; relacion del lienzo original no refleja composicion horizontal real; requiere derivado | Aprobado como candidato; requiere ajuste derivado; pendiente de validacion humana |
| `logo_monochrome_blanco.png` | PNG RGB | 1254x1254 | 1.00 | 405,786 bytes | Sin alpha | x252 y309 w764 h601 | Fondo negro amplio: izq. 252px, der. 238px, arriba 309px, abajo 344px | Logo apilado blanco sobre fondo negro | Fondos oscuros solo si se acepta conservar el tile/rectangulo negro del PNG | Legible en tamanos medianos; el descriptor pierde lectura en usos pequenos | Candidato para pruebas sobre composiciones oscuras o footer oscuro con fondo negro integrado | No es logo blanco transparente; no puede colocarse libremente sobre cualquier fondo oscuro sin mostrar rectangulo negro | Aprobado como candidato; requiere ajuste derivado; pendiente de validacion humana |
| `logo_monochrome_color.png` | PNG RGB | 1254x1254 | 1.00 | 818,425 bytes | Sin alpha | x171 y257 w920 h705 | Fondo blanco amplio: izq. 171px, der. 163px, arriba 257px, abajo 292px | Logo apilado a color; no parece monocromatico real | Fondos claros o superficies donde el fondo blanco sea aceptable | Simbolo y palabra principal legibles en mediano; descriptor se pierde pequeno | Candidato para bloques cuadrados, documentos o revision de marca; no ideal para header | Nombre fuente es confuso; no tiene transparencia; requiere derivado y aprobacion humana | Aprobado como candidato; requiere ajuste derivado; pendiente de validacion humana |
| `logo_monochrome_negro.png` | PNG RGB | 1254x1254 | 1.00 | 764,577 bytes | Sin alpha | x251 y305 w768 h599 | Fondo blanco amplio: izq. 251px, der. 235px, arriba 305px, abajo 350px | Logo apilado negro sobre fondo blanco | Fondos claros o superficies donde el fondo blanco sea aceptable | Legible en tamanos medianos; descriptor se pierde pequeno | Candidato monocromatico para fondos claros cuando no se use color | No es transparente; no conviene para fondos de color; requiere derivado | Aprobado como candidato; requiere ajuste derivado; pendiente de validacion humana |

## Recomendacion de rol por variante

| Variante fuente | Derivado generado | Rol recomendado |
| --- | --- | --- |
| `logo_horizontal.png` | `public/brand/balance-logo-horizontal-color.png` | Candidato principal para header y footer en Phase 3.3, especialmente sobre fondos claros. |
| `logo_monochrome_color.png` | `public/brand/balance-logo-stacked-color.png` | Candidato secundario para usos apilados, espacios cuadrados, documentos o bloques de revision. |
| `logo_monochrome_negro.png` | `public/brand/balance-logo-stacked-black.png` | Candidato monocromatico para fondos claros cuando la version a color no aplique. |
| `logo_monochrome_blanco.png` | `public/brand/balance-logo-stacked-white.png` | Candidato para fondos oscuros solo si se acepta su fondo negro integrado. |
| `favicon.png` | `public/brand/balance-favicon-candidate.png` | Candidato para favicon futuro en Phase 3.9, no para reemplazo inmediato. |

## Evaluacion de favicon

- El simbolo funciona mejor a 48x48 o mayor.
- A 32x32 conserva silueta general, pero se pierden matices del simbolo y contraste interno.
- A 16x16 el detalle dorado pierde presencia; se percibe mas como tile oscuro con un trazo central.
- No tiene alpha; las esquinas blancas del PNG original se mantienen como pixeles opacos.
- Puede servir como fuente para un favicon derivado, pero requiere validacion humana antes de reemplazar `app/favicon.ico`.

## Evaluacion de variante horizontal

- `logo_horizontal.png` si contiene una composicion horizontal real: simbolo a la izquierda, wordmark `BALANCE` y descriptor `PSICOLOGIA`.
- El lienzo fuente no es horizontal en terminos de archivo: mide 1448x1086 y contiene mucho fondo blanco vertical.
- El contenido visual real es aproximadamente x134 y380 w1179 h312, con relacion cercana a 3.78 antes de margen.
- El derivado `balance-logo-horizontal-color.png` conserva la composicion y elimina espacio blanco excesivo sin recortar el logo.
- Es la mejor opcion observada para header y footer, pendiente de aprobacion humana en contexto de la landing.

## Evaluacion para fondos claros y oscuros

- Fondos claros:
  - Recomendado: `balance-logo-horizontal-color.png` para header/footer.
  - Alternativas: `balance-logo-stacked-color.png` y `balance-logo-stacked-black.png` en usos apilados.
- Fondos oscuros:
  - Recomendado con cautela: `balance-logo-stacked-white.png`, porque trae fondo negro opaco integrado.
  - Pendiente ideal: una fuente vectorial o PNG transparente de logo blanco para colocar sobre fondos oscuros sin rectangulo propio.
- Fondos de color o fotografia:
  - No recomendado todavia, porque ningun fuente tiene transparencia real.

## Estado de fuente vectorial

No existe archivo fuente SVG, PDF, AI o EPS dentro de `docs/design/brand/source/`.

No se vectorizo automaticamente ningun PNG. No se genero SVG trazado, no se reconstruyo el logo y no se alteraron tipografia, proporciones ni colores. Si se requiere una fuente vectorial futura, queda pendiente solicitarla al cliente.

## Derivados generados

| Archivo | Fuente | Dimensiones | Relacion | Tamano | Transparencia | Cambio aplicado |
| --- | --- | ---: | ---: | ---: | --- | --- |
| `public/brand/balance-favicon-candidate.png` | `favicon.png` | 512x512 | 1.00 | 242,081 bytes | Sin alpha | Redimensionado web; sin recorte. |
| `public/brand/balance-logo-horizontal-color.png` | `logo_horizontal.png` | 900x296 | 3.04 | 236,397 bytes | Sin alpha | Recorte con margen seguro y redimensionado web. |
| `public/brand/balance-logo-stacked-color.png` | `logo_monochrome_color.png` | 720x575 | 1.25 | 346,346 bytes | Sin alpha | Recorte con margen seguro y redimensionado web. |
| `public/brand/balance-logo-stacked-white.png` | `logo_monochrome_blanco.png` | 720x591 | 1.22 | 211,944 bytes | Sin alpha | Recorte con margen seguro y redimensionado web. |
| `public/brand/balance-logo-stacked-black.png` | `logo_monochrome_negro.png` | 720x587 | 1.23 | 327,843 bytes | Sin alpha | Recorte con margen seguro y redimensionado web. |
| `docs/design/brand/asset-review-sheet.png` | Derivados anteriores | 1800x1200 | 1.50 | 636,270 bytes | Sin alpha | Hoja documental de revision sobre fondos claros y oscuros. |

Los derivados fueron escritos como PNG RGB y reducen peso frente a los archivos fuente equivalentes. Los originales no fueron limpiados ni modificados. Los derivados eliminan metadata innecesaria mediante reescritura PNG y no cambian apariencia salvo recorte de fondo excedente y reduccion proporcional de tamano.

## Pendientes de validacion humana

- Aprobar visualmente `balance-logo-horizontal-color.png` como candidato de header.
- Confirmar si el header debe usar logo horizontal completo o una version mas compacta.
- Confirmar si `logo_horizontal.png` funciona como variante horizontal oficial.
- Confirmar si `logo_monochrome_color.png` debe reclasificarse como logo apilado a color.
- Confirmar uso de versiones sobre fondos oscuros, porque la variante blanca no es transparente.
- Confirmar favicon final despues de revisar 16x16, 32x32 y 48x48 en navegador real.
- Solicitar fuente vectorial SVG/PDF/AI/EPS al cliente si existe.
- Solicitar variantes transparentes oficiales si se requieren para UI, fondos de color o fotografia.

## Restricciones para Phase 3.3

- Usar solo derivados ubicados en `public/brand/` si se aprueba integracion.
- No usar directamente `docs/design/brand/source/*` en UI.
- No reemplazar `app/favicon.ico` durante Phase 3.3 salvo que la fase lo apruebe explicitamente.
- No reemplazar `public/media/og-default.svg`; la composicion final de Open Graph queda para Phase 3.9.
- No crear SVG falso a partir de PNG.
- No recolorear, estirar, reconstruir, reordenar ni redisenar la marca.
- No asumir que un uso esta aprobado por existir el derivado; requiere validacion humana previa.

## Confirmacion de originales

Hashes SHA-256 registrados antes y despues de generar derivados:

| Archivo fuente | SHA-256 |
| --- | --- |
| `favicon.png` | `f6258d9dff6f8feefb203f2a0a1011085bd51ac12f98c2f195f921acd46e6221` |
| `logo_horizontal.png` | `0f7e20763a32cb6b36feac9c51841f12631327b7ed0fc2d1c114b331eabc2f56` |
| `logo_monochrome_blanco.png` | `8c9e2a45b371c6a841a350f2510cce300ea0d7125db94a483c94499be045480e` |
| `logo_monochrome_color.png` | `2fbdceee52848b296c7386d8357b8145d8e36453a4633fb983f895ff9ff6732b` |
| `logo_monochrome_negro.png` | `2f55fcffbcade8c6274a99802ca22fe4c1272862470346964b184e4e387fcb18` |

Los hashes permanecen iguales. Los archivos originales dentro de `docs/design/brand/source/` no fueron modificados, renombrados ni reemplazados.

## Phase 3.2A - Transparencia y evaluacion vectorial

Fecha de auditoria complementaria: 2026-06-13

Objetivo: preparar variantes PNG con transparencia real antes de Phase 3.3, sin redisenar, regenerar, vectorizar automaticamente ni integrar la marca en UI.

### Metodo utilizado

- Metodo: eliminacion deterministica de fondo por color detectado.
- Herramienta: script local temporal con Swift/CoreGraphics; no se agregaron dependencias al proyecto.
- Fondos blancos: deteccion de blanco/casi blanco, generacion de canal alpha y desmate contra el fondo detectado.
- Fondo negro: deteccion de negro/casi negro, generacion de canal alpha y desmate contra el fondo detectado.
- Recorte: bounding box por alpha con margen seguro.
- Exportacion: PNG RGBA, sin metadata innecesaria, sin modificar los originales.
- Fondo de landing usado para validacion: `#fcf9f8`.

### Resultados PNG transparentes

| Fuente | PNG transparente | Fondo detectado | Criterio aplicado | Dimensiones | Tamano | Alpha | Resultado visual | Halos / perdida | Estado PNG transparente | Estado SVG candidato | Uso recomendado Phase 3.3 |
| --- | --- | --- | --- | ---: | ---: | --- | --- | --- | --- | --- | --- |
| `logo_horizontal.png` | `public/brand/balance-logo-horizontal-color-transparent.png` | rgb(254,254,254) | tolerancia baja 8, alta 72 | 900x297 | 112,870 bytes | Si | Fiel sobre blanco y `#fcf9f8`; conserva simbolo, wordmark, descriptor, color y composicion | Halo claro visible si se fuerza sobre negro; no se recomienda para fondos oscuros | Aprobado para integracion | No creado; sin herramienta local de trazado fiel | Header sobre fondos claros/superficie; footer claro si aplica |
| `logo_monochrome_color.png` | `public/brand/balance-logo-stacked-color-transparent.png` | rgb(254,254,254) | tolerancia baja 8, alta 72 | 720x576 | 141,627 bytes | Si | Fiel sobre blanco y `#fcf9f8`; conserva composicion apilada a color | Pierde contraste sobre negro; no recomendado para fondos oscuros | Aprobado con observaciones | No creado; sin herramienta local de trazado fiel | Footer o bloque secundario sobre fondo claro/superficie |
| `logo_monochrome_negro.png` | `public/brand/balance-logo-stacked-black-transparent.png` | rgb(254,254,254) | tolerancia baja 8, alta 72 | 720x586 | 136,347 bytes | Si | Fiel sobre blanco y `#fcf9f8`; util como variante monocromatica oscura | No funciona sobre negro; descriptor pierde lectura en usos pequenos | Aprobado con observaciones | No creado; sin herramienta local de trazado fiel | Variante monocromatica para fondos claros |
| `logo_monochrome_blanco.png` | `public/brand/balance-logo-stacked-white-transparent.png` | rgb(0,0,0) | tolerancia baja 18, alta 96 | 720x592 | 119,599 bytes | Si | Conserva logo blanco y elimina fondo negro; funciona visualmente sobre negro | Pequenos bordes/ruido residuales heredados del fuente, visibles al ampliar letras y contornos | Requiere revision humana | No creado; sin herramienta local de trazado fiel | Candidato para footer oscuro solo con validacion humana |
| `favicon.png` | `public/brand/balance-favicon-transparent-candidate.png` | rgb(253,253,253) | tolerancia baja 8, alta 72 | 512x512 | 289,696 bytes | Si | Elimina esquinas blancas y conserva tile/simbolo | Sigue perdiendo detalle a 16x16; no corresponde a Phase 3.3 | Requiere revision humana | No creado; sin herramienta local de trazado fiel | Candidato futuro para Phase 3.9, no integrar ahora |

### Validacion de transparencia

- Todos los PNG transparentes abren correctamente como PNG RGBA.
- Se compusieron sobre blanco, negro y `#fcf9f8` en `docs/design/brand/asset-review-sheet-transparent.png`.
- Se comparo cada transparente recompuesto sobre el fondo original contra su fuente recortada/redimensionada.
- Diferencias promedio de recomposicion:
  - `balance-favicon-transparent-candidate.png`: 0.071.
  - `balance-logo-horizontal-color-transparent.png`: 1.002.
  - `balance-logo-stacked-color-transparent.png`: 0.809.
  - `balance-logo-stacked-black-transparent.png`: 0.822.
  - `balance-logo-stacked-white-transparent.png`: 1.158.
- No se detecta deformacion de letras, simbolo, proporciones o composicion en los PNG transparentes.
- Las variantes generadas desde fondo blanco conservan bordes fieles sobre fondos claros; sobre negro aparecen halos/contraste insuficiente y no deben usarse ahi.
- La variante blanca conserva lectura sobre negro, pero requiere revision humana por microbordes residuales alrededor de texto y simbolo.

### Evaluacion vectorial

No se crearon candidatos SVG.

Herramientas locales disponibles revisadas: `python3` y `qlmanage`. No se encontro Inkscape, Potrace, VTracer, Autotrace, ImageMagick ni otra herramienta local equivalente para trazado vectorial fiel.

Por restriccion de marca, no se genero:

- SVG con PNG embebido en base64.
- SVG rasterizado disfrazado de vector.
- SVG por IA generativa.
- Reconstruccion manual de letras, tipografia o simbolo.

Estado: la fuente vectorial oficial sigue pendiente del cliente. Los SVG automaticos no se consideran archivos maestros oficiales y no hay candidato SVG aprobado para Phase 3.3.

### Seleccion recomendada para Phase 3.3

Prioridad:

1. SVG candidato solo si en el futuro existe uno visualmente fiel y aprobado.
2. PNG transparente aprobado.
3. PNG opaco anterior solo como fallback documentado.

Recomendacion actual:

- Header: `public/brand/balance-logo-horizontal-color-transparent.png`.
- Footer claro o superficie clara: `public/brand/balance-logo-horizontal-color-transparent.png`.
- Footer con composicion apilada clara: `public/brand/balance-logo-stacked-color-transparent.png`.
- Footer oscuro: `public/brand/balance-logo-stacked-white-transparent.png`, solo despues de revision humana de bordes.
- No usar derivados opacos salvo fallback documentado.
- No usar SVG en Phase 3.3 porque no existe candidato fiel aprobado.
