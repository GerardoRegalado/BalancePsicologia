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
| Destino futuro | 3.10 validacion visual final de favicon/imagen OG y QA publico |
| Observaciones o pendientes | Auditoria Phase 3.2 completada, correccion Phase 3.2A documentada e integracion contextual Phase 3.3 aplicada. El cliente reviso y aprobo visualmente en la landing el 2026-06-13 el header con `balance-logo-horizontal-color-transparent.png` a 145px mobile y 185px desktop, y el footer con `balance-logo-stacked-color-transparent.png` a 165px mobile y 145px desktop. `balance-logo-stacked-white-transparent.png` no se usa en esta fase porque el footer actual es claro. Phase 3.9 integra tecnicamente favicon desde `balance-favicon-transparent-candidate.png`, elimina `app/favicon.ico`, elimina `public/media/og-default.svg` y crea `public/media/balance-psicologia-og.png`. No hay SVG candidato aprobado; confirmar fuente vectorial SVG/PDF/AI oficial con el cliente. Los SVG automaticos no se consideran maestros oficiales. Aprobacion visual final de favicon y OG queda reservada para Phase 3.10 |

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
- `app/favicon.ico` heredado fue retirado en Phase 3.9.
- `public/media/og-default.svg` contenia identidad del template base y fue eliminado en Phase 3.9.
- `public/media/balance-psicologia-og.png` es el nuevo asset OG tecnico y requiere validacion visual final en Phase 3.10.
- No se debe redisenar el logo sin aprobacion expresa.

### 2. Ubicacion publica del consultorio

| Campo | Registro |
| --- | --- |
| Nombre o categoria | Ubicacion publica del consultorio |
| Estado de disponibilidad | Capturada dentro del repositorio e integrada en footer, tarjeta de contacto y seccion de ubicacion |
| Fuente | Cliente / valores capturados en `docs/phase-3-public-inputs.md`; `docs/project-scope.md`; `docs/development-strategy.md`; placeholders actuales en `content/contact.ts` |
| Formato recibido | Nombre publico del consultorio, calle y numero, colonia, codigo postal, ciudad, estado, pais, direccion visible completa y URL oficial de Google Maps capturados; texto breve para llegar sigue pendiente |
| Clasificacion | `Publico y aprobado` para direccion visible y Google Maps; `Publico, pendiente de validacion` para texto breve para llegar |
| Estado de validacion | `Aprobado` para direccion visible y Google Maps; `En revision` para texto breve para llegar |
| Destino futuro | Texto breve para llegar cuando sea aprobado; QA final Phase 3.10 |
| Observaciones o pendientes | Phase 3.6 completada para integracion publica de ubicacion. Phase 3.6A rechaza visualmente la vista abstracta anterior y la sustituye por Google Maps Embed API en modo `place`. El cliente confirmo que Google Maps Embed API quedo configurada, que el mapa real aparece correctamente en la landing, que el fallback continua disponible para entornos sin variable y que la correccion visual de contraste fue aceptada; Phase 3.6A queda cerrada. La direccion visible completa `Jacaranda 552, Las Arboledas, 20020 Aguascalientes, Ags.`, el nombre `Clínica MIND` y el enlace de Google Maps estan aprobados e integrados. La direccion aparece en footer, la tarjeta de contacto enlaza a Google Maps y la seccion de ubicacion muestra Clínica MIND, direccion real, mapa embebido cuando existe `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY`, fallback cuando falta configuracion y CTA a Google Maps. Phase 3.9 agrega JSON-LD local prudente con `ProfessionalService`, direccion, telefono internacional, mapa y redes aprobadas. No se usa Maps JavaScript API, geolocalizacion ni almacenamiento de ubicaciones de visitantes. El texto breve para llegar sigue pendiente |

Notas:

- `locationSectionContent` ya muestra Clínica MIND, direccion real y CTA a Google Maps.
- El footer usa la direccion completa y el enlace de Google Maps aprobados.
- La tarjeta de contacto de ubicacion usa `kind: location` y abre Google Maps.
- La vista abstracta anterior fue retirada.
- La seccion de ubicacion usa Google Maps Embed API con iframe lazy cuando la variable publica restringida esta configurada.
- Si falta configuracion, la seccion muestra fallback limpio con CTA externo.
- Phase 3.6A queda cerrada por confirmacion del cliente; no se documentan API keys, identificadores de Google Cloud, facturacion ni valores de variables de entorno.
- No se agregan referencias para llegar, entrecalles, piso, numero interior, horarios, estacionamiento ni indicaciones privadas.

### 3. WhatsApp publico

| Campo | Registro |
| --- | --- |
| Nombre o categoria | WhatsApp publico de la psicologa |
| Estado de disponibilidad | Capturado dentro del repositorio |
| Fuente | Cliente / valores capturados en `docs/phase-3-public-inputs.md`; `docs/project-scope.md`; `docs/quote-addendum-phase-3.md`; placeholder actual en `content/contact.ts` |
| Formato recibido | Numero nacional, codigo de pais, numero internacional sin espacios y numero visible capturados; mensaje prellenado pendiente |
| Clasificacion | `Publico y aprobado` |
| Estado de validacion | `Aprobado` |
| Destino futuro | 3.9 QA final de enlaces y contenido |
| Observaciones o pendientes | El numero esta aprobado y documentado. Phase 3.4 integra `https://wa.me/524495556035` sin mensaje prellenado, sin parametros `text`, UTM ni tracking. Phase 3.8A aclara que WhatsApp es el canal principal provisional durante la etapa actual de la landing: hero, header, menu mobile y seccion de agenda usan la misma URL. El formulario visual deshabilitado fue retirado para no simular funcionalidad; esto no cancela un formulario publico futuro, que queda fuera de Phase 3 y debera conectarse a un flujo privado seguro de leads. La landing no recopila, almacena ni envia datos. No existe agenda automatica ni confirmacion inmediata. WhatsApp y redes permaneceran como canales alternativos, y contactos externos podran registrarse manualmente en una fase privada futura. El mensaje prellenado queda pendiente de aprobacion posterior. WhatsApp aparece en CTA del header, CTA principal del hero, menu mobile, seccion de agenda, seccion de contacto y footer |

Notas:

- Phase 3.4 publica el numero visible `449 555 6035` y centraliza `https://wa.me/524495556035` en `config/brand.ts`.
- El enlace de WhatsApp no usa mensaje prellenado ni parametros adicionales.
- Phase 3.8 completa el flujo publico de solicitud de cita mediante WhatsApp y mantiene `#agenda` como explicacion del proceso.
- Phase 3.8A aclara que WhatsApp es una solucion temporal/provisional de la landing actual; el formulario publico futuro queda fuera de Phase 3.
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
| Observaciones o pendientes | Phase 3.5A mantiene Facebook e Instagram aprobados en seccion de contacto, footer y navegacion mobile. Se retiraron del header desktop por decision visual del cliente y no aparecen en el header en ningun breakpoint. Solo se integran redes aprobadas; LinkedIn no aplica y no se integra. Las URLs no usan `?ref=1`, `igsh`, `utm_source`, UTM, QR ni tracking adicional. No se habilito correo publico porque sigue pendiente. La revision final de enlaces sociales y metadata queda para Phase 3.9 |

Notas:

- `config/brand.ts` contiene solo `facebook` e `instagram` dentro de `social`.
- La seccion de contacto muestra exactamente WhatsApp, Facebook, Instagram y ubicacion.
- El footer conserva WhatsApp y Facebook/Instagram como enlaces discretos junto con la direccion aprobada.
- El menu mobile incluye Facebook e Instagram antes del CTA principal y cierra al activar cada enlace.
- El header ya no muestra Facebook ni Instagram en ningun breakpoint.
- El panel mobile usa `top-16` para alinearse con el header `min-h-16`.
- No se agregan redes no aprobadas, LinkedIn, correo publico ni enlaces vacios.
- Phase 3.9 revisara enlaces sociales dentro del QA final y cualquier impacto en metadata/SEO.

### 5. Costos de sesiones

| Campo | Registro |
| --- | --- |
| Nombre o categoria | Costos de sesiones |
| Estado de disponibilidad | Capturados dentro del repositorio e integrados en servicios y costos |
| Fuente | Cliente / valores capturados en `docs/phase-3-public-inputs.md`; `docs/project-scope.md`; `docs/quote-addendum-phase-3.md`; placeholders actuales en `content/pricing.ts` |
| Formato recibido | Costos publicos para sesion individual, sesion de pareja y sesion familiar capturados e integrados; duracion y condiciones pendientes |
| Clasificacion | `Publico y aprobado` para costos y modalidades; `Publico, pendiente de validacion` para duracion y condiciones |
| Estado de validacion | `Aprobado` para costos y modalidades; `En revision` para duracion y condiciones |
| Destino futuro | 3.8 consistencia de CTAs; 3.9 revision de contenido sensible/SEO |
| Observaciones o pendientes | Phase 3.7 completada y cerrada por aprobacion del cliente. Los costos y modalidades aprobados se publican como Terapia individual `$450 MXN`, Terapia de pareja `$700 MXN` y Terapia familiar `$900 MXN`. Las tres modalidades tienen jerarquia equivalente y no existe modalidad destacada. `content/pricing.ts` queda como fuente canonica y `content/packages.ts` deriva sus items desde ahi. Duracion y condiciones publicas continuan pendientes. No existen paquetes publicados, pagos online ni backend financiero. No se inventaron promociones, descuentos, condiciones ni resultados clinicos |

Notas:

- `content/pricing.ts` contiene los tres costos reales aprobados y funciona como fuente canonica.
- `content/packages.ts` deriva nombres, descripciones y precios desde `pricingPlans`.
- La seccion de costos publica precios por sesion, sin destacar una modalidad sobre otra.
- Phase 3.7 queda cerrada.
- Duracion y condiciones siguen pendientes y no se publican.
- Finanzas internas, pagos online, saldos, recibos o facturacion quedan fuera de Phase 3.

### 6. Servicios y modalidades relacionados

| Campo | Registro |
| --- | --- |
| Nombre o categoria | Servicios/modalidades relacionados con costos y oferta publica |
| Estado de disponibilidad | Modalidades publicas capturadas e integradas; condiciones finales pendientes de validacion |
| Fuente | Valores capturados en `docs/phase-3-public-inputs.md`; `docs/client-discovery.md`; `docs/project-scope.md`; `content/services.ts`; cliente para confirmacion final |
| Formato recibido | Terapia individual, Terapia de pareja y Terapia familiar integradas; condiciones y duracion pendientes |
| Clasificacion | `Publico y aprobado` para nombres y copy publico actual; `Publico, pendiente de validacion` para duracion y condiciones |
| Estado de validacion | `Aprobado` para nombres y copy publico actual; `En revision` para duracion y condiciones |
| Destino futuro | 3.9 revision final de contenido sensible/SEO |
| Observaciones o pendientes | Phase 3.7 completada y cerrada por aprobacion del cliente. Los nombres publicos definitivos son Terapia individual, Terapia de pareja y Terapia familiar. La seccion de servicios deriva sus tarjetas desde `pricingPlans` para mantener consistencia con costos, sin mostrar precios en servicios. Las tres modalidades tienen jerarquia equivalente y no existe modalidad destacada. No se agregaron especialidades, duraciones, afirmaciones clinicas nuevas ni resultados prometidos |

Notas:

- El copy publico integrado mantiene un tono general y prudente.
- Duracion y condiciones siguen pendientes.
- Cualquier afirmacion clinica futura debe revisarse con especial cuidado antes de publicarse.

### 6A. Flujo publico de solicitud de cita

| Campo | Registro |
| --- | --- |
| Nombre o categoria | Flujo publico de solicitud de cita |
| Estado de disponibilidad | Integrado en Phase 3.8 |
| Fuente | WhatsApp aprobado en `docs/phase-3-public-inputs.md`; `config/brand.ts`; `content/hero.ts`; `content/lead-form.ts` |
| Formato recibido | Canal principal provisional por WhatsApp sin mensaje prellenado |
| Clasificacion | `Publico y aprobado` |
| Estado de validacion | `Aprobado` |
| Destino futuro | Phase 3.10 QA publico y validacion final |
| Observaciones o pendientes | Phase 3.8 completada y Phase 3.8A documentada. WhatsApp es el canal principal provisional durante la etapa actual de la landing. Hero, header, menu mobile y seccion de agenda usan la misma URL aprobada. La seccion `#agenda` explica el proceso con tres pasos y CTA a WhatsApp, mas enlace secundario a `#costos`. El formulario visual deshabilitado fue retirado. La landing no recopila, almacena ni envia datos; no existe backend, agenda automatica ni confirmacion inmediata. No se agrego mensaje prellenado. La eliminacion del formulario actual no cancela el formulario futuro: ese flujo queda fuera de Phase 3 y debera conectarse al modulo privado de leads |

Notas:

- Evitar solicitar diagnostico, sintomas detallados, historia clinica, medicamentos, documentos, fotografias, identificaciones o informacion de emergencia desde la landing publica.
- El formulario futuro de captacion publica queda documentado en `docs/future/public-lead-intake-and-patient-conversion.md`.
- QA publico, favicon, Open Graph y metadata renderizada quedan para Phase 3.10.

### 6B. SEO, metadata, favicon y Open Graph

| Campo | Registro |
| --- | --- |
| Nombre o categoria | SEO, metadata, favicon y Open Graph |
| Estado de disponibilidad | Integrado tecnicamente en Phase 3.9 |
| Fuente | `config/site.ts`; `lib/seo/*`; `app/robots.ts`; `app/sitemap.ts`; `docs/phase-3-9-seo-audit.md`; assets en `app/` y `public/media/` |
| Formato recibido | Canonical, title, description, keywords, OG PNG, favicon PNG, robots, sitemap y JSON-LD local |
| Clasificacion | `Publico y aprobado` para datos usados; `Publico, pendiente de validacion` para validacion visual final de favicon/OG |
| Estado de validacion | `Aprobado` para integracion tecnica; `En revision` para QA visual final |
| Destino futuro | Phase 3.10 QA publico y validacion visual final antes de promocion |
| Observaciones o pendientes | Phase 3.9 implementada. Canonical fija `https://www.balancepsicologia.com/`. Production puede indexarse solo si el entorno efectivo es `production` y el hostname es `www.balancepsicologia.com`; development, preview, staging y `.vercel.app` resuelven `noindex,nofollow`. Robots y sitemap usan solo canonical de produccion. JSON-LD local usa `ProfessionalService` y no incluye email, horarios, coordenadas, ratings, reviews ni precios. Contenido legal final sigue pendiente y no se publica en Phase 3.9 |

Notas:

- QA final, favicon, Open Graph y metadata renderizada quedan para Phase 3.10.
- No se agregaron analytics, cookies, tracking, Search Console verification ni Google Tag Manager.
- No se crearon rutas legales.
- El futuro formulario publico no puede entrar en produccion sin aviso y consentimiento aprobados.

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
- Favicon integrado tecnicamente en Phase 3.9 desde `public/brand/balance-favicon-transparent-candidate.png`.
- Open Graph integrado tecnicamente en Phase 3.9 como `public/media/balance-psicologia-og.png`.
- Favicon y Open Graph quedan pendientes de validacion visual final en Phase 3.10.
- Favicon heredado `app/favicon.ico` y OG del template `public/media/og-default.svg` fueron retirados.

### Pendientes de validacion

- Logo principal y variantes.
- Validacion visual final del favicon integrado.
- Validacion visual final del Open Graph integrado.
- Fuente vectorial SVG/PDF/AI/EPS, si existe.
- Aprobacion humana de `balance-logo-stacked-white-transparent.png` si se usa sobre footer oscuro.
- Variantes transparentes oficiales del cliente para fondos de color u oscuros, si existen.
- Mensaje prellenado de WhatsApp.
- Duracion y condiciones de sesiones.

### Pendientes de captura

- Correo publico aprobado.
- Horarios aprobados.
- Mensaje prellenado de WhatsApp aprobado.
- Duracion de sesiones.
- Condiciones comerciales publicas.
- Texto breve para llegar.

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
