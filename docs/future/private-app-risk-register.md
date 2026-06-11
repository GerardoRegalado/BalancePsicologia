# Registro de riesgos para app privada futura

Documento estrategico para la subfase 2.4 de Version 2.x. Registra riesgos que deben resolverse antes de gestionar datos clinicos, pacientes, notas, usuarios internos, IA o workflows administrativos reales en `app.balancepsicologia.com`.

Fase 2.x sigue siendo documental. Este registro no implementa mitigaciones tecnicas, Firebase, Gemini, auth, base de datos, rutas privadas, dependencias ni cambios en la landing publica.

## 1. Proposito

Este documento funciona como registro de riesgos previo a una futura Fase 3 o fase privada equivalente. Su objetivo es hacer visibles las decisiones tecnicas, operativas, de seguridad, privacidad y cumplimiento que deben resolverse antes de manejar informacion sensible.

Cada riesgo incluye:

- Riesgo.
- Por que importa.
- Mitigacion requerida antes de implementacion.
- Estado en Fase 2.x.

El estado en Fase 2.x es siempre documental: `Documentado; no implementado en Fase 2.x.`

## 2. Seguridad

### Exposicion accidental de datos clinicos

- Riesgo: Datos de pacientes, notas o sesiones podrian aparecer en superficies publicas, logs, errores, capturas o respuestas no autorizadas.
- Por que importa: La informacion clinica es sensible y su exposicion puede causar dano a pacientes, perdida de confianza y riesgos legales.
- Mitigacion requerida antes de implementacion: Definir aislamiento de datos, permisos, revision de logs, manejo de errores y pruebas de acceso antes de guardar datos reales.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Reglas de Firestore mal configuradas

- Riesgo: Reglas permisivas podrian permitir lectura o escritura fuera del workspace autorizado.
- Por que importa: Una mala regla puede exponer toda la base de datos aunque la UI parezca segura.
- Mitigacion requerida antes de implementacion: Disenar reglas por `workspaceId`, rol activo, coleccion y operacion; probarlas con casos permitidos y denegados.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Confianza excesiva en validaciones del frontend

- Riesgo: La app podria ocultar botones o vistas, pero permitir acciones si alguien llama servicios directamente.
- Por que importa: El frontend no es frontera de seguridad para datos sensibles.
- Mitigacion requerida antes de implementacion: Validar permisos en reglas, servicios, funciones o backend; tratar la UI solo como capa de experiencia.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### API routes o Cloud Functions sin validacion de permisos

- Riesgo: Endpoints internos podrian ejecutar acciones sin confirmar usuario, workspace y rol.
- Por que importa: Las funciones privilegiadas concentran operaciones criticas y pueden saltarse reglas si estan mal disenadas.
- Mitigacion requerida antes de implementacion: Exigir auth, validar `workspaceId`, verificar rol activo, registrar auditoria y limitar entradas.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Secretos o llaves expuestas

- Riesgo: Llaves de proveedor, tokens o secretos podrian filtrarse en repositorio, frontend, logs o variables mal clasificadas.
- Por que importa: Un secreto expuesto permite abuso, costos no autorizados o acceso a datos.
- Mitigacion requerida antes de implementacion: Definir manejo de secretos, variables por ambiente, rotacion, revision de logs y separacion cliente/servidor.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 3. Privacidad y datos sensibles

### Informacion clinica sin aviso de privacidad y consentimiento

- Riesgo: Guardar datos de pacientes sin aviso de privacidad y consentimiento adecuados.
- Por que importa: El manejo de datos personales sensibles requiere claridad legal, consentimiento y responsabilidad operativa.
- Mitigacion requerida antes de implementacion: Validar aviso de privacidad, consentimiento explicito y responsables de tratamiento con asesoria legal/profesional.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Datos sensibles en logs, analytics, screenshots, fixtures o documentacion

- Riesgo: Informacion clinica podria persistir fuera de la base segura en canales secundarios.
- Por que importa: Los canales secundarios suelen tener menos controles, retencion poco clara y acceso mas amplio.
- Mitigacion requerida antes de implementacion: Prohibir datos reales en logs, analytics, capturas, fixtures y docs; usar solo datos ficticios.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Falta de politica de retencion, borrado y exportacion

- Riesgo: No saber cuanto conservar datos, como eliminarlos o como exportarlos de forma segura.
- Por que importa: La retencion indefinida aumenta exposicion y dificulta cumplir solicitudes o cambios operativos.
- Mitigacion requerida antes de implementacion: Definir politica de retencion, borrado, exportacion, backups y trazabilidad de eliminaciones.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Enviar mas informacion de la necesaria a proveedores externos

- Riesgo: Proveedores externos podrian recibir expedientes completos o datos no necesarios para una tarea puntual.
- Por que importa: Minimizar datos reduce exposicion, costo y riesgo de privacidad.
- Mitigacion requerida antes de implementacion: Definir minimizacion, redaccion, alcance por tarea, capa segura y prohibicion de enviar expedientes completos sin necesidad.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 4. Autenticacion y sesiones

### Cuentas compartidas

- Riesgo: Varias personas podrian usar la misma cuenta.
- Por que importa: Rompe auditoria, permisos y responsabilidad individual sobre accesos o cambios.
- Mitigacion requerida antes de implementacion: Definir usuarios individuales, roles, invitaciones, desactivacion y prohibicion operativa de cuentas compartidas.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Falta de recuperacion segura de acceso

- Riesgo: La recuperacion de cuenta podria permitir secuestro o bloqueo operativo.
- Por que importa: Una cuenta recuperada indebidamente puede acceder a datos sensibles.
- Mitigacion requerida antes de implementacion: Definir flujo de recuperacion, verificacion, notificaciones, revocacion de sesiones y soporte.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Falta de desactivacion de usuarios

- Riesgo: Personas que ya no deben entrar podrian conservar acceso.
- Por que importa: Usuarios inactivos o ex colaboradores elevan el riesgo de acceso indebido.
- Mitigacion requerida antes de implementacion: Definir estado de membresia, desactivacion, revocacion de sesiones y auditoria de bajas.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Sesiones abiertas en equipos compartidos

- Riesgo: Una sesion activa podria quedar disponible en un equipo no controlado.
- Por que importa: Permite acceso no autorizado a pacientes y notas.
- Mitigacion requerida antes de implementacion: Definir expiracion de sesion, cierre remoto, reautenticacion para acciones sensibles y recomendaciones operativas.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Ausencia de App Check o controles equivalentes

- Riesgo: Clientes no autorizados podrian consumir recursos o intentar abuso.
- Por que importa: Incrementa exposicion, costos y posibilidad de trafico automatizado.
- Mitigacion requerida antes de implementacion: Evaluar App Check o controles equivalentes, rate limits y monitoreo por ambiente.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 5. Roles y permisos

### Diseno single-user rigido

- Riesgo: La app podria quedar amarrada a una sola psicologa hardcodeada.
- Por que importa: Dificulta crecer, auditar, separar permisos o agregar profesionales.
- Mitigacion requerida antes de implementacion: Disenar `single-client UI, multi-tenant-ready backend` con usuarios, memberships y roles desde el modelo conceptual.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Falta de separacion por `workspaceId`

- Riesgo: Datos de distintos consultorios o profesionales podrian mezclarse.
- Por que importa: `workspaceId` es la frontera conceptual para datos sensibles y permisos.
- Mitigacion requerida antes de implementacion: Incluir `workspaceId` en reglas, consultas, entidades y auditoria antes de datos reales.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Acceso a pacientes/notas fuera del workspace

- Riesgo: Un usuario podria ver pacientes o notas que no pertenecen a su workspace.
- Por que importa: Es una falla critica de privacidad y permisos.
- Mitigacion requerida antes de implementacion: Validar pertenencia, rol activo y autorizacion en cada lectura y escritura sensible.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### No distinguir `owner`, `psychologist` y futuros roles

- Riesgo: Todos los usuarios podrian recibir permisos demasiado amplios.
- Por que importa: El minimo privilegio reduce exposicion y errores operativos.
- Mitigacion requerida antes de implementacion: Definir matriz de permisos para `owner`, `psychologist` y roles futuros como `assistant`, `admin` o `viewer`.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 6. Auditoria y trazabilidad

### No registrar accesos o cambios relevantes

- Riesgo: La app podria no registrar consultas, ediciones o acciones sensibles.
- Por que importa: Sin auditoria no se puede investigar ni demostrar manejo responsable.
- Mitigacion requerida antes de implementacion: Definir eventos auditables, retencion, acceso a auditoria y proteccion contra alteraciones.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Registrar demasiado contenido sensible en logs

- Riesgo: La auditoria podria guardar notas completas, prompts, outputs o datos clinicos.
- Por que importa: Los logs deben ayudar a investigar sin convertirse en copia insegura del expediente.
- Mitigacion requerida antes de implementacion: Registrar metadata minima, IDs, acciones y timestamps; evitar contenido clinico en logs.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### No saber quien consulto o modifico una nota

- Riesgo: Cambios o lecturas sensibles podrian no ser atribuibles.
- Por que importa: La trazabilidad es clave para confianza, correccion de errores e incidentes.
- Mitigacion requerida antes de implementacion: Registrar actor, workspace, entidad, accion, fecha y contexto minimo sin exponer contenido clinico.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### No poder investigar incidentes

- Riesgo: Ante un acceso indebido o error no habria evidencia suficiente.
- Por que importa: Sin investigacion se dificulta contener, corregir y comunicar incidentes.
- Mitigacion requerida antes de implementacion: Definir plan de incidentes, auditoria minima, responsables y procedimientos de revision.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 7. Modelo de datos

### Mezclar datos publicos con datos clinicos

- Riesgo: Datos de marketing, landing y pacientes podrian vivir en las mismas fuentes o componentes.
- Por que importa: Mezclar superficies aumenta exposicion e indexacion accidental.
- Mitigacion requerida antes de implementacion: Separar fuentes publicas, privadas, clinicas y administrativas por capa y permisos.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Datos clinicos en `content/` o `config/`

- Riesgo: Expedientes, notas o pacientes podrian guardarse en carpetas destinadas a contenido editable publico.
- Por que importa: `content/` y `config/` no son almacenamiento seguro de datos sensibles.
- Mitigacion requerida antes de implementacion: Prohibir datos clinicos en esas carpetas y definir almacenamiento privado con permisos.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Schemas sin criterios de privacidad

- Riesgo: Modelos de pacientes o notas podrian capturar datos excesivos o sin proposito definido.
- Por que importa: El modelo de datos determina exposicion, retencion, permisos y costo de cambios futuros.
- Mitigacion requerida antes de implementacion: Disenar schemas con minimizacion, permisos, retencion, exportacion y borrado desde el inicio.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### No considerar borrado/exportacion desde el diseno

- Riesgo: El sistema podria dificultar eliminar o exportar informacion de forma controlada.
- Por que importa: Borrado y exportacion son necesidades operativas y de privacidad.
- Mitigacion requerida antes de implementacion: Definir IDs, relaciones, backups, retencion y procesos antes de persistir datos reales.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 8. IA supervisada

### IA presentada como diagnostico automatico

- Riesgo: La app podria comunicar o comportarse como si la IA diagnosticara pacientes.
- Por que importa: Eso excede el rol aceptable de la IA y puede generar dano clinico o expectativas falsas.
- Mitigacion requerida antes de implementacion: Redactar UX, disclaimers y flujos como asistencia supervisada, no diagnostico.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Outputs de IA como verdad clinica sin revision

- Riesgo: Resumenes o inferencias podrian guardarse directamente como nota final.
- Por que importa: La profesional debe revisar, editar, aprobar o descartar cualquier salida.
- Mitigacion requerida antes de implementacion: Marcar outputs como borradores, exigir revision humana y registrar aprobacion.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Expedientes completos enviados al modelo

- Riesgo: El sistema podria mandar mas datos de los necesarios a Gemini, Vertex AI u otro proveedor.
- Por que importa: Aumenta exposicion de privacidad y costos.
- Mitigacion requerida antes de implementacion: Minimizar contexto, enviar solo lo necesario, usar capa segura y evitar datos no requeridos.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Prompts/modelos sin versionado

- Riesgo: Cambios en prompts o modelos podrian alterar outputs sin trazabilidad.
- Por que importa: La revision clinica y QA requieren saber que version produjo una asistencia.
- Mitigacion requerida antes de implementacion: Versionar prompt, modelo, parametros y fecha de generacion cuando se use IA.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Outputs no marcados como borradores revisables

- Riesgo: La UI podria mostrar respuestas de IA como definitivas.
- Por que importa: La IA debe apoyar, no decidir ni cerrar criterio profesional.
- Mitigacion requerida antes de implementacion: Etiquetar cada output como borrador/asistencia y separar estado borrador de nota aprobada.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Falta de registro de revision humana

- Riesgo: No quedaria evidencia de quien reviso, edito o aprobo un output de IA.
- Por que importa: La responsabilidad profesional requiere trazabilidad de aprobacion.
- Mitigacion requerida antes de implementacion: Registrar actor, fecha, accion y version revisada sin duplicar contenido sensible en logs.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 9. Staging y ambientes

### Staging con datos reales

- Riesgo: El entorno de revision podria usarse con pacientes o notas reales.
- Por que importa: Staging suele tener menos controles y mas acceso temporal.
- Mitigacion requerida antes de implementacion: Prohibir datos reales en staging y usar datos ficticios claramente marcados.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Indexacion accidental de contenido privado

- Riesgo: Rutas privadas o contenido sensible podrian indexarse en buscadores.
- Por que importa: La indexacion expone informacion fuera del control operativo de la app.
- Mitigacion requerida antes de implementacion: Separar dominios, auth real, headers, robots, metadata y pruebas de no indexacion.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Variables de production y preview mezcladas

- Riesgo: Preview/staging podria apuntar a recursos de produccion o viceversa.
- Por que importa: Puede causar perdida, exposicion o contaminacion de datos reales.
- Mitigacion requerida antes de implementacion: Definir variables por ambiente, nombres claros, revisiones y protecciones de despliegue.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Share links tratados como seguridad clinica

- Riesgo: Enlaces temporales de revision podrian confundirse con control de acceso privado.
- Por que importa: Un share link no reemplaza auth, roles ni auditoria.
- Mitigacion requerida antes de implementacion: Usar share links solo para revision de landing/docs y auth real para cualquier dato privado.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 10. Operacion del consultorio

### Permisos operativos no definidos

- Riesgo: No quedar claro quien puede crear, editar, borrar o revisar informacion.
- Por que importa: La ambiguedad operativa genera errores y accesos excesivos.
- Mitigacion requerida antes de implementacion: Definir matriz de roles, permisos y flujos de aprobacion.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Falta de proceso para errores humanos

- Riesgo: Una nota, paciente o dato podria capturarse o editarse por error sin proceso de correccion.
- Por que importa: Los errores en informacion clinica requieren trazabilidad y correccion responsable.
- Mitigacion requerida antes de implementacion: Definir edicion, historial, anulacion, notas de correccion y auditoria.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Falta de proceso para cuenta comprometida

- Riesgo: Una cuenta robada podria seguir accediendo a informacion sensible.
- Por que importa: El tiempo de respuesta define el alcance del incidente.
- Mitigacion requerida antes de implementacion: Definir revocacion de sesiones, rotacion de credenciales, revision de auditoria y comunicacion interna.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Falta de politica para baja de usuarios

- Riesgo: Usuarios que dejan de colaborar podrian conservar permisos.
- Por que importa: Las bajas son una fuente comun de accesos no autorizados.
- Mitigacion requerida antes de implementacion: Definir proceso de offboarding, desactivacion, transferencia de responsabilidades y auditoria.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 11. Costos y limites de uso

### Budgets/alerts no configurados

- Riesgo: Los servicios externos podrian generar costos inesperados.
- Por que importa: IA, Functions, Firestore y storage pueden escalar por uso o abuso.
- Mitigacion requerida antes de implementacion: Configurar budgets, alertas, cuotas y responsables de monitoreo.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Llamadas a IA sin limites

- Riesgo: Usuarios o bugs podrian disparar llamadas excesivas a IA.
- Por que importa: Puede generar costos altos y procesamiento innecesario de datos sensibles.
- Mitigacion requerida antes de implementacion: Definir rate limits, cuotas por usuario/workspace, confirmaciones y monitoreo.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Uso de Firestore/Functions/IA sin monitoreo

- Riesgo: No detectar picos, errores, loops o abuso.
- Por que importa: Sin monitoreo, un problema puede convertirse en incidente tecnico o financiero.
- Mitigacion requerida antes de implementacion: Definir metricas, alertas, dashboards operativos y revision periodica.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Costos por loops o abuso

- Riesgo: Un bug o actor abusivo podria crear lecturas, escrituras o inferencias repetidas.
- Por que importa: Puede impactar disponibilidad, costos y privacidad.
- Mitigacion requerida antes de implementacion: Implementar limites, deduplicacion, validaciones, circuit breakers y alertas antes de produccion.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 12. Cumplimiento/legal

### Requisitos legales no validados antes de produccion

- Riesgo: La app podria publicarse sin revisar obligaciones aplicables a datos personales sensibles.
- Por que importa: El manejo de salud mental requiere especial cuidado legal y operativo.
- Mitigacion requerida antes de implementacion: Validar requisitos con asesoria legal/profesional antes de cualquier dato real.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Aviso de privacidad insuficiente

- Riesgo: El aviso podria no cubrir datos, finalidades, transferencias, retencion o derechos.
- Por que importa: El aviso comunica y regula expectativas sobre tratamiento de datos.
- Mitigacion requerida antes de implementacion: Redactar y validar aviso robusto antes de capturar pacientes o notas.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Consentimiento explicito no definido

- Riesgo: La app podria capturar o procesar datos sensibles sin consentimiento claro.
- Por que importa: El consentimiento es una base operativa y legal critica para datos sensibles.
- Mitigacion requerida antes de implementacion: Definir flujo, registro, version y revocacion de consentimiento.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

### Responsables del tratamiento no documentados

- Riesgo: No quedar claro quien decide sobre datos, accesos, retencion e incidentes.
- Por que importa: La responsabilidad operativa debe estar definida antes de manejar informacion real.
- Mitigacion requerida antes de implementacion: Documentar responsables, roles operativos, procedimientos y aprobaciones.
- Estado en Fase 2.x: Documentado; no implementado en Fase 2.x.

## 13. Riesgos bloqueantes antes de Fase 3

Antes de implementar cualquier dato real deben estar resueltos, como minimo:

- Aviso de privacidad.
- Consentimiento.
- Auth.
- Roles.
- `workspaceId`.
- Firestore Rules o equivalente.
- Auditoria.
- Politica de retencion/borrado.
- No uso de staging con datos reales.
- IA solo como borrador revisable.
- Cloud Function o capa segura para IA.
- Budgets/alerts.

Si cualquiera de estos puntos sigue indefinido, la futura app privada no debe procesar pacientes, notas clinicas, datos de sesiones, IA real ni workflows administrativos reales.

## 14. Criterios de aceptacion

- Los riesgos quedan documentados de forma accionable.
- La Fase 2.4 sigue siendo documental.
- No se implementan mitigaciones tecnicas.
- No se agrega Firebase.
- No se agrega Gemini.
- No se agrega auth.
- No se agrega base de datos.
- No se crean rutas privadas.
- No se modifica la landing publica.
- El documento queda alineado con los documentos previos en `docs/future/`.
