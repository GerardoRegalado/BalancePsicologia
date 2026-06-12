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
- Tipo de proyecto: pagina temporal, landing publica y preparacion progresiva para futura app privada
- Dominio publico: `www.balancepsicologia.com`
- Vision futura no implementada: `app.balancepsicologia.com`
- Objetivo actual: cerrar el fine tuning publico de la landing antes de cualquier trabajo privado
- Resultado esperado proximo: integrar insumos reales validados en la landing publica, revisar staging y preparar promocion controlada
- Direccion futura aprobada: convertir este mismo repositorio en privado y migrarlo a monorepo despues de Phase 3.x, antes de iniciar app privada real

## Versionamiento del proyecto

- Version 0.x: preparacion y pagina temporal. Cerrada.
- Version 1.x: landing publica inicial. Cerrada.
- Version 2.x: preparacion conceptual privada. Cerrada.
- Version 3.x: fine tuning de landing publica. Siguiente fase real de implementacion.
- Version 4.x: repositorio privado y migracion a monorepo. Fase puente obligatoria despues de Version 3.x y antes de Version 5.x.
- Version 5.x: fundacion de app privada.
- Version 6.x: gestion clinica y administrativa.
- Version 7.x: asistente de IA supervisado.

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

## Direccion futura de monorepo

El repositorio actual se conserva. No se creara un repositorio nuevo desde cero.

Despues de terminar Version 3.x, el repositorio debera convertirse en privado y migrarse a un monorepo con esta estructura objetivo:

```text
BalancePsicologia/
├── apps/
│   ├── marketing/
│   │   └── www.balancepsicologia.com
│   └── clinic/
│       └── app.balancepsicologia.com
├── packages/
│   ├── ui/
│   ├── config/
│   └── types/
├── docs/
├── package.json
└── pnpm-workspace.yaml
```

Reglas conceptuales:

- `apps/marketing` contendra la landing publica.
- `apps/clinic` contendra la futura app privada.
- `packages/ui` contendra componentes realmente compartidos.
- `packages/config` contendra configuracion compartida no sensible.
- `packages/types` contendra tipos compartidos que no expongan informacion clinica.
- `docs` continuara como documentacion central del proyecto.
- Los paquetes compartidos solo deben crearse cuando exista reutilizacion real.
- No deben extraerse abstracciones innecesarias durante la migracion.
- La landing y la app privada tendran proyectos Vercel separados.
- Cada proyecto Vercel utilizara su propio Root Directory.
- La landing conservara `www.balancepsicologia.com`.
- La app privada utilizara `app.balancepsicologia.com`.
- Staging y previews deberan configurarse por aplicacion.
- Los secretos y variables privadas no deberan compartirse accidentalmente entre aplicaciones.
- El codigo clinico nunca debera importarse en la aplicacion publica.

Esta estructura es una direccion aprobada, pero no debe implementarse durante Version 3.x ni durante esta actualizacion documental.

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
- Logos disponibles para integracion, pendientes de validacion final y publicacion en Version 3.x.
- WhatsApp publico disponible para integracion, pendiente de validacion final y publicacion en Version 3.x.
- Ubicacion real de oficina disponible para integracion, pendiente de validacion final y publicacion en Version 3.x.
- Redes sociales disponibles para integracion, pendientes de validacion final y publicacion en Version 3.x.
- Costos de sesiones disponibles para integracion, pendientes de validacion final y publicacion en Version 3.x.
- Estructura usada por la psicologa para historial clinico disponible como insumo privado para Version 6.x; no debe integrarse en landing publica ni publicarse con datos reales.
- Textos finales o aprobacion del copy propuesto.
- Testimonios reales y autorizados.
- Acceso a Google Analytics si se implementa.
- Proveedor SMTP/correo si se implementa envio real en una fase posterior.

## Riesgos

- Los insumos reales disponibles para Version 3.x deben validarse antes de publicarse; no deben integrarse valores no aprobados.
- El diseno mobile no muestra todas las secciones de Fase 1.
- Los placeholders del template actual pueden filtrar copy o enlaces ajenos a Balance Psicologia si no se limpian primero.
- Implementar agenda, formulario con backend o almacenamiento sin alcance aprobado podria crear riesgos de privacidad.
- Cualquier manejo de pacientes o salud mental requiere una fase privada separada con seguridad, permisos y marco legal.
- El repositorio puede contener documentacion publica; no debe recibir datos de pacientes, historiales clinicos llenos, nombres, diagnosticos, notas reales, capturas con datos clinicos, identificadores de pacientes, credenciales ni secretos.
- Incluso despues de convertir el repositorio en privado, Git no debe utilizarse como almacenamiento de informacion clinica real.

## Skills recomendadas por fase

- Version 0.x: `next-best-practices`, `ui-ux-pro-max`, `webapp-testing`.
- Version 1.x: `next-best-practices`, `ui-ux-pro-max`, `vercel-react-best-practices`, `webapp-testing`.
- Version 2.x: `next-best-practices`, `firebase` / `firebase-security-rules` solo si una futura fase privada lo aprueba, `webapp-testing`; por ahora no usar para implementar.
- Version 3.x: `next-best-practices`, `ui-ux-pro-max`, `vercel-react-best-practices`, `webapp-testing`.
- Version 4.x: `next-best-practices`, `vercel-react-best-practices`, `webapp-testing`; no ejecutar migracion sin subfase aprobada.
- Version 5.x: `next-best-practices`, `firebase` / `firebase-security-rules` solo con scope aprobado, `webapp-testing`.
- Version 6.x: `next-best-practices`, `firebase-security-rules`, `supabase-postgres-best-practices` no aplica salvo cambio de proveedor, `webapp-testing`.
- Version 7.x: `next-best-practices`, `firebase-security-rules`, `webapp-testing`; cualquier IA debe pasar por capa segura y aprobacion humana.

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
- `docs/future/public-private-boundary.md`
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
- `docs/future/private-app-limits.md`

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
- `docs/future/private-app-structure-guidelines.md`
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
- `docs/future/private-app-risk-register.md`

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
- `docs/future/private-app-readiness-checklist.md`

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

#### Documento de checkpoint

- `docs/future/firebase-ai-architecture-checkpoint.md`

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

---

## Version 3.x - Fine tuning de landing publica

Version 3.x es la siguiente fase real de implementacion. Su objetivo es integrar insumos publicos reales validados, cerrar SEO/metadata, revisar staging y preparar una promocion controlada a produccion.

### 3.1 Inventario y clasificacion de insumos reales

#### Objetivo

Registrar ubicacion, WhatsApp, redes sociales, costos, logos y estructura clinica como insumos, clasificando cada dato antes de integrarlo.

#### Entregables

- Inventario documental de insumos disponibles.
- Clasificacion por dato: publico, privado, pendiente de validacion o no apto para repositorio.
- Registro de que la estructura clinica es insumo privado para Version 6.x.

#### Archivos o carpetas probables

- `docs/`
- `content/` solo si se aprueba preparar placeholders publicos sin valores sensibles.

#### Criterios de aceptacion

- Cada insumo queda clasificado.
- No se publican datos sin validacion final.
- No se registran datos clinicos reales ni identificables.

#### Validacion manual

- Revisar inventario con cliente.
- Confirmar que no haya informacion privada en documentacion publica.

#### Validacion tecnica

- No requerida si solo se modifica documentacion.

#### Restricciones

- No integrar codigo.
- No publicar direccion, numeros, enlaces o costos no aprobados.
- No copiar estructura clinica con datos reales.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 3.1: inventario documental y clasificacion de insumos reales, sin integrar codigo.`

### 3.2 Preparacion y validacion de logos/assets

#### Objetivo

Revisar formatos disponibles de logo/assets y preparar decisiones para logo principal, variantes, favicon, Open Graph, optimizacion, accesibilidad y responsive.

#### Entregables

- Lista de assets recibidos y estado de validacion.
- Recomendacion de logo principal, variantes, favicon y OG.
- Criterios de uso accesible y responsive.

#### Archivos o carpetas probables

- `public/`
- `config/media.ts`
- `content/`
- `docs/`

#### Criterios de aceptacion

- Los assets aprobados quedan identificados.
- No se redisenia el logo sin aprobacion expresa.
- Se documenta que assets no aprobados no se publican.

#### Validacion manual

- Revisar nitidez, contraste, legibilidad y comportamiento responsive.
- Confirmar uso de marca con cliente.

#### Validacion tecnica

- Si se integran assets: `npm run typecheck`.
- Si se toca UI: `npm run lint` y revision visual.

#### Restricciones

- No redisenar logo.
- No tocar app privada.
- No agregar dependencias de optimizacion nuevas.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 3.2: prepara y valida logos/assets aprobados sin redisenar marca.`

### 3.3 Integracion de identidad visual real

#### Objetivo

Sustituir marcas/placeholders por identidad real aprobada: logos, favicon, metadata visual, header, footer y consistencia desktop/mobile.

#### Entregables

- Logo aprobado integrado.
- Favicon y metadata visual actualizados.
- Header/footer alineados a marca real.
- Consistencia responsive revisada.

#### Archivos o carpetas probables

- `config/brand.ts`
- `config/site.ts`
- `app/layout.tsx`
- `components/layout/`
- `public/`

#### Criterios de aceptacion

- No quedan placeholders de marca.
- La identidad se percibe como Balance Psicologia.
- Desktop y mobile conservan coherencia con `DESIGN.md`.

#### Validacion manual

- Revisar header, footer, favicon y metadata visual.
- Comparar contra assets aprobados.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`

#### Restricciones

- No cambiar arquitectura.
- No agregar app privada.
- No inventar nuevos assets.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 3.3: integra identidad visual real aprobada en landing publica.`

### 3.4 Integracion de WhatsApp y contacto real

#### Objetivo

Integrar numero aprobado de WhatsApp y contacto publico en CTAs, header, footer y secciones, con enlaces seguros.

#### Entregables

- WhatsApp aprobado en CTAs publicos.
- Contacto actualizado en secciones.
- Mensaje prellenado solo si se aprueba.
- Enlaces externos con seguridad adecuada.

#### Archivos o carpetas probables

- `config/brand.ts`
- `content/contact.ts`
- `content/lead-form.ts`
- `components/sections/`
- `components/layout/`

#### Criterios de aceptacion

- CTA publico principal apunta a WhatsApp.
- No se crea backend.
- No se almacenan solicitudes.

#### Validacion manual

- Probar enlaces en desktop/mobile.
- Confirmar texto y numero con cliente.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`

#### Restricciones

- No backend.
- No agenda automatica.
- No base de datos.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 3.4: integra WhatsApp y contacto real aprobados sin backend.`

### 3.5 Integracion de redes sociales

#### Objetivo

Integrar solo redes sociales aprobadas en header, footer y contacto, eliminando placeholders o enlaces vacios.

#### Entregables

- Redes aprobadas integradas.
- Labels accesibles.
- Apertura segura de enlaces externos.
- Placeholders vacios eliminados u ocultos.

#### Archivos o carpetas probables

- `config/site.ts`
- `content/contact.ts`
- `components/layout/`
- `components/sections/`

#### Criterios de aceptacion

- No hay enlaces sociales vacios.
- Solo aparecen redes validadas.
- Los enlaces son accesibles y seguros.

#### Validacion manual

- Probar enlaces.
- Confirmar redes con cliente.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`

#### Restricciones

- No inventar redes.
- No agregar tracking nuevo.
- No modificar app privada.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 3.5: integra redes sociales aprobadas y elimina placeholders.`

### 3.6 Integracion de ubicacion real

#### Objetivo

Integrar direccion publica aprobada, mapa o enlace oficial, texto para llegar, privacidad, accesibilidad y responsive.

#### Entregables

- Ubicacion publica aprobada integrada.
- Mapa o enlace oficial revisado.
- Texto publico minimo para llegar.
- Tratamiento responsive y accesible.

#### Archivos o carpetas probables

- `content/contact.ts`
- `content/landing.ts`
- `components/sections/location-section.tsx`
- `config/site.ts`

#### Criterios de aceptacion

- La ubicacion es correcta y aprobada.
- No se publica informacion adicional innecesaria.
- El mapa/enlace funciona en mobile y desktop.

#### Validacion manual

- Probar enlace de mapa.
- Revisar privacidad y copy.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`

#### Restricciones

- No publicar datos no aprobados.
- No agregar librerias de mapa.
- No crear backend.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 3.6: integra ubicacion real aprobada sin informacion privada adicional.`

### 3.7 Integracion de costos y servicios reales

#### Objetivo

Integrar costos, modalidades y condiciones comerciales publicas aprobadas, eliminando placeholders y revisando consistencia del copy.

#### Entregables

- Costos aprobados integrados.
- Servicios/modalidades publicas revisadas.
- Placeholders de costos eliminados.
- Copy comercial consistente.

#### Archivos o carpetas probables

- `content/pricing.ts`
- `content/packages.ts`
- `content/services.ts`
- `components/sections/packages-section.tsx`
- `components/sections/services-section.tsx`

#### Criterios de aceptacion

- No hay costos placeholder.
- Solo aparecen condiciones aprobadas.
- El copy no promete resultados clinicos.

#### Validacion manual

- Revisar costos con cliente.
- Revisar consistencia de servicios y CTA.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run test`

#### Restricciones

- No inventar promociones, duracion, paquetes, descuentos, condiciones, especialidades ni afirmaciones clinicas.
- No pagos online.
- No finanzas internas.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 3.7: integra costos y servicios reales aprobados sin inventar condiciones.`

### 3.8 Flujo publico final de solicitud de cita

#### Objetivo

Consolidar WhatsApp como canal publico principal, revisar CTAs, estados, navegacion y evitar formularios que almacenen datos sin scope.

#### Entregables

- CTA publico principal hacia WhatsApp.
- Navegacion y estados revisados.
- Formulario visual ajustado o desactivado si implica almacenamiento no aprobado.
- Microcopy claro de solicitud inicial.

#### Archivos o carpetas probables

- `content/lead-form.ts`
- `components/sections/appointment-section.tsx`
- `components/ui/cta-styles.ts`
- `components/layout/`

#### Criterios de aceptacion

- El flujo publico no guarda datos.
- No hay agenda automatica.
- Los CTAs son claros en desktop/mobile.

#### Validacion manual

- Probar CTAs y navegacion.
- Revisar que no se pida informacion sensible innecesaria.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run test`

#### Restricciones

- Por defecto: CTA publico -> WhatsApp.
- No backend.
- No base de datos.
- No agenda automatica.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 3.8: consolida solicitud publica por WhatsApp sin backend ni almacenamiento.`

### 3.9 SEO, metadata, contenido legal y staging noindex

#### Objetivo

Cerrar metadata final, canonical, Open Graph, favicon/logo, enlaces sociales, SEO local, ubicacion, aviso de privacidad publico si existe, staging noindex/nofollow, contenido sensible y enlaces rotos.

#### Entregables

- Metadata final revisada.
- Canonical y Open Graph actualizados.
- SEO local alineado a ubicacion aprobada.
- Staging marcado `noindex,nofollow`.
- Revision de enlaces rotos y contenido sensible.

#### Archivos o carpetas probables

- `lib/seo/`
- `config/site.ts`
- `app/layout.tsx`
- `next.config.ts`
- `content/`

#### Criterios de aceptacion

- Produccion puede indexarse correctamente.
- Staging no debe indexarse.
- No hay datos sensibles en metadata o contenido publico.

#### Validacion manual

- Revisar metadata, OG, favicon, canonical y enlaces.
- Confirmar staging noindex antes de promocion.

#### Validacion tecnica

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build` si se toca configuracion Next/metadata global.

#### Restricciones

- No agregar analytics nuevos sin aprobacion.
- No publicar informacion legal no validada como definitiva.
- No tocar Vercel desde esta subfase salvo documentacion/instrucciones aprobadas.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 3.9: SEO, metadata, contenido legal publico y staging noindex sin tocar app privada.`

### 3.10 QA final, aprobacion y promocion controlada

#### Objetivo

Validar desktop, mobile, accesibilidad, enlaces, WhatsApp, redes, costos, ubicacion, logos, metadata, SEO, staging y aprobacion del cliente antes de promocion controlada.

#### Entregables

- Checklist QA final.
- Validacion en staging.
- Registro de aprobacion del cliente.
- Plan de promocion controlada a produccion.

#### Archivos o carpetas probables

- `docs/`
- `tests/`
- No deberia requerir cambios de codigo salvo correcciones puntuales aprobadas.

#### Criterios de aceptacion

- Landing aprobada en staging.
- No hay bloqueadores de enlaces, responsive, metadata o contenido.
- Promocion no se ejecuta automaticamente.

#### Validacion manual

- Revisar desktop/mobile.
- Probar WhatsApp, redes, mapa, costos y CTAs.
- Confirmar aprobacion explicita.

#### Validacion tecnica

- `npm run validate`

#### Restricciones

- No promover automaticamente.
- No deploy desde Codex sin instruccion explicita.
- No tocar app privada ni monorepo.

#### Prompt sugerido de implementacion

`Implementa solo la subfase 3.10: QA final, aprobacion y plan de promocion controlada sin deploy automatico.`

---

## Version 4.x - Repositorio privado y migracion a monorepo

Version 4.x es fase puente obligatoria despues de Version 3.x y antes de Version 5.x. No incluye funcionalidades clinicas.

### 4.1 Auditoria previa de seguridad e historial

- Objetivo: revisar secretos, archivos sensibles, ejemplos clinicos, assets, `.gitignore`, ausencia de datos reales de pacientes y riesgos del historial Git.
- Entregables: reporte de auditoria, lista de riesgos, decision sobre si requiere limpieza manual o asesorada.
- Archivos probables: repo completo en modo lectura, `.gitignore`, `docs/`.
- Criterios de aceptacion: no se detectan datos clinicos reales o quedan riesgos documentados.
- Validaciones: `git status --short`, busquedas por patrones sensibles, revision manual.
- Riesgos: secretos o datos historicos en Git.
- Rollback: no aplica si solo se audita; no reescribir historial automaticamente.
- Prompt sugerido: `Implementa solo 4.1: auditoria documental de seguridad e historial sin reescribir Git.`

### 4.2 Cambio de visibilidad del repositorio

- Objetivo: documentar y ejecutar manualmente desde GitHub el cambio a privado.
- Entregables: checklist de colaboradores, GitHub Apps, Vercel, deploy keys, Actions, webhooks, forks y accesos.
- Archivos probables: `docs/`.
- Criterios de aceptacion: visibilidad privada confirmada por responsable humano.
- Validaciones: revision manual de GitHub, Vercel y accesos.
- Riesgos: perder integraciones o dejar accesos obsoletos.
- Rollback: documentar pasos para restaurar accesos; no asumir cambio automatico por Codex.
- Prompt sugerido: `Planifica 4.2: checklist manual para convertir repo a privado sin tocar codigo.`

### 4.3 Preparacion del workspace

- Objetivo: planear `pnpm-workspace.yaml`, root `package.json`, scripts raiz, nombres, lockfile, TypeScript, ESLint y configuracion compartida minima.
- Entregables: plan tecnico de workspace y criterios de migracion.
- Archivos probables: `package.json`, `pnpm-workspace.yaml`, configs raiz en fase aprobada.
- Criterios de aceptacion: workspace definido sin paquetes innecesarios.
- Validaciones: lint/typecheck/build despues de implementacion real.
- Riesgos: romper scripts existentes o mezclar configuraciones.
- Rollback: conservar commit previo y revertir migracion si falla validacion.
- Prompt sugerido: `Implementa solo 4.3: prepara workspace monorepo minimo sin crear paquetes innecesarios.`

### 4.4 Migracion de landing a `apps/marketing`

- Objetivo: mover la aplicacion actual sin cambiar comportamiento.
- Entregables: app publica bajo `apps/marketing`, imports/aliases/assets/tests/scripts/config ajustados.
- Archivos probables: `app/`, `components/`, `content/`, `config/`, `public/`, `next.config.ts`, `tsconfig.json`, `package.json`.
- Criterios de aceptacion: landing se comporta igual antes/despues.
- Validaciones: lint, typecheck, tests, build, revision staging.
- Riesgos: aliases rotos, assets perdidos, Vercel root incorrecto.
- Rollback: revertir commit de migracion y restaurar Root Directory anterior.
- Prompt sugerido: `Implementa solo 4.4: migra landing a apps/marketing sin cambios funcionales.`

### 4.5 Creacion de paquetes compartidos minimos

- Objetivo: crear `packages/ui`, `packages/config`, `packages/types` solo si existe reutilizacion real.
- Entregables: paquetes minimos o decision documentada de no crearlos todavia.
- Archivos probables: `packages/`, configs workspace.
- Criterios de aceptacion: no hay abstracciones prematuras ni tipos clinicos compartidos.
- Validaciones: lint, typecheck, tests.
- Riesgos: mover logica especifica de marketing o clinica a paquetes compartidos.
- Rollback: devolver codigo a app origen.
- Prompt sugerido: `Implementa solo 4.5: crea paquetes compartidos minimos solo con reutilizacion real.`

### 4.6 Configuracion Vercel de marketing

- Objetivo: mantener proyecto Vercel actual, cambiar Root Directory a `apps/marketing`, validar preview, staging, produccion y dominios.
- Entregables: checklist Vercel, configuracion documentada y validada.
- Archivos probables: docs y configuracion Vercel manual.
- Criterios de aceptacion: `www.balancepsicologia.com` sigue sirviendo la landing.
- Validaciones: preview, staging, produccion, dominios y noindex de staging.
- Riesgos: deploy roto por Root Directory.
- Rollback: restaurar Root Directory previo.
- Prompt sugerido: `Planifica/ejecuta 4.6 solo con aprobacion: configurar Vercel marketing tras migracion.`

### 4.7 Preparacion de `apps/clinic`

- Objetivo: preferir no crear app clinica funcional en Version 4.x; reservar creacion real para 5.1.
- Entregables: decision documentada; placeholder estructural solo si es indispensable para validar workspace.
- Archivos probables: `docs/`, y `apps/clinic` solo con aprobacion explicita.
- Criterios de aceptacion: no existe app privada funcional.
- Validaciones: workspace valida sin rutas clinicas reales.
- Riesgos: crear funcionalidad privada prematura.
- Rollback: eliminar placeholder si genera confusion.
- Prompt sugerido: `Implementa solo 4.7: documenta preparacion de apps/clinic sin app funcional.`

### 4.8 QA y cierre de migracion

- Objetivo: cerrar migracion con lint, typecheck, tests, build, staging, produccion, dominios, Root Directory, documentacion y rollback probado/documentado.
- Entregables: reporte QA, checklist de cierre y rollback documentado.
- Archivos probables: `docs/`, configs si hay ajustes menores.
- Criterios de aceptacion: marketing funciona igual en monorepo.
- Validaciones: `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`, staging y dominios.
- Riesgos: fallos tardios de despliegue o cache.
- Rollback: ruta documentada para volver a estructura anterior.
- Prompt sugerido: `Implementa solo 4.8: QA y cierre de migracion monorepo sin crear app privada.`

---

## Version 5.x - Fundacion de app privada

Mapa futuro sujeto a nuevo scope, cotizacion, seguridad, privacidad y aprobacion.

- 5.1 Crear `apps/clinic` real y proyecto Vercel separado para `app.balancepsicologia.com`.
- 5.2 Definir Firebase project y ambientes separados.
- 5.3 Configurar Firebase Auth, recuperacion de acceso y manejo de sesiones.
- 5.4 Modelar workspaces, users, memberships y roles.
- 5.5 Definir matriz de permisos inicial.
- 5.6 Crear app shell y navegacion privada sin datos clinicos.
- 5.7 Disenar Firestore Rules, App Check y Cloud Functions base.
- 5.8 Implementar auditoria minima, observabilidad, backups y budgets.
- 5.9 QA de seguridad con datos ficticios.

Version 5.x no incluye todavia historial clinico completo ni IA real.

## Version 6.x - Gestion clinica y administrativa

Mapa futuro sujeto a discovery clinico, legal, privacidad y aprobacion. La estructura de historial clinico disponible se registra como insumo privado para discovery/modelado, sin datos reales ni ejemplos identificables.

- 6.1 Discovery y modelado de estructura real de historial clinico.
- 6.2 Pacientes y perfiles con permisos por workspace/profesional.
- 6.3 Notas de sesion e historial con correcciones/anulaciones.
- 6.4 Citas internas, estados, busqueda y filtros.
- 6.5 Auditoria, exportacion, borrado y retencion.
- 6.6 Finanzas administrativas si se aprueban.
- 6.7 Pruebas con datos ficticios y QA de permisos.

## Version 7.x - Asistente de IA supervisado

Mapa futuro sujeto a consentimiento, privacidad, costos, seguridad y aprobacion profesional.

- 7.1 Definir casos de uso aprobados y lenguaje de producto.
- 7.2 Implementar Cloud Function o capa segura para Gemini, Firebase AI Logic o Vertex AI.
- 7.3 Minimizar datos enviados al modelo y prohibir expedientes completos sin necesidad.
- 7.4 Generar resumenes, temas recurrentes, objetivos, preguntas sugeridas, borradores SOAP/DAP, hipotesis a explorar y banderas para revision.
- 7.5 Flujo de revisar, editar, aprobar o descartar outputs.
- 7.6 Versionado de prompts/modelos, auditoria y registro de aprobacion humana.
- 7.7 Rate limits, budgets, monitoreo de costos y pruebas con datos ficticios.

Prohibiciones permanentes:

- Diagnostico automatico o definitivo.
- Tratamiento decidido por IA.
- Evaluacion clinica automatica.
- Guardar outputs como nota final sin revision.
- Enviar expedientes completos sin necesidad.
- Llamar al modelo directamente desde frontend.

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
