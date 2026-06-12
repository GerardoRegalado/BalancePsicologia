# Project Scope - Balance Psicologia

Documento para cerrar el alcance aprobado antes de cotizar, antes del diseno/mockup final y antes de la estrategia de desarrollo.

## Datos base

- Cliente: Balance Psicologia
- Contacto principal: Fernanda Regalado
- Proyecto: pagina temporal, landing publica, fine tuning publico y vision futura de plataforma privada para consultorio psicologico
- Fecha original: 2026-06-10
- Fuente principal: `docs/client-discovery.md`
- Dominio publico: `www.balancepsicologia.com`
- Dominio futuro privado: `app.balancepsicologia.com`
- Estado actual del plan: Fases 0, 1 y 2 cerradas; la siguiente fase real de implementacion es Phase 3.

## Resumen del proyecto

Balance Psicologia necesita una presencia profesional en internet para presentar servicios psicologicos, costos, ubicacion del consultorio, medios de contacto y una opcion sencilla para solicitar informacion o cita.

El proyecto inicio con una pagina temporal y una landing publica inicial. La direccion aprobada ahora separa el trabajo en fases: fine tuning publico primero, migracion futura a repositorio privado/monorepo despues, y app privada real solo en fases posteriores con nuevo scope y aprobacion.

La futura app privada en `app.balancepsicologia.com` no forma parte de Phase 3 ni de la cotizacion original. Cualquier manejo de pacientes, notas, historial clinico, datos sensibles, finanzas internas o IA requiere una fase separada con seguridad, privacidad, permisos, criterios legales y cotizacion independiente.

## Mapa actualizado de fases

### Phase 0 - Pagina temporal, cerrada

- Pagina temporal publica para `www.balancepsicologia.com`.
- Mensaje profesional de sitio en construccion.
- Sin formulario, agenda funcional, captura de datos, base de datos, app privada ni almacenamiento.

### Phase 1 - Landing publica inicial, cerrada

- Landing publica inicial para `www.balancepsicologia.com`.
- Secciones base: inicio, nosotros, servicios, costos/paquetes, solicitud de cita, testimonios condicionados, FAQ, contacto, mapa y footer.
- Presencia profesional y canal publico de contacto.
- Sin app privada funcional ni datos sensibles.

### Phase 2 - Preparacion conceptual privada, cerrada

- Documentacion estrategica para futura separacion publica/privada.
- Limites para app privada futura.
- Lineamientos de estructura privada futura.
- Registro de riesgos.
- Checklist de preparacion.
- Checkpoint Firebase/IA supervisada.
- No implemento app privada, login, base de datos, Firebase, Gemini, rutas privadas ni datos reales.

### Phase 3 - Fine tuning publico

Siguiente fase real de implementacion.

Incluye:

- Integracion de logos aprobados.
- Integracion de WhatsApp publico aprobado.
- Integracion de redes sociales aprobadas.
- Integracion de ubicacion publica aprobada.
- Integracion de costos y servicios reales aprobados.
- Consolidacion de CTA publico.
- SEO, metadata, Open Graph y favicon.
- Staging `noindex,nofollow`.
- QA responsive, accesibilidad, enlaces y contenido.
- Revision en staging y promocion controlada a produccion.

Fuera de Phase 3:

- Login.
- Firebase.
- Base de datos.
- Pacientes.
- Historial clinico.
- Notas clinicas.
- App privada.
- IA.
- Finanzas internas.
- Pagos online.
- Almacenamiento de datos sensibles.
- Cualquier backend no aprobado.

### Phase 4 - Repositorio privado y monorepo

Fase puente obligatoria despues de Phase 3 y antes de Phase 5.

Incluye solo:

- Privacidad del repositorio.
- Hardening y auditoria previa.
- Migracion estructural a monorepo.
- Workspaces.
- Movimiento de la landing a `apps/marketing`.
- Configuracion de Vercel con Root Directory.
- Validacion de staging/produccion.
- Documentacion y rollback.

No incluye funcionalidades clinicas, pacientes, Firebase real, app privada funcional, IA, pagos ni datos sensibles.

### Phase 5 - Fundacion privada futura

Fase futura independiente sujeta a nuevo scope, cotizacion, seguridad, privacidad, aprobacion, criterios legales y diseno tecnico.

Podria incluir:

- Creacion real de `apps/clinic`.
- Proyecto Vercel separado para `app.balancepsicologia.com`.
- Firebase project y ambientes.
- Firebase Auth.
- Workspaces, users, memberships y roles.
- Matriz de permisos.
- App shell privada.
- Firestore Rules, App Check y Cloud Functions base.
- Auditoria, sesiones, observabilidad, backups, budgets y QA de seguridad.

No incluye todavia historial clinico completo.

### Phase 6 - Gestion clinica y administrativa futura

Fase futura independiente sujeta a nuevo scope, cotizacion, seguridad, privacidad, aprobacion, criterios legales y diseno tecnico.

Podria incluir:

- Discovery de la estructura real del historial clinico.
- Pacientes y perfiles.
- Notas de sesion.
- Historial.
- Citas internas.
- Estados.
- Busqueda y filtros.
- Correcciones y anulaciones.
- Auditoria.
- Exportacion, borrado y retencion.
- Finanzas administrativas si se aprueban.
- Permisos por profesional/workspace.
- Pruebas con datos ficticios.

La estructura de historial clinico disponible queda como insumo privado para discovery/modelado. No debe publicarse en la landing ni guardarse con datos reales en el repositorio.

### Phase 7 - Asistente de IA supervisado futuro

Fase futura independiente sujeta a nuevo scope, cotizacion, seguridad, privacidad, aprobacion, criterios legales y diseno tecnico.

Podria incluir:

- Casos de uso aprobados.
- Cloud Function o capa segura.
- Gemini, Firebase AI Logic o Vertex AI.
- Minimizacion de datos.
- Resumenes, temas recurrentes, objetivos, preguntas sugeridas, borradores SOAP/DAP, hipotesis a explorar y banderas para revision.
- Revision humana: editar, aprobar o descartar.
- Versionado de prompts/modelos.
- Auditoria.
- Costos y rate limits.
- Consentimiento y privacidad.

Debe mantenerse prohibido:

- Diagnostico automatico.
- Diagnostico definitivo.
- Tratamiento decidido por IA.
- Evaluacion clinica automatica.
- Guardar outputs como nota final sin revision.
- Enviar expedientes completos sin necesidad.
- Llamar al modelo directamente desde frontend.

## Alcance incluido de Phase 3

- Inventario y clasificacion de insumos reales.
- Preparacion y validacion de logos/assets.
- Integracion de identidad visual real aprobada.
- Integracion de WhatsApp y contacto real aprobado.
- Integracion de redes sociales aprobadas.
- Integracion de ubicacion real aprobada.
- Integracion de costos y servicios reales aprobados.
- Consolidacion del flujo publico de solicitud de cita, por defecto hacia WhatsApp.
- SEO, metadata, Open Graph, favicon y SEO local.
- Staging `noindex,nofollow`.
- QA final y promocion controlada.

## Alcance excluido de Phase 3

- App privada funcional en `app.balancepsicologia.com`.
- Login, usuarios, roles o permisos.
- Firebase, Firestore, Cloud Functions o Gemini.
- Base de datos.
- Pacientes.
- Historial clinico.
- Notas clinicas.
- Expedientes.
- IA.
- Finanzas internas.
- Pagos online.
- Stripe, Mercado Pago o facturacion.
- CRM.
- Storage/uploads.
- Almacenamiento de datos sensibles.
- Agenda automatica o confirmacion automatica de citas.

## Insumos disponibles para Phase 3

Ya existen insumos disponibles para integracion, pendientes de validacion final y publicacion dentro de Phase 3:

- Ubicacion real de la oficina.
- WhatsApp publico de la psicologa.
- Redes sociales.
- Costos de sesiones.
- Logos.

La estructura usada por la psicologa para llevar historial clinico queda registrada como insumo privado para Phase 6. No debe integrarse en la landing publica ni publicarse en documentacion con datos reales.

## Reglas de datos sensibles

El repositorio actualmente puede contener documentacion publica y no debe recibir:

- Datos de pacientes.
- Historiales clinicos llenos.
- Nombres.
- Diagnosticos.
- Notas de sesiones reales.
- Capturas con datos clinicos.
- Identificadores de pacientes.
- Credenciales.
- Secretos.

Incluso despues de convertir el repositorio en privado, Git no debe utilizarse como almacenamiento de informacion clinica real.

## Dependencias de Phase 3

- Validacion final de logos.
- Validacion final de WhatsApp publico.
- Validacion final de redes sociales.
- Validacion final de ubicacion publica.
- Validacion final de costos y servicios.
- Aprobacion del copy publico.
- Acceso o confirmacion de staging.
- Aprobacion del cliente antes de promocion a produccion.

## Riesgos y notas operativas

- Publicar insumos reales sin validacion puede exponer informacion incorrecta.
- Staging debe mantenerse fuera de indexacion.
- La landing publica no debe mezclar workflows privados.
- La app privada involucra informacion sensible de salud mental y requiere una fase separada.
- Los pagos online y finanzas internas no forman parte de Phase 3.
- Phase 4 puede afectar despliegue si se cambia Root Directory sin QA y rollback.

## Criterios de aceptacion

### Phase 3 - Fine tuning publico

- Logos, WhatsApp, redes, ubicacion, costos y servicios aprobados quedan integrados.
- CTA publico principal queda claro y, por defecto, dirigido a WhatsApp.
- Metadata, SEO, Open Graph y favicon quedan revisados.
- Staging queda `noindex,nofollow`.
- No se implementa app privada, login, Firebase, base de datos ni IA.
- No se almacenan datos sensibles.
- QA desktop/mobile, accesibilidad, enlaces y contenido no presenta bloqueadores.
- Promocion a produccion se realiza solo con aprobacion.

### Phase 4 - Monorepo futuro

- El repositorio queda privado antes de trabajo privado real.
- La landing se mueve a `apps/marketing` sin cambios funcionales.
- Vercel usa Root Directory correcto.
- No se crea app clinica funcional.
- Rollback queda documentado.

### Phases 5-7 futuras

- Cada fase futura requiere nuevo scope, cotizacion, seguridad, privacidad, aprobacion, criterios legales y diseno tecnico antes de implementarse.

## Aprobacion

- Estado: Pendiente de aprobacion
- Fecha de aprobacion: Pendiente
- Aprobado por: Pendiente
