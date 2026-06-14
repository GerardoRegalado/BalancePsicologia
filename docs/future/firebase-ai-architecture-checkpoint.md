# Checkpoint de arquitectura futura: Firebase, multiusuario-lite e IA supervisada

Documento estrategico para la subfase 2.6 de Version 2.x. Consolida la direccion conceptual para una futura app privada en `app.balancepsicologia.com`, alineada con Firebase como opcion futura, arquitectura multiusuario-lite, separacion por `workspaceId`, IA supervisada, seguridad, privacidad, auditoria y minimizacion de datos.

Fase 2.x sigue siendo documental. Este checkpoint no autoriza implementar app privada, rutas privadas, login, Firebase, Gemini, base de datos, dependencias ni cambios en la landing publica.

## 1. Proposito

Este documento consolida la direccion conceptual de arquitectura para una futura app privada de Balance Psicologia. Sirve como cierre documental de Fase 2.x antes de pausar y preparar una futura Fase 3 o fase privada equivalente.

No reemplaza un scope tecnico real, una cotizacion, una matriz de permisos, reglas de seguridad ni un diseno final de datos. Cualquier implementacion debera aprobarse en una fase posterior.

## 2. Decision conceptual

Firebase queda como opcion futura principal a evaluar para:

- Firebase Auth.
- Firestore.
- Firebase Storage, solo si se aprueban archivos/documentos.
- Cloud Functions.
- App Check.
- Firestore Rules.
- Gemini / Firebase AI Logic / Vertex AI como asistencia supervisada.

La decision final de proveedor, servicios, costos, limites y arquitectura se confirmara en Fase 3 antes de implementar.

## 3. Principio de arquitectura

La futura app privada debe pensarse bajo el principio:

`single-client UI, multi-tenant-ready backend`

Inicialmente podria usarse para un solo consultorio o una sola usuaria, pero el diseno futuro debe soportar:

- `workspace` / `clinic`.
- `users`.
- `memberships`.
- `roles`.
- `leads`.
- `patients`.
- `sessionNotes`.
- `aiAssistances`.
- `auditLogs`.
- `settings`.

Estas entidades son conceptuales. No deben crearse schemas, modelos, interfaces TypeScript, fixtures ni datos reales en Fase 2.x.

Los leads representan solicitudes o contactos comerciales/administrativos previos al registro como paciente. Deben mantenerse separados de pacientes, notas y expedientes clinicos.

## 4. Roles conceptuales

Roles iniciales sugeridos:

- `owner`.
- `psychologist`.

Roles futuros opcionales:

- `assistant`.
- `admin`.
- `viewer`.

Los permisos reales deberan definirse en una matriz durante Fase 3 antes de implementar rutas, datos o acciones privadas.

## 5. Separacion por `workspaceId`

Todo dato sensible debe estar aislado por `workspaceId`.

Reglas conceptuales:

- Nadie lee datos si no pertenece al workspace.
- Nadie escribe datos si no tiene rol activo y autorizado.
- Las notas clinicas solo son visibles para usuarios autorizados.
- Firestore Rules o equivalente deben validar permisos.
- Cloud Functions deben validar usuario, rol y workspace.
- El frontend nunca debe considerarse frontera de seguridad.

La UI puede ocultar acciones por ergonomia, pero la seguridad real debe vivir en reglas, servicios controlados o funciones seguras.

## 6. Arquitectura conceptual de IA

Flujo recomendado:

`Frontend -> Firebase Auth -> Firestore -> Cloud Function segura -> Gemini / Firebase AI Logic / Vertex AI -> respuesta revisable -> Firestore como borrador/asistencia`

Flujo prohibido:

`Frontend -> Gemini`

## 6A. Flujo conceptual de captacion publica y leads

Flujo recomendado para un formulario publico futuro:

`Marketing form -> Cloud Function o endpoint seguro -> leads -> app privada autenticada -> conversion humana -> patients`

Flujos prohibidos:

- `Marketing frontend -> escritura directa a patients`.
- `Marketing frontend -> sessionNotes`.
- `Marketing frontend -> historial clinico`.
- `Marketing frontend -> Firestore privado sin capa segura`.

El endpoint o Cloud Function futuro debera validar datos, limitar abuso, verificar consentimiento, asignar `workspaceId`, registrar origen y crear solo un lead. No debe crear automaticamente pacientes ni historiales clinicos.

No se deciden todavia colecciones, indices, Firestore Rules exactas ni modelo final de datos.

La IA debe pasar por una capa segura que valide permisos, minimice datos, controle costos, evite contenido clinico en logs y devuelva respuestas revisables antes de almacenarlas como asistencia.

## 7. Usos permitidos de IA

La IA solo debe usarse como asistente clinico supervisado.

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

## 8. Usos prohibidos o bloqueados

Debe evitarse explicitamente:

- Diagnostico automatico.
- Diagnostico IA.
- Diagnostico definitivo.
- Tratamiento recomendado por IA.
- Evaluacion clinica automatica.
- Outputs de IA como verdad clinica sin revision.
- Envio de expedientes completos al modelo sin necesidad.
- Logs con contenido clinico.

La IA no sustituye el criterio profesional ni debe presentarse como autoridad clinica.

## 9. Reglas para outputs de IA

Todo output debe:

- Quedar como borrador revisable.
- Poder editarse.
- Poder descartarse.
- Requerir aprobacion de la profesional.
- Registrar quien reviso/aprobo/descarto.
- Registrar version de prompt/modelo/parametros cuando aplique.
- Evitar guardar contenido sensible duplicado en logs.

La nota clinica final debe distinguirse del borrador generado por IA y quedar bajo responsabilidad de revision humana.

## 10. Seguridad y privacidad minima antes de implementacion

Antes de Fase 3 deben estar resueltos:

- Aviso de privacidad.
- Consentimiento.
- Roles/permisos.
- `workspaceId`.
- Firestore Rules o equivalente.
- App Check o equivalente.
- Auditoria minima.
- Politica de retencion/borrado.
- Datos ficticios para pruebas.
- No uso de staging con datos reales.
- Budget alerts.
- Capa segura para IA.

Si estos puntos no estan aprobados, la futura app privada no debe procesar pacientes reales, notas clinicas, sesiones, expedientes, IA clinica real ni workflows administrativos reales.

## 11. Relacion con documentos previos

Este checkpoint consolida, pero no reemplaza, los documentos previos:

- `docs/future/public-private-boundary.md`.
- `docs/future/private-app-limits.md`.
- `docs/future/private-app-structure-guidelines.md`.
- `docs/future/private-app-risk-register.md`.
- `docs/future/private-app-readiness-checklist.md`.

La futura Fase 3 debe usar esos documentos como insumos separados: frontera de superficies, limites, estructura conceptual, riesgos y checklist de preparacion.

## 12. Que queda pendiente para Fase 3

Antes de implementar, Fase 3 debera definir:

- Scope real de app privada.
- Cotizacion/estimacion.
- Proveedor final.
- Arquitectura tecnica final.
- Modelo de datos real.
- Matriz de permisos.
- Reglas de seguridad.
- Flujos de pacientes/notas.
- Flujos de IA.
- Politica de datos y legal.
- Ambientes y despliegue.
- Plan de QA.
- Plan de monitoreo/costos.

Hasta que eso exista, Firebase, Gemini, Firebase AI Logic, Vertex AI, Cloud Functions, Firestore Rules y App Check permanecen como opciones conceptuales, no como implementacion.

## 13. Criterios de aceptacion

- El checkpoint de arquitectura futura queda documentado.
- La Fase 2.6 sigue siendo documental.
- No se implementa app privada.
- No se agregan rutas.
- No se agrega login.
- No se agrega Firebase.
- No se agrega Gemini.
- No se agrega base de datos.
- No se modifican landing publica ni produccion.
- El checkpoint queda alineado con los documentos previos en `docs/future/`.
