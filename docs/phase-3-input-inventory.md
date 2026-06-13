# Inventario de insumos reales - Phase 3.1

Documento de trabajo para `Version 3.x - Fine tuning de landing publica`.

Esta subfase es unicamente documental. No integra datos en la landing, no modifica componentes, no cambia configuracion publica, no publica datos nuevos y no avanza a 3.2.

## Proposito

Registrar y clasificar los insumos disponibles antes de cualquier integracion en `www.balancepsicologia.com`.

El objetivo es distinguir que puede avanzar a fases publicas de fine tuning, que requiere validacion, que debe capturarse todavia y que pertenece a fases privadas.

## Relacion con valores publicos exactos

- Este inventario clasifica disponibilidad, estado y readiness de los insumos.
- `docs/phase-3-public-inputs.md` almacena los valores exactos aprobados para publicacion antes de trasladarlos a `content/` o `config/`.
- Ningun valor publico debe integrarse en codigo mientras no este capturado y marcado como aprobado en `docs/phase-3-public-inputs.md`.

## Clasificaciones usadas

- `Publico y aprobado`
- `Publico, pendiente de validacion`
- `Privado`
- `No apto para repositorio`
- `No disponible`
- `No aplica`

## Estados de validacion usados

- `Pendiente`
- `En revision`
- `Aprobado`
- `Rechazado`

## Inventario por categoria

### 1. Logos y variantes

| Campo | Registro |
| --- | --- |
| Nombre o categoria | Logos y variantes de Balance Psicologia |
| Estado de disponibilidad | Archivos fuente capturados; derivados opacos Phase 3.2 y derivados transparentes Phase 3.2A preparados |
| Fuente | Cliente / archivos fuente en `docs/design/brand/source/`; auditoria en `docs/design/brand/asset-audit.md`; derivados en `public/brand/`; `docs/project-scope.md`; `docs/development-strategy.md` |
| Formato recibido | PNG fuente: `favicon.png`, `logo_horizontal.png`, `logo_monochrome_blanco.png`, `logo_monochrome_color.png`, `logo_monochrome_negro.png` |
| Clasificacion | `Publico y aprobado` para header/footer integrados; `Publico, pendiente de validacion` para favicon, Open Graph, fuente vectorial y variantes no utilizadas |
| Estado de validacion | `Aprobado` para header/footer; `En revision` para pendientes restantes |
| Destino futuro | 3.2 Preparacion y validacion de logos/assets; 3.3 Integracion de identidad visual real; 3.9 validacion final de favicon/imagen OG |
| Observaciones o pendientes | Auditoria Phase 3.2 completada, correccion Phase 3.2A documentada e integracion contextual Phase 3.3 aplicada. El cliente reviso y aprobo visualmente en la landing el 2026-06-13 el header con `balance-logo-horizontal-color-transparent.png` a 145px mobile y 185px desktop, y el footer con `balance-logo-stacked-color-transparent.png` a 165px mobile y 145px desktop. `balance-logo-stacked-white-transparent.png` no se usa en esta fase porque el footer actual es claro. `balance-favicon-transparent-candidate.png` queda para evaluacion futura en Phase 3.9. No hay SVG candidato aprobado; confirmar fuente vectorial SVG/PDF/AI oficial con el cliente. Los SVG automaticos no se consideran maestros oficiales. Planificar reemplazo del Open Graph del template en Phase 3.9 |

Notas:

- Los archivos fuente existen en `docs/design/brand/source/`, pero todavia no estan aprobados para produccion.
- La auditoria de Phase 3.2 esta documentada en `docs/design/brand/asset-audit.md`.
- La correccion Phase 3.2A de transparencia y evaluacion vectorial tambien esta documentada en `docs/design/brand/asset-audit.md`.
- Los derivados web opacos y transparentes estan en `public/brand/`; Phase 3.3 integra solo dos PNG transparentes.
- Phase 3.3 integra de forma contextual solo el logo horizontal transparente en header y el logo apilado transparente a color en footer.
- La integracion de header/footer fue aprobada visualmente en contexto el 2026-06-13 y sigue siendo reemplazable desde `config/brand.ts`.
- Ningun fuente tiene transparencia real; todos son PNG RGB con fondo opaco.
- Los PNG transparentes son derivados RGBA, no fuentes originales.
- No se crearon candidatos SVG porque no hay herramienta local de trazado fiel disponible; la fuente vectorial oficial sigue pendiente del cliente.
- `app/favicon.ico` se considera favicon existente del proyecto, no necesariamente favicon final aprobado.
- `public/media/og-default.svg` se considera asset OG actual/generico, no necesariamente Open Graph final aprobado.
- `public/media/og-default.svg` contiene identidad del template base. Debe considerarse rechazado como asset final; Phase 3.2 solo documenta esta situacion y su reemplazo real se atendera en Phase 3.9.
- No se debe redisenar el logo sin aprobacion expresa.

### 2. Ubicacion publica del consultorio

| Campo | Registro |
| --- | --- |
| Nombre o categoria | Ubicacion publica del consultorio |
| Estado de disponibilidad | Parcialmente capturada dentro del repositorio |
| Fuente | Cliente / valores capturados en `docs/phase-3-public-inputs.md`; `docs/project-scope.md`; `docs/development-strategy.md`; placeholders actuales en `content/contact.ts` |
| Formato recibido | Nombre publico del consultorio, ciudad, estado, pais y URL oficial de Google Maps capturados; calle, numero, colonia, codigo postal, direccion visible completa y texto breve para llegar siguen pendientes |
| Clasificacion | `Publico, pendiente de validacion` |
| Estado de validacion | `En revision` |
| Destino futuro | 3.6 Integracion de ubicacion real; 3.9 SEO local y metadata |
| Observaciones o pendientes | El nombre publico del consultorio y el enlace de Google Maps estan aprobados. Confirmar direccion exacta apta para publicacion, texto publico para llegar y nivel minimo de detalle antes de integrar. No publicar informacion privada o adicional innecesaria |

Notas:

- La landing actual usa referencia general: Aguascalientes, Mexico.
- Existe enlace de mapa validado en `docs/phase-3-public-inputs.md`, pero todavia no esta integrado.
- La direccion publica debe aprobarse antes de integrarse en UI, metadata o SEO local.

### 3. WhatsApp publico

| Campo | Registro |
| --- | --- |
| Nombre o categoria | WhatsApp publico de la psicologa |
| Estado de disponibilidad | Capturado dentro del repositorio |
| Fuente | Cliente / valores capturados en `docs/phase-3-public-inputs.md`; `docs/project-scope.md`; `docs/quote-addendum-phase-3.md`; placeholder actual en `content/contact.ts` |
| Formato recibido | Numero nacional, codigo de pais, numero internacional sin espacios y numero visible capturados; mensaje prellenado pendiente |
| Clasificacion | `Publico y aprobado` |
| Estado de validacion | `Aprobado` |
| Destino futuro | 3.4 Integracion de WhatsApp y contacto real; 3.8 flujo publico final de solicitud de cita |
| Observaciones o pendientes | El numero esta aprobado y documentado. Phase 3.4 integra `https://wa.me/524495556035` sin mensaje prellenado, sin parametros `text`, UTM ni tracking. El mensaje prellenado queda pendiente de aprobacion posterior. WhatsApp aparece en CTA del header, CTA principal del hero, menu mobile, seccion de contacto y footer |

Notas:

- Phase 3.4 publica el numero visible `449 555 6035` y centraliza `https://wa.me/524495556035` en `config/brand.ts`.
- El enlace de WhatsApp no usa mensaje prellenado ni parametros adicionales.
- El mensaje prellenado queda pendiente de aprobacion posterior.

### 4. Redes sociales

| Campo | Registro |
| --- | --- |
| Nombre o categoria | Redes sociales publicas |
| Estado de disponibilidad | Capturadas dentro del repositorio |
| Fuente | Cliente / valores capturados en `docs/phase-3-public-inputs.md`; `docs/project-scope.md`; `docs/development-strategy.md`; placeholders actuales en `config/brand.ts` y `content/contact.ts` |
| Formato recibido | Facebook e Instagram oficiales capturados; otras redes marcadas como `No aplica` |
| Clasificacion | `Publico y aprobado` |
| Estado de validacion | `Aprobado` |
| Destino futuro | 3.5 Integracion de redes sociales; 3.9 enlaces sociales y metadata cuando aplique |
| Observaciones o pendientes | Facebook e Instagram estan aprobados y documentados. Confirmar labels accesibles y ubicacion futura en header, footer o contacto antes de integrar |

Notas:

- `config/brand.ts` contempla `instagram` y `linkedin` como campos vacios mediante variables publicas; no se modifican durante Phase 3.1.
- No se integran perfiles, usuarios ni enlaces durante Phase 3.1.
- No deben publicarse redes no aprobadas o enlaces vacios.

### 5. Costos de sesiones

| Campo | Registro |
| --- | --- |
| Nombre o categoria | Costos de sesiones |
| Estado de disponibilidad | Parcialmente capturados dentro del repositorio |
| Fuente | Cliente / valores capturados en `docs/phase-3-public-inputs.md`; `docs/project-scope.md`; `docs/quote-addendum-phase-3.md`; placeholders actuales en `content/pricing.ts` |
| Formato recibido | Costos publicos para sesion individual, sesion de pareja y sesion familiar capturados; duracion y condiciones pendientes |
| Clasificacion | `Publico, pendiente de validacion` |
| Estado de validacion | `En revision` |
| Destino futuro | 3.7 Integracion de costos y servicios reales; 3.8 consistencia de CTAs; 3.9 revision de contenido sensible/SEO |
| Observaciones o pendientes | Los costos y nombres de modalidades estan aprobados y documentados. Confirmar duracion, condiciones publicas, texto comercial y exclusiones antes de integrar. No inventar promociones, duracion, descuentos, paquetes, condiciones ni resultados clinicos |

Notas:

- `content/pricing.ts` contiene placeholders editoriales, no costos reales.
- Los costos deben validarse antes de integrarse en la landing.
- Finanzas internas, pagos online, saldos, recibos o facturacion quedan fuera de Phase 3.

### 6. Servicios y modalidades relacionados

| Campo | Registro |
| --- | --- |
| Nombre o categoria | Servicios/modalidades relacionados con costos y oferta publica |
| Estado de disponibilidad | Modalidades publicas capturadas; copy editorial y condiciones finales pendientes de validacion |
| Fuente | Valores capturados en `docs/phase-3-public-inputs.md`; `docs/client-discovery.md`; `docs/project-scope.md`; `content/services.ts`; cliente para confirmacion final |
| Formato recibido | Sesion individual, sesion de pareja y sesion familiar capturadas; condiciones y duracion pendientes |
| Clasificacion | `Publico, pendiente de validacion` |
| Estado de validacion | `En revision` |
| Destino futuro | 3.7 Integracion de costos y servicios reales; 3.8 flujo publico de solicitud de cita |
| Observaciones o pendientes | Los nombres de modalidades estan aprobados y documentados. Confirmar relacion final con costos, duracion, condiciones y copy aprobado antes de integrar. No inventar especialidades, duraciones, promesas clinicas ni resultados |

Notas:

- El copy actual debe tratarse como editorial hasta que el cliente apruebe nombres, modalidades y condiciones.
- Cualquier afirmacion clinica debe revisarse con especial cuidado antes de publicarse.

### 7. Estructura utilizada para historial clinico

| Campo | Registro |
| --- | --- |
| Nombre o categoria | Estructura utilizada para historial clinico |
| Estado de disponibilidad | Existe como insumo privado externo; no debe copiarse al repositorio |
| Fuente | Cliente / insumo privado mencionado en `docs/project-scope.md` y `docs/development-strategy.md` |
| Formato recibido | No incluido en este repositorio ni en esta tarea |
| Clasificacion | `Privado`; `No apto para repositorio` si contiene valores reales o informacion identificable |
| Estado de validacion | `Pendiente` |
| Destino futuro | Phase 6.x: gestion clinica y administrativa; discovery privado y modelado con criterios legales, privacidad y seguridad |
| Observaciones o pendientes | Documentar solo que existe. Requiere discovery privado en Phase 6 antes de cualquier modelado o implementacion |

Reglas estrictas:

- No copiar campos llenos.
- No copiar nombres.
- No copiar notas.
- No copiar diagnosticos.
- No copiar ejemplos reales.
- No copiar capturas.
- No copiar datos de pacientes.
- No copiar contenido de sesiones.

Este insumo no debe integrarse en la landing publica, `content/`, `config/`, screenshots, fixtures, mocks, tests ni documentacion publica con datos reales.

## Resumen de readiness

### Resultado Phase 3.2 y candidatos para 3.3

- Archivos fuente de marca capturados: `favicon.png`, `logo_horizontal.png`, `logo_monochrome_blanco.png`, `logo_monochrome_color.png`, `logo_monochrome_negro.png`.
- Auditoria de logos/assets completada en `docs/design/brand/asset-audit.md`.
- Derivados web preparados: `balance-logo-horizontal-color.png`, `balance-logo-stacked-color.png`, `balance-logo-stacked-black.png`, `balance-logo-stacked-white.png`, `balance-favicon-candidate.png`.
- Derivados transparentes Phase 3.2A preparados: `balance-logo-horizontal-color-transparent.png`, `balance-logo-stacked-color-transparent.png`, `balance-logo-stacked-black-transparent.png`, `balance-logo-stacked-white-transparent.png`, `balance-favicon-transparent-candidate.png`.
- Header Phase 3.3 aprobado visualmente en contexto: `public/brand/balance-logo-horizontal-color-transparent.png`.
- Footer Phase 3.3 aprobado visualmente en contexto: `public/brand/balance-logo-stacked-color-transparent.png`.
- Candidato para Phase 3.3 footer oscuro: `public/brand/balance-logo-stacked-white-transparent.png`, requiere revision humana por microbordes residuales.
- Estado visual actual de header/footer: `Aprobado visualmente en contexto` desde 2026-06-13.
- Derivados opacos anteriores quedan como fallback documentado, no como opcion preferida.
- No hay SVG candidato aprobado; un SVG automatico no debe tratarse como maestro oficial.
- Favicon candidato preparado: `public/brand/balance-favicon-candidate.png`, pero su reemplazo real queda para Phase 3.9.
- Favicon transparente candidato preparado: `public/brand/balance-favicon-transparent-candidate.png`, tambien reservado para Phase 3.9.
- Favicon actual: puede revisarse como artefacto existente, pero no debe asumirse como final aprobado.

### Pendientes de validacion

- Logo principal y variantes.
- Favicon candidato.
- Imagen o asset para Open Graph.
- Fuente vectorial SVG/PDF/AI/EPS, si existe.
- Aprobacion humana de `balance-logo-stacked-white-transparent.png` si se usa sobre footer oscuro.
- Variantes transparentes oficiales del cliente para fondos de color u oscuros, si existen.
- Direccion publica del consultorio.
- Mensaje prellenado de WhatsApp.
- Duracion y condiciones de sesiones.
- Servicios/modalidades y copy comercial.

### Pendientes de captura

- Direccion visible completa aprobada.
- Correo publico aprobado.
- Horarios aprobados.
- Mensaje prellenado de WhatsApp aprobado.
- Duracion de sesiones.
- Condiciones comerciales publicas.

### Reservados para fases privadas

- Estructura utilizada para historial clinico.
- Cualquier modelo de pacientes, notas, sesiones, expedientes o seguimiento.
- Finanzas administrativas internas.
- Auditoria, permisos, roles, `workspaceId` y workflows privados.
- IA supervisada sobre contenido clinico.

### Prohibidos dentro del repositorio

- Datos de pacientes.
- Historiales clinicos llenos.
- Nombres o identificadores de pacientes.
- Diagnosticos.
- Notas de sesiones reales.
- Capturas con datos clinicos.
- Contenido de sesiones.
- Credenciales o secretos.
- Mocks, fixtures o ejemplos realistas con datos reales.

## Criterios de aceptacion de Phase 3.1

- Existe un inventario documental claro.
- Cada categoria queda clasificada.
- No se inventan valores.
- No se integra ningun dato en la landing.
- No se modifica codigo.
- No se publican datos clinicos.
- La estructura clinica queda reservada para Phase 6.
- El documento permite decidir que puede avanzar a 3.2, 3.3, 3.4, 3.5, 3.6 y 3.7.
