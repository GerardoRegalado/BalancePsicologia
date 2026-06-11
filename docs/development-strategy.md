# Development Strategy - Balance Psicologia

Estrategia tecnica para implementar el proyecto por versiones pequenas y revisables, sin avanzar a codigo fuera de la subfase solicitada.

## Contexto base

- Fuente principal: `docs/client-discovery.md`
- Scope aprobado: `docs/project-scope.md`
- Cotizacion aprobada: `docs/quote.md`
- Jerarquia de diseno: `docs/design/README.md`
- Sistema visual aprobado: `docs/design/DESIGN.md`
- Vista aprobada Fase 0: `docs/design/fase_0_proximamente/`
- Vista aprobada Fase 1 desktop: `docs/design/fase_1_landing_page_desktop/`
- Vista aprobada Fase 1 mobile: `docs/design/fase_1_landing_page_mobile/`

## Resumen del proyecto

- Nombre del proyecto: Balance Psicologia
- Tipo de proyecto: pagina temporal y landing publica para consultorio psicologico
- Dominio publico: `www.balancepsicologia.com`
- Vision futura no implementada: `app.balancepsicologia.com`
- Objetivo principal: generar presencia profesional, confianza y solicitudes de cita/contacto
- Resultado esperado: primero una pagina temporal visible; despues una landing completa con servicios, costos, solicitud basica, testimonios condicionados, FAQ, contacto, mapa y footer

## Versionamiento del proyecto

- Version 0.x: preparacion, rebranding base, tokens visuales y pagina temporal.
- Version 1.x: landing publica completa.
- Version 2.x: preparacion conceptual futura, sin app privada real.

Cada subfase debe implementarse en una corrida independiente de Codex. No se debe avanzar a la siguiente subfase aunque tecnicamente sea posible.

## Stack recomendado

- Next.js 16 App Router
- React 19
- TypeScript estricto
- Tailwind CSS 4
- ESLint + Prettier
- Vitest
- Server Components por defecto
- Client Components solo para interacciones reales como menu mobile, estados de formulario visual o comportamiento de navegador

No agregar dependencias nuevas salvo que una subfase lo justifique explicitamente y se apruebe antes de implementarla.

## Arquitectura recomendada

- `app/`: rutas, layouts y metadata. No concentrar copy editable ni logica de proveedor.
- `config/`: branding, navegacion, metadata y settings globales.
- `content/`: textos editables, estructura de secciones, placeholders comerciales y datos de landing.
- `components/sections/`: secciones content-driven, reutilizables y sin logica provider-specific.
- `components/layout/`: header, footer y superficies compartidas.
- `components/ui/`: primitivas visuales pequenas.
- `services/`: solo contratos/adapters de integraciones externas cuando entren al alcance. En Fase 0 no aplica; en Fase 1 solo se documentan placeholders si no hay proveedor real.
- `lib/`: utilidades transversales como SEO y helpers puros.
- `tests/`: pruebas unitarias o de readiness para asegurar que contenido/config no regresen al template base.

## Jerarquia de implementacion visual

1. `screen.png` manda visualmente.
2. `DESIGN.md` manda en tokens, paleta, tipografia, estilo y lineamientos.
3. `code.html` es solo referencia estructural y semantica; nunca se copia directo a produccion.
4. `docs/project-scope.md` define el limite funcional.
5. `docs/development-strategy.md` define orden y restricciones de implementacion.

Nota de diseno: la vista mobile aprobada no cubre toda la landing. Las secciones no visibles en mobile deben implementarse por scope, `DESIGN.md` y consistencia con desktop, sin inventar features.

## Features permitidas

- Pagina temporal "proximamente" sin captura de datos.
- Landing publica con hero, nosotros, servicios, costos/paquetes, solicitud basica de cita/contacto, testimonios condicionados, FAQ, contacto, mapa y footer.
- WhatsApp como CTA/link publico.
- Formulario visual o solicitud basica segun alcance; no debe guardar datos si no hay integracion definida.
- SEO base y metadata.
- Google Analytics basico solo si hay acceso y se implementa en una subfase aprobada.

## Fuera de alcance

- App privada funcional en `app.balancepsicologia.com`.
- Login, usuarios, roles o permisos.
- Base de datos.
- Gestion de pacientes.
- Historial clinico.
- Notas internas o clinicas.
- Finanzas del consultorio.
- Dashboard.
- CRM.
- Pagos en linea.
- Storage o documentos de pacientes.
- Sincronizacion avanzada de calendario.

El `/admin` existente pertenece al template/futuro. No debe enlazarse desde la landing publica ni desarrollarse como parte de esta entrega.

## Dependencias

- Acceso o instrucciones para dominio/hosting.
- Logo utilizable si se desea mostrar.
- Datos finales de contacto publico.
- WhatsApp final.
- Ubicacion exacta del consultorio.
- Costos, paquetes y servicios finales.
- Textos finales o aprobacion del copy propuesto.
- Testimonios reales y autorizados.
- Acceso a Google Analytics si se implementa.
- Proveedor SMTP/correo si se implementa envio real en una fase posterior.

## Riesgos

- Faltan datos finales de contacto, costos, servicios, testimonios y ubicacion.
- El diseno mobile no muestra todas las secciones de Fase 1.
- Los placeholders del template actual pueden filtrar copy o enlaces ajenos a Balance Psicologia si no se limpian primero.
- Implementar agenda, formulario con backend o almacenamiento sin alcance aprobado podria crear riesgos de privacidad.
- Cualquier manejo de pacientes o salud mental requiere una fase privada separada con seguridad, permisos y marco legal.

## Skills recomendadas por fase

- Version 0.x: `next-best-practices`, `ui-ux-pro-max`, `webapp-testing`.
- Version 1.x: `next-best-practices`, `ui-ux-pro-max`, `vercel-react-best-practices`, `webapp-testing`.
- Version 2.x: `next-best-practices`, `firebase` / `firebase-security-rules` solo si una futura fase privada lo aprueba, `webapp-testing`; por ahora no usar para implementar.

---

## Version 0.x - Preparacion y pagina temporal

### 0.1 Auditoria inicial del template y limpieza minima

#### Objetivo

Identificar contenido base visible que no pertenece a Balance Psicologia y preparar una limpieza minima sin construir nuevas secciones.

#### Entregables

- Lista o cambios minimos de referencias visibles del template que deben reemplazarse o desactivarse.
- Identificacion de CTAs o navegacion publica que apunten a `/admin`.
- Confirmacion de que la arquitectura base se conserva.

#### Archivos o carpetas involucradas

- `app/(marketing)/`
- `components/layout/`
- `components/sections/`
- `config/`
- `content/`
- `tests/unit/`

#### Criterios de aceptacion

- No quedan CTAs publicos visibles hacia `/admin`.
- No se borra `app/admin`.
- No se crean rutas, modelos ni servicios nuevos.
- La limpieza mantiene limites entre `config`, `content`, `components` y `app`.

#### Validacion manual

- Revisar home actual y navegacion publica.
- Confirmar que no aparezca copy de "Base Landing Template" en la superficie publica.
- Confirmar que `/admin` no se promueve como CTA publico.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run test`

#### Restricciones

- No borrar `app/admin`.
- No crear app privada.
- No construir secciones nuevas.
- No modificar integraciones ni servicios.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 0.1: audita y limpia referencias visibles del template sin construir nuevas secciones.`

### 0.2 Rebranding base del proyecto

#### Objetivo

Configurar la marca publica de Balance Psicologia en branding, metadata y navegacion base.

#### Entregables

- `brandConfig` alineado a Balance Psicologia.
- `siteConfig` con dominio, descripcion, locale, keywords y navegacion publica.
- Metadata base usando `buildMetadata`.
- Pruebas ajustadas si validan contenido del template anterior.

#### Archivos o carpetas involucradas

- `config/brand.ts`
- `config/site.ts`
- `lib/seo/`
- `tests/unit/`

#### Criterios de aceptacion

- Nombre, descripcion, ubicacion y dominio apuntan a Balance Psicologia.
- La navegacion publica no apunta a `/admin`.
- El sitio mantiene `es-MX`.
- El copy editable vive en `config` o `content`, no hardcodeado en UI salvo labels estructurales.

#### Validacion manual

- Revisar titulo de pagina, nombre visible, descripcion y navegacion.
- Confirmar que la marca se percibe como consultorio psicologico, no como template.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run test`

#### Restricciones

- No agregar CRM.
- No agregar auth.
- No agregar base de datos.
- No agregar pagos.
- No implementar landing completa todavia.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 0.2: rebranding base en config y metadata para Balance Psicologia.`

### 0.3 Tokens visuales y configuracion de diseno

#### Objetivo

Trasladar los tokens de `docs/design/DESIGN.md` al sistema visual del repo.

#### Entregables

- Variables CSS/Tailwind para paleta Serene Balance.
- Tipografias Source Serif 4 y Work Sans mediante `next/font/google` o fallback documentado.
- Radios, superficies, sombras suaves y espaciado base alineados al sistema visual.
- Componentes UI base preparados para botones, contenedores y secciones.

#### Archivos o carpetas involucradas

- `app/globals.css`
- `app/layout.tsx`
- `components/ui/`
- `components/layout/`

#### Criterios de aceptacion

- La base visual usa Warm Minimalism.
- La paleta refleja verdes salvia, arena suave, blanco calido y carbon.
- La tipografia diferencia titulares serif y cuerpo sans.
- El contraste es legible y no depende solo de color.

#### Validacion manual

- Revisar contraste, estilo calido y coherencia visual.
- Confirmar que no se vea frio, medico generico ni template.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run build`

#### Restricciones

- No copiar `code.html` a produccion.
- No agregar librerias sin justificar.
- No construir secciones nuevas.
- No cambiar alcance funcional.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 0.3: aplica tokens visuales de DESIGN.md sin construir secciones nuevas.`

### 0.4 Pagina temporal "proximamente"

#### Objetivo

Implementar la vista de Fase 0 fiel a `docs/design/fase_0_proximamente/screen.png`.

#### Entregables

- Pagina temporal publica para `www.balancepsicologia.com`.
- Mensaje de construccion profesional.
- Layout simple, calido y confiable.
- Footer minimo si aparece en el diseno aprobado.

#### Archivos o carpetas involucradas

- `app/(marketing)/page.tsx`
- `components/sections/`
- `components/layout/`
- `content/`

#### Criterios de aceptacion

- Comunica que Balance Psicologia esta en construccion.
- Se parece visualmente al `screen.png` aprobado.
- No tiene formulario.
- No tiene agenda funcional.
- No captura datos.
- No usa base de datos.
- No implementa app privada.

#### Validacion manual

- Comparar contra `docs/design/fase_0_proximamente/screen.png`.
- Revisar desktop y mobile.
- Confirmar que el texto sea profesional y claro.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run build`

#### Restricciones

- No WhatsApp funcional.
- No correo.
- No Analytics obligatorio.
- No storage.
- No avanzar a Fase 1.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 0.4: pagina temporal proximamente segun screen.png de Fase 0.`

### 0.5 Validacion visual, responsive y build de Fase 0

#### Objetivo

Cerrar Fase 0 con QA minimo antes de avanzar a la landing completa.

#### Entregables

- Checklist de Fase 0 validado.
- Ajustes menores de responsive, overflow, contraste o build.
- Confirmacion de que no hay datos sensibles ni captura de datos.

#### Archivos o carpetas involucradas

- `app/(marketing)/page.tsx`
- `components/sections/`
- `components/layout/`
- `tests/unit/` si aplica

#### Criterios de aceptacion

- Desktop y mobile no tienen overflow horizontal.
- Build correcto.
- La pagina temporal no incluye features fuera de scope.
- La experiencia sigue siendo simple y temporal.

#### Validacion manual

- Revisar pagina temporal en desktop.
- Revisar pagina temporal en mobile.
- Confirmar que no se confunda con la landing final.

#### Validacion tecnica

- `npm run validate`

#### Restricciones

- No avanzar a landing Fase 1.
- No agregar formulario.
- No agregar agenda.
- No conectar servicios externos.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 0.5: valida y ajusta Fase 0 sin agregar features.`

---

## Version 1.x - Landing publica

### 1.1 Estructura base de landing y layout general

#### Objetivo

Preparar la composicion general de la landing completa con el orden de secciones aprobado.

#### Entregables

- Shell publico de landing.
- Anchors para navegacion.
- Orden base: Hero, Nosotros, Servicios, Costos/Paquetes, Agenda basica, Testimonios, FAQ, Contacto, Mapa y Footer.
- Placeholders editoriales controlados cuando falte contenido real.

#### Archivos o carpetas involucradas

- `app/(marketing)/`
- `components/layout/`
- `components/sections/`
- `content/`

#### Criterios de aceptacion

- La estructura coincide con `docs/project-scope.md`.
- El layout respeta las vistas aprobadas de desktop/mobile.
- No se implementan funcionalidades fuera de alcance.
- El codigo conserva Server Components por defecto.

#### Validacion manual

- Revisar orden general.
- Revisar navegacion y anchors.
- Confirmar que no aparezcan secciones de app privada.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`

#### Restricciones

- No implementar todas las secciones en esta subfase.
- No crear backend.
- No crear DB.
- No crear login.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 1.1: estructura base y layout general de la landing.`

### 1.2 Hero, navegacion publica y CTA principal

#### Objetivo

Implementar hero, header y CTAs principales segun los screenshots aprobados.

#### Entregables

- Header publico sin enlace a `/admin`.
- Hero desktop/mobile fiel al diseno aprobado.
- CTAs visibles para WhatsApp y agenda/solicitud.
- Menu mobile solo si es necesario; si requiere estado, aislarlo en componente cliente pequeno.

#### Archivos o carpetas involucradas

- `components/layout/`
- `components/sections/`
- `content/hero.ts`
- `config/site.ts`

#### Criterios de aceptacion

- El hero se alinea con `fase_1_landing_page_desktop/screen.png`.
- El hero mobile se alinea con `fase_1_landing_page_mobile/screen.png`.
- No existe CTA publico hacia `/admin`.
- Los CTAs no prometen agenda automatica.

#### Validacion manual

- Comparar hero desktop con screenshot.
- Comparar hero mobile con screenshot.
- Revisar textos, CTAs y navegacion.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run build`

#### Restricciones

- No crear flujo real de agenda avanzada.
- No conectar WhatsApp si falta numero final; usar placeholder editable en `config` o `content`.
- No implementar formulario en esta subfase.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 1.2: hero, navegacion publica y CTAs de landing.`

### 1.3 Secciones informativas: Nosotros y Servicios

#### Objetivo

Implementar secciones editoriales e informativas desde contenido editable.

#### Entregables

- Seccion Nosotros.
- Seccion Servicios.
- Cards o bloques visuales alineados a Warm Minimalism.
- Copy editable en `content`.

#### Archivos o carpetas involucradas

- `content/services.ts`
- `content/features.ts` o nuevo contenido especifico si conviene
- `components/sections/`
- `types/content.ts` si se requieren tipos mas precisos

#### Criterios de aceptacion

- Secciones content-driven.
- Visual calido, accesible y consistente con `DESIGN.md`.
- No se inventan credenciales clinicas.
- No se declara informacion no confirmada como hecho.

#### Validacion manual

- Revisar copy.
- Revisar jerarquia visual.
- Revisar imagenes/placeholders.
- Confirmar que el tono sea humano y profesional.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run test`

#### Restricciones

- No inventar credenciales clinicas.
- No inventar testimonios.
- No agregar blog.
- No agregar portafolio.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 1.3: secciones Nosotros y Servicios desde contenido editable.`

### 1.4 Secciones comerciales: Costos / Paquetes y Agenda basica

#### Objetivo

Presentar costos/paquetes y una solicitud basica de cita/contacto sin backend real.

#### Entregables

- Seccion Costos / Pricing / Paquetes.
- Seccion Agenda basica o formulario visual de solicitud.
- Campos visibles y labels accesibles.
- Nota o comportamiento claro si el formulario aun no envia datos por falta de proveedor.

#### Archivos o carpetas involucradas

- `content/pricing.ts`
- `content/packages.ts`
- `content/lead-form.ts`
- `components/sections/`
- `types/content.ts` si aplica

#### Criterios de aceptacion

- El formulario no guarda datos si no hay servicio definido.
- La agenda no funciona como calendario automatico.
- No hay promesa de confirmacion automatica.
- Costos/paquetes son editables desde `content`.

#### Validacion manual

- Revisar campos.
- Revisar mensajes.
- Revisar claridad comercial.
- Confirmar que no se solicite informacion sensible innecesaria.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run test`

#### Restricciones

- No DB.
- No SMTP real salvo que exista proveedor aprobado en una subfase posterior.
- No calendario avanzado.
- No CRM.
- No datos de pacientes.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 1.4: costos/paquetes y solicitud basica sin backend real.`

### 1.5 Testimonios, FAQ, Contacto, Mapa y Footer

#### Objetivo

Completar las secciones restantes aprobadas para la landing publica.

#### Entregables

- Testimonios condicionados.
- FAQ.
- Contacto.
- Mapa como placeholder visual o enlace de ubicacion aprobado.
- Footer final sin enlaces a app privada.

#### Archivos o carpetas involucradas

- `content/testimonials.ts`
- `content/faq.ts`
- `config/brand.ts`
- `components/layout/site-footer.tsx`
- `components/sections/`

#### Criterios de aceptacion

- No hay testimonios inventados.
- Si faltan testimonios reales, se usan placeholders editoriales o se deja la seccion lista/oculta segun alcance.
- Datos de contacto y ubicacion son editables.
- Footer no expone `/admin` ni app privada.

#### Validacion manual

- Confirmar datos de contacto.
- Confirmar ubicacion y links.
- Revisar FAQ.
- Revisar condicion de testimonios.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run test`

#### Restricciones

- No CRM.
- No pagos.
- No almacenamiento.
- No documentos de pacientes.
- No dashboard.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 1.5: testimonios condicionados, FAQ, contacto, mapa y footer.`

### 1.6 Responsive desktop/mobile con base en los artefactos de diseno

#### Objetivo

Ajustar fidelidad responsive de la landing contra los artefactos aprobados.

#### Entregables

- Landing usable en mobile y desktop.
- Ajustes de espaciado, tipografia, CTAs, cards y secciones.
- Resolucion de overflow, solapes y saltos visuales.

#### Archivos o carpetas involucradas

- `components/sections/`
- `components/layout/`
- `components/ui/`
- `app/globals.css`

#### Criterios de aceptacion

- Sin overflow horizontal.
- CTAs son usables en mobile.
- Tipografia legible.
- Secciones sin screenshot mobile completo mantienen coherencia con desktop, scope y `DESIGN.md`.

#### Validacion manual

- Comparar con `fase_1_landing_page_desktop/screen.png`.
- Comparar con `fase_1_landing_page_mobile/screen.png`.
- Revisar breakpoints principales.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run build`

#### Restricciones

- No cambiar alcance funcional por huecos del diseno mobile.
- No agregar nuevas secciones.
- No introducir librerias visuales nuevas.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 1.6: ajustes responsive de landing contra artefactos aprobados.`

### 1.7 SEO, metadata, accesibilidad basica y validacion final

#### Objetivo

Cerrar Fase 1 con metadata, accesibilidad basica y QA final.

#### Entregables

- Metadata final de landing.
- Jerarquia correcta de headings.
- Labels visibles en formulario.
- Alt text o tratamiento accesible de imagenes/decoraciones.
- Validacion final contra scope.

#### Archivos o carpetas involucradas

- `lib/seo/`
- `config/site.ts`
- `app/(marketing)/page.tsx`
- `components/sections/`
- `tests/unit/`

#### Criterios de aceptacion

- `npm run validate` pasa.
- La landing respeta `docs/project-scope.md`.
- No hay features de app privada.
- No se almacenan datos sensibles.
- Metadata y contenido publico estan alineados a Balance Psicologia.

#### Validacion manual

- Revisar navegacion.
- Revisar CTAs.
- Revisar formulario visual.
- Revisar mapa.
- Revisar contenido final y responsive.

#### Validacion tecnica

- `npm run validate`

#### Restricciones

- No optimizaciones enterprise.
- No integraciones no aprobadas.
- No agregar analytics si faltan accesos.
- No conectar backend fuera de alcance.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 1.7: SEO, accesibilidad basica y validacion final de Fase 1.`

---

## Version 2.x - Preparacion futura, sin implementar app privada

### 2.1 Separacion conceptual entre superficie publica y futura app privada

#### Objetivo

Documentar la frontera entre `www.balancepsicologia.com` y la futura superficie `app.balancepsicologia.com`.

#### Entregables

- Nota documental de separacion publica/privada.
- Confirmacion de que la landing no depende de una app privada.
- Reglas para no mezclar contenido publico con workflows internos.

#### Archivos o carpetas involucradas

- `docs/development-strategy.md`
- Docs futuros, si se crean despues con aprobacion.

#### Criterios de aceptacion

- Queda claro que `www` y `app` son superficies distintas.
- No se promete app privada funcional.
- No se crean rutas privadas nuevas.

#### Validacion manual

- Revisar que no se prometa app privada.
- Revisar consistencia con scope y quote.

#### Validacion tecnica

- No requerida si solo se modifica documentacion.
- Si se toca codigo por excepcion aprobada: `npm run typecheck`.

#### Restricciones

- No rutas reales para `app.balancepsicologia.com`.
- No login.
- No base de datos.
- No panel.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 2.1: documenta separacion conceptual sin crear app privada.`

### 2.2 Documentacion de limites para `app.balancepsicologia.com`

#### Objetivo

Registrar limites tecnicos, legales y operativos para una futura app privada.

#### Entregables

- Limites de autenticacion, permisos, datos sensibles y privacidad.
- Nota de que la fase privada requiere nuevo alcance y cotizacion.
- Lista de decisiones pendientes antes de almacenar informacion real.

#### Archivos o carpetas involucradas

- Docs unicamente.

#### Criterios de aceptacion

- La app privada queda no incluida/no cotizada.
- Se entiende que la informacion clinica requiere seguridad y permisos.
- No hay implementacion funcional.

#### Validacion manual

- Revisar consistencia con `docs/project-scope.md`.
- Revisar consistencia con `docs/quote.md`.

#### Validacion tecnica

- No requerida salvo revision documental.

#### Restricciones

- No login.
- No DB.
- No pacientes.
- No dashboard.
- No notas clinicas.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 2.2: documenta limites de app privada futura.`

### 2.3 Preparacion de estructura sin login, sin base de datos y sin datos sensibles

#### Objetivo

Dejar lineamientos conceptuales para una futura estructura privada sin implementarla.

#### Entregables

- Recomendaciones conceptuales para separar `services`, `app`, `content` y `config` en una fase futura.
- Advertencia de que no deben crearse modelos, schemas ni adapters reales todavia.
- Criterios para evaluar cuando una integracion externa entre al alcance.

#### Archivos o carpetas involucradas

- Docs unicamente.
- No tocar codigo salvo aprobacion posterior.

#### Criterios de aceptacion

- No se crean modelos.
- No se crean adapters reales.
- No se agregan rutas privadas.
- No hay alcance funcional nuevo.

#### Validacion manual

- Confirmar que no hay implementacion disfrazada de preparacion.
- Confirmar que la landing publica sigue independiente.

#### Validacion tecnica

- No requerida si solo se modifica documentacion.

#### Restricciones

- No schemas.
- No migrations.
- No uploads.
- No storage de pacientes.
- No auth.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 2.3: documenta preparacion estructural futura sin codigo privado.`

### 2.4 Registro de riesgos tecnicos para futura app privada

#### Objetivo

Listar riesgos que deben resolverse antes de gestionar datos clinicos o administrativos internos.

#### Entregables

- Riesgos de seguridad.
- Riesgos de privacidad.
- Riesgos de permisos y auditoria.
- Riesgos de consentimiento y manejo de informacion sensible.

#### Archivos o carpetas involucradas

- Docs unicamente.

#### Criterios de aceptacion

- Los riesgos son accionables antes de una futura fase privada.
- No se propone resolverlos dentro de la landing publica.
- No se implementa ninguna mitigacion tecnica sin alcance.

#### Validacion manual

- Revisar con cliente antes de cotizar Fase 2 real.
- Confirmar que no se minimicen riesgos de salud mental.

#### Validacion tecnica

- No requerida.

#### Restricciones

- No resolver riesgos con implementacion.
- No introducir proveedores.
- No crear tablas, roles ni usuarios.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 2.4: registra riesgos tecnicos de futura app privada.`

### 2.5 Checklist de criterios minimos antes de iniciar pacientes, citas internas o notas clinicas

#### Objetivo

Definir el checklist minimo para poder iniciar una fase privada futura de forma responsable.

#### Entregables

- Checklist previo de seguridad.
- Checklist previo de privacidad.
- Checklist previo de autenticacion, permisos, base de datos, roles y consentimiento.
- Nota de que se requiere nuevo scope antes de cualquier implementacion real.

#### Archivos o carpetas involucradas

- Docs unicamente.

#### Criterios de aceptacion

- Ningun trabajo privado inicia sin nuevo scope.
- El checklist cubre pacientes, citas internas, notas clinicas y finanzas.
- La fase sigue siendo documental.

#### Validacion manual

- Revisar contra necesidades legales y operativas.
- Confirmar con cliente antes de cualquier cotizacion futura.

#### Validacion tecnica

- No requerida.

#### Restricciones

- No crear pacientes.
- No crear citas internas.
- No crear notas clinicas.
- No crear finanzas.
- No crear dashboard.
- No crear login.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 2.5: checklist previo para futura app privada, sin implementacion.`

### 2.6 Checkpoint de arquitectura futura: Firebase, multiusuario-lite e IA supervisada

#### Objetivo

Documentar una direccion conceptual para una futura app privada en `app.balancepsicologia.com`, sin autorizar implementacion inmediata ni avance real de Fase 2.

#### Direccion conceptual

Firebase queda como opcion futura a evaluar para:

- Firebase Auth como autenticacion de usuarios internos.
- Firestore como base de datos operacional de la app privada.
- Firebase Storage solo si una fase posterior aprueba manejo de archivos o documentos.
- Cloud Functions como capa segura para operaciones privilegiadas, validaciones sensibles e integraciones con IA.
- Gemini, Firebase AI Logic o Vertex AI como asistente de apoyo supervisado, nunca como sustituto del criterio profesional.

La app privada debe pensarse como `single-client UI, multi-tenant-ready backend`: al inicio puede existir una sola usuaria o consultorio visible, pero el modelo interno debe poder separar profesionales, consultorios o workspaces sin reescribir seguridad y datos desde cero.

#### Modelo conceptual minimo

- `workspace` / `clinic`: unidad de separacion operativa y de seguridad.
- `users`: identidad autenticada.
- `memberships`: relacion entre usuario y workspace.
- `roles`: permisos activos dentro de un workspace.
- `patients`: pacientes asociados al workspace.
- `sessionNotes`: notas clinicas asociadas a paciente y workspace.
- `aiAssistances`: borradores o apoyos generados por IA, siempre revisables.
- `auditLogs`: accesos, cambios relevantes y eventos de seguridad.

Roles iniciales sugeridos:

- `owner`
- `psychologist`

Roles futuros opcionales:

- `assistant`
- `admin`
- `viewer`

#### Reglas conceptuales de acceso

Todo dato sensible debe estar aislado por `workspaceId`.

- Nadie lee datos si no pertenece al workspace correspondiente.
- Nadie escribe datos si no tiene un rol activo y autorizado dentro del workspace.
- Las notas clinicas solo son visibles para usuarios autorizados.
- El frontend nunca se considera una barrera de seguridad suficiente.
- Las reglas de Firestore, las Cloud Functions y la auditoria deben validar acceso por servidor o reglas, no por UI.

#### Checkpoint de IA supervisada

La IA debe plantearse como asistente clinico supervisado, no como autoridad clinica ni como reemplazo de la psicologa.

Usos aceptables:

- Resumen de sesion.
- Puntos importantes.
- Temas recurrentes.
- Cambios entre sesiones.
- Objetivos terapeuticos.
- Tareas o acuerdos.
- Preguntas sugeridas para proxima sesion.
- Borradores SOAP / DAP / progreso clinico.
- Banderas de riesgo para revision profesional.
- Hipotesis clinicas a explorar con validacion humana.

Restricciones criticas:

- La IA no sustituye el criterio profesional.
- La IA no debe producir ni decidir diagnosticos.
- Todo output debe quedar como borrador revisable.
- La psicologa debe aprobar, editar o descartar cualquier salida.
- No se debe mandar todo el expediente al modelo si no es necesario.
- Se debe minimizar la informacion enviada al modelo.
- No deben guardarse datos clinicos en logs.

#### Arquitectura recomendada para IA

Flujo recomendado:

`Frontend -> Firebase Auth -> Firestore -> Cloud Function segura -> Gemini / Firebase AI Logic / Vertex AI -> respuesta revisable -> Firestore como borrador/asistencia`

Flujo a evitar:

`Frontend -> Gemini`

La integracion con IA debe pasar por una capa segura que controle permisos, minimice datos, registre auditoria sin exponer contenido clinico sensible en logs y devuelva una respuesta editable antes de almacenarla como asistencia.

#### Seguridad y privacidad a contemplar

Cualquier fase futura que avance hacia app privada debe contemplar:

- Aviso de privacidad robusto.
- Consentimiento explicito.
- Control de acceso por rol.
- Reglas estrictas de Firestore.
- App Check.
- Auditoria de accesos.
- Registro de cambios.
- Politica de retencion y borrado.
- Separacion por profesional o consultorio.
- Cuidado especial con prompts, outputs y logs.

#### Criterios de aceptacion

- El checkpoint queda como documentacion estrategica, no como especificacion implementable inmediata.
- No se crean rutas privadas, modelos, servicios, dependencias ni integraciones.
- Firebase, Gemini, Firebase AI Logic y Vertex AI quedan como opciones futuras sujetas a nuevo scope.
- La arquitectura futura contempla `workspaceId`, roles, auditoria y minimizacion de datos desde el diseno.
- La IA queda limitada a asistencia supervisada y borradores revisables.

#### Validacion tecnica

- No requerida si solo se modifica documentacion.

#### Restricciones

- No crear app privada.
- No agregar Firebase.
- No agregar Gemini.
- No agregar dependencias.
- No crear rutas nuevas.
- No tocar landing publica.
- No modificar produccion.
- No avanzar a implementacion real de Fase 2.

#### Prompt sugerido de implementacion

`Documenta solo la subfase 2.6 como checkpoint conceptual de arquitectura futura; no implementes app privada, Firebase, Gemini ni rutas nuevas.`

## Validaciones globales

- Antes de cerrar una subfase con codigo: `npm run lint`, `npm run typecheck`, `npm run test` segun impacto.
- Antes de cerrar Fase 0 o Fase 1: `npm run build` y preferentemente `npm run validate`.
- Validacion manual obligatoria: comparar con `screen.png`, revisar responsive y confirmar que no aparezcan features de app privada.
- No copiar `code.html` directo a produccion.
- Tratar cualquier elemento del diseno fuera de scope como desalineacion, no como requisito automatico.

## Supuestos y defaults

- Server Components por defecto.
- Client Components solo para menu mobile o interacciones necesarias.
- Si faltan datos reales, usar placeholders editoriales explicitos en `content/*`.
- La app privada existente/futura no se desarrolla en esta entrega.
- `/admin` heredado no debe exponerse desde la landing publica.
- Las secciones sin screenshot completo se implementan por scope y `DESIGN.md`, manteniendo coherencia visual con desktop/mobile aprobados.
