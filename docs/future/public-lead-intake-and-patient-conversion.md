# Captacion publica futura y conversion lead-paciente

Documento conceptual para aclarar la evolucion futura del flujo de contacto publico hacia una gestion privada de leads y pacientes.

Este documento no implementa formulario, app privada, Firebase, Firestore, Cloud Functions, modelos, schemas, rutas privadas ni almacenamiento. Sirve solo como frontera arquitectonica para fases posteriores.

## 1. Estado actual

Durante Phase 3, WhatsApp es el canal temporal de la landing para iniciar contacto y solicitar informacion.

La landing actual:

- No captura datos mediante formulario.
- No almacena solicitudes.
- No confirma citas automaticamente.
- No escribe en Firestore ni en ningun backend.
- No tiene permisos para pacientes, historiales clinicos ni informacion privada.

WhatsApp y redes sociales podran seguir existiendo como canales alternativos de contacto aun cuando exista un formulario publico futuro.

## 2. Flujo publico futuro canonico

El flujo publico futuro canonico sera un formulario de solicitud de contacto en la superficie de marketing.

Ese formulario:

- No sera una agenda automatica.
- No confirmara una cita al enviarse.
- Vivira en la superficie publica de marketing.
- Enviara la solicitud a una capa segura.
- No escribira directamente en Firestore desde la landing.
- No tendra permisos para crear pacientes ni historiales clinicos.

El procesamiento y almacenamiento perteneceran a una capa segura y al dominio privado. Firebase continua como opcion principal a confirmar, no como proveedor definitivo decidido en este documento.

Flujo conceptual:

```text
Formulario publico
→ endpoint o Cloud Function segura
→ validacion server-side
→ controles antispam / rate limit / App Check o equivalente
→ registro de lead
→ gestion autenticada en app privada
```

El endpoint futuro debera:

- Validar campos.
- Normalizar datos.
- Registrar consentimiento.
- Limitar abuso.
- Asignar `workspaceId`.
- Registrar origen.
- Crear unicamente un lead.
- No crear automaticamente un paciente.
- No crear historial clinico.
- No escribir datos clinicos.

## 3. Datos minimos del formulario futuro

Campos conceptuales posibles:

- Nombre.
- Telefono o medio de contacto.
- Correo opcional.
- Modalidad de interes.
- Mensaje breve opcional.
- Aceptacion del aviso de privacidad.

No se debe solicitar publicamente:

- Diagnostico.
- Sintomas detallados.
- Medicamentos.
- Antecedentes.
- Historia clinica.
- Documentos.
- Fotografias.
- Identificaciones.
- Informacion de emergencia.
- Notas terapeuticas.

El campo de mensaje debera advertir que no se comparta informacion clinica sensible.

Los campos finales dependen de validacion legal y de privacidad.

## 4. Entidad conceptual Lead

Un lead representa una solicitud o contacto comercial/administrativo previo al registro como paciente.

Debe estar separado de:

- `patients`.
- `sessionNotes`.
- Expedientes.
- Informacion clinica.

Propiedades conceptuales minimas:

- `workspaceId`.
- `source`.
- `status`.
- `contactData`.
- `consent`.
- `createdAt`.
- `createdBy`.
- `convertedPatientId`.
- `convertedAt`.
- `convertedBy`.

Estos nombres son lenguaje conceptual. No deben convertirse todavia en TypeScript, Firestore schema, JSON, fixtures ni implementacion real.

## 5. Origen conceptual

Origenes operativos de referencia:

- `public_form`.
- `whatsapp`.
- `facebook`.
- `instagram`.
- `manual`.

`manual` permite registrar contactos provenientes de llamada, recomendacion, atencion presencial u otro medio, registrando el detalle solo cuando sea necesario.

Este documento no implementa analytics ni tracking publico nuevo.

## 6. Estados conceptuales

Estados operativos de referencia:

- `new`.
- `contacted`.
- `information_only`.
- `qualified`.
- `converted`.
- `closed_not_converted`.
- `spam`.

En interfaz futura podrian mostrarse como:

- Nuevo.
- Contactado.
- Solo solicito informacion.
- Candidato a paciente.
- Convertido en paciente.
- Cerrado sin conversion.
- Spam.

Los estados finales deben validarse durante el diseno real de la app privada.

## 7. Conversion lead-paciente

Convertir un lead en paciente requiere accion humana explicita.

Reglas conceptuales:

- Convertir un lead no elimina el lead.
- No se cambia el tipo del registro.
- Se crea un nuevo paciente.
- Ambos registros quedan vinculados.
- El lead se marca como convertido.
- Se registra fecha y usuario responsable.
- Se genera auditoria.
- Solo se copian datos administrativos minimos aprobados.
- Mensajes libres no se copian automaticamente al historial clinico.
- El historial clinico se crea y administra exclusivamente en la app privada.

No se implementa conversion real en Phase 3.8A.

## 8. Creacion y gestion manual

Usuarios autorizados podran, en una fase futura:

- Crear un lead manual.
- Registrar su origen.
- Actualizar su estado.
- Crear un paciente directamente cuando corresponda.
- Convertir un lead en paciente.
- Cerrar un lead sin conversion.

Todas esas acciones futuras deberan validar:

- Autenticacion.
- Rol.
- `workspaceId`.
- Permisos.
- Auditoria.

## 9. Separacion de datos

Tres niveles conceptuales:

### Lead

Datos minimos de contacto y seguimiento inicial.

### Patient

Datos administrativos de una persona que ya fue registrada como paciente.

### Clinical record

Historial clinico, notas y datos sensibles.

Reglas:

- Un lead no es todavia un paciente.
- Un paciente no implica que toda comunicacion previa sea informacion clinica.
- Los mensajes de WhatsApp o redes no deben copiarse automaticamente.
- Las notas clinicas nunca viven en la landing.
- Marketing no consulta expedientes.
- La app privada no utiliza contenido editorial como fuente clinica.

## 10. Fuera de alcance

Phase 3.8A no implementa:

- Formulario publico futuro.
- Firebase.
- Firestore.
- Cloud Functions.
- Auth.
- App privada.
- Rutas privadas.
- API routes.
- Server Actions.
- Modelos, schemas, interfaces privadas o fixtures.
- Almacenamiento de leads, pacientes o expedientes.
