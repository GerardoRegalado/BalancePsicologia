# Lineamientos conceptuales para estructura privada futura

Documento estrategico para la subfase 2.3 de Version 2.x. Define como pensar una futura estructura privada para `app.balancepsicologia.com` sin crear archivos reales de codigo, carpetas funcionales, rutas privadas, modelos, schemas, types, fixtures ni integraciones.

Fase 2.x sigue siendo documental. Este documento no autoriza implementar app privada, login, Firebase, Gemini, base de datos, dependencias ni cambios en la landing publica.

## 1. Proposito

Este documento establece lineamientos conceptuales para una futura app privada de Balance Psicologia. Su objetivo es evitar que la estructura publica actual se mezcle con responsabilidades privadas y dejar una direccion clara para una fase posterior.

No es una especificacion de implementacion inmediata. Cualquier estructura real debe esperar un nuevo scope aprobado, decisiones de arquitectura, criterios de seguridad y privacidad, y una fase privada formal.

## 2. Principio general

La futura app privada debe pensarse bajo el principio:

`single-client UI, multi-tenant-ready backend`

Esto significa que la interfaz inicial podria estar orientada a una sola usuaria o a un solo consultorio, pero la arquitectura futura no debe quedar amarrada a una sola psicologa hardcodeada.

Conceptualmente debe poder crecer hacia:

- Un consultorio.
- Varios usuarios internos.
- Varios roles.
- Varios profesionales.
- Pacientes separados por workspace.
- Notas protegidas por permisos.

El backend futuro debe considerar desde el diseno una unidad de separacion como `workspace` o `clinic`, aunque la primera version privada real solo tenga un consultorio activo.

## 3. Separacion conceptual de carpetas futuras

Una fase privada posterior podria considerar una separacion similar a:

- `app/(public)` o superficie publica.
- `app/(private)` o superficie privada.
- `components/private`.
- `components/public`.
- `services/firebase`.
- `services/ai`.
- `lib/auth`.
- `lib/permissions`.
- `lib/audit`.
- `types/private`.
- `tests/private`.

Estos nombres son conceptuales y no deben crearse en Fase 2.x.

La decision final de carpetas debe tomarse cuando exista scope de app privada, proveedor tecnico aprobado y claridad sobre dominios, permisos, datos sensibles y flujos operativos.

## 4. Entidades conceptuales futuras

Las siguientes entidades sirven como lenguaje comun para discutir la app privada futura. No deben convertirse todavia en interfaces TypeScript, modelos, schemas, fixtures ni mocks.

- `workspace` / `clinic`: unidad principal de separacion operativa y de permisos. Representa el consultorio o espacio de trabajo.
- `users`: identidades autenticadas que podrian acceder a la app privada.
- `memberships`: relacion entre un usuario y un workspace, incluyendo estado de acceso.
- `roles`: permisos o capacidades asignadas dentro de un workspace.
- `leads`: solicitudes o contactos comerciales/administrativos previos al registro como paciente.
- `leadActivities`: eventos o seguimientos conceptuales de un lead, si el diseno futuro lo justifica.
- `patients`: registros de pacientes asociados a un workspace.
- `sessionNotes`: notas de sesion vinculadas a pacientes y protegidas por permisos.
- `aiAssistances`: borradores, resumenes o apoyos generados por IA para revision profesional.
- `auditLogs`: registro de accesos, cambios y eventos relevantes de seguridad.
- `settings`: configuraciones del consultorio, preferencias operativas y parametros internos.

Estas entidades deben mantenerse como conceptos hasta que exista una fase privada aprobada con decisiones de seguridad, privacidad y modelado de datos.

Los leads deben tener origen, estado y relacion auditable con pacientes cuando exista conversion. La conversion lead-paciente no debe cambiar el tipo del lead ni copiar mensajes libres al expediente clinico: debe crear un paciente vinculado mediante accion humana explicita y auditoria.

## 5. Reglas conceptuales de dependencia

En una fase futura:

- La landing publica no debe importar servicios privados.
- Los componentes publicos no deben conocer pacientes, notas ni usuarios internos.
- La app privada no debe usar contenido editorial de marketing como fuente de datos clinicos.
- La app privada puede recibir leads desde una capa segura, pero no debe tratar solicitudes publicas como expedientes clinicos.
- Firebase/adapters deben quedar detras de servicios o funciones controladas.
- IA debe pasar por capa segura, no por componentes de UI.
- Permisos deben validarse fuera del frontend visual.

La separacion debe impedir que decisiones de marketing, copy publico o placeholders editoriales se conviertan en fuente de verdad para workflows clinicos o administrativos.

## 6. Datos sensibles

Ninguna estructura futura debe guardar datos clinicos en:

- Codigo.
- Config publica.
- Content publico.
- Logs.
- Analytics.
- Screenshots.
- Mocks realistas con datos reales.

Cualquier dato de desarrollo debe ser ficticio y claramente marcado.

Los ejemplos deben evitar nombres, historias, notas o combinaciones que puedan parecer pacientes reales. La documentacion publica no debe incluir expedientes, sesiones, diagnosticos, notas clinicas ni datos identificables.

## 7. Que NO se debe hacer todavia

En esta subfase no se debe:

- Crear `app/(private)`.
- Crear rutas privadas.
- Crear componentes privados.
- Crear modelos.
- Crear schemas.
- Crear Firebase config.
- Crear Firestore rules.
- Crear Cloud Functions.
- Crear Gemini integration.
- Crear types privados.
- Crear fixtures de pacientes.
- Crear mocks clinicos.
- Crear tests privados.
- Agregar dependencias.

Tampoco deben crearse adapters reales, servicios conectados, middleware de auth, API routes, variables `.env`, dashboards, formularios internos, storage/uploads, CRM, pagos ni analytics nuevos.

## 8. Criterios de aceptacion

- La estructura futura queda documentada de forma conceptual.
- No se crean carpetas funcionales de app privada.
- No se crean rutas privadas.
- No se crean modelos, schemas ni types reales.
- No se agrega Firebase.
- No se agrega Gemini.
- No se agrega auth.
- No se agrega base de datos.
- No se modifica la landing publica.
- El documento queda alineado con `public-private-boundary.md` y `private-app-limits.md`.
