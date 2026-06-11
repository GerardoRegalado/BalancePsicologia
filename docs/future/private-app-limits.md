# Limites para app privada futura

Documento estrategico para la subfase 2.2 de Version 2.x. Su objetivo es registrar limites tecnicos, legales, operativos, de privacidad, IA y datos antes de implementar cualquier app privada en `app.balancepsicologia.com`.

Esta subfase es unicamente documental. No implementa app privada, rutas privadas, login, Firebase, Gemini, base de datos, dependencias ni cambios en la landing publica.

## 1. Estado actual

`app.balancepsicologia.com` no existe como app funcional en Fase 2.x.

Version 2.x se mantiene como preparacion documental y estrategica para que la landing publica no bloquee una posible fase privada posterior. No incluye construccion de panel, autenticacion, usuarios, pacientes, notas clinicas, agenda interna, IA real ni almacenamiento de datos sensibles.

Cualquier avance real de app privada requiere un nuevo alcance aprobado, criterios de seguridad y privacidad, estimacion independiente y decision explicita sobre arquitectura e infraestructura.

## 2. Limites tecnicos

Antes de implementar una app privada debe definirse, como minimo:

- Arquitectura general.
- Proveedor de auth.
- Modelo de datos.
- Reglas de acceso.
- Estrategia de auditoria.
- Manejo de errores.
- Backups.
- Monitoreo.
- Limites de uso.
- Ambientes separados.
- Estrategia para staging/production.

No deben agregarse Firebase, Firestore, Gemini, Cloud Functions ni dependencias relacionadas hasta que exista scope aprobado para Fase 3 o una fase privada equivalente.

Tampoco deben crearse configuraciones, SDKs, reglas, servicios, variables `.env`, API routes, middleware de auth ni adapters privados como preparacion adelantada. La definicion tecnica debe resolverse primero en documentos de alcance y arquitectura, y despues implementarse en una fase aprobada.

## 3. Limites legales y de privacidad

Cualquier manejo de pacientes, notas clinicas o datos de sesiones puede implicar datos personales sensibles. Antes de implementar una app privada se deben definir y validar criterios legales, de privacidad y operacion responsable.

Estos puntos no son asesoria legal definitiva. Deben tratarse como criterios a validar con asesoria legal/profesional antes de produccion:

- Aviso de privacidad robusto.
- Consentimiento explicito.
- Definicion de responsables de tratamiento.
- Politica de retencion y borrado.
- Reglas para exportacion de datos.
- Reglas para eliminacion de datos.
- Control de accesos.
- Bitacora o auditoria.
- Minimizacion de datos.

La app privada no debe almacenar informacion sensible hasta que existan decisiones aprobadas sobre que datos se capturan, para que se usan, quien puede verlos, cuanto tiempo se conservan y como se eliminan o exportan cuando corresponda.

## 4. Limites operativos

Antes de usar la app privada en operacion real se debe definir:

- Quien puede entrar.
- Que roles existen.
- Quien puede crear pacientes.
- Quien puede leer notas.
- Quien puede editar notas.
- Quien puede borrar informacion.
- Como se corrigen errores.
- Como se maneja una cuenta comprometida.
- Como se desactiva un usuario.
- Como se recupera acceso.
- Como se revisan logs.

Estas reglas deben quedar claras antes de construir flujos internos. La operacion no debe depender de convenciones informales, botones ocultos o confianza en que el frontend impide acciones no autorizadas.

## 5. Limites para IA

Cualquier IA futura debe plantearse como asistente supervisado.

Queda prohibido tratar la IA como:

- Diagnostico automatico.
- Diagnostico definitivo.
- Reemplazo del criterio profesional.
- Recomendador autonomo de tratamiento.
- Autoridad clinica.

La IA solo puede contemplarse como:

- Resumen asistido.
- Organizacion de informacion.
- Borrador revisable.
- Hipotesis a explorar.
- Banderas para revision profesional.

Todo output de IA debe ser editable, descartable y aprobado por una profesional antes de considerarse parte de una nota o expediente.

La IA no debe recibir mas informacion de la necesaria para la tarea concreta. Cualquier integracion futura debe minimizar datos, evitar logs con contenido clinico y operar mediante una capa segura, no desde el frontend directamente hacia un proveedor de IA.

## 6. Limites de datos

No deben guardarse datos clinicos en:

- Codigo.
- Variables de entorno.
- Logs.
- Analytics.
- Archivos publicos.
- `content/`.
- `config/`.
- Screenshots.
- Fixtures o mocks realistas con datos reales.
- Documentacion publica.

Cualquier dato de prueba debe ser ficticio y claramente no real.

Los ejemplos, mocks o capturas usados durante desarrollo no deben parecer expedientes reales, sesiones reales ni pacientes identificables. Si una futura fase necesita datos semilla, deben generarse como datos artificiales y documentarse como tales.

## 7. Que queda fuera de Fase 2.x

Sigue fuera de Fase 2.x:

- App privada funcional.
- Login.
- Usuarios reales.
- Roles reales.
- Pacientes.
- Notas clinicas.
- Agenda interna.
- Expedientes.
- IA real.
- Firebase real.
- Gemini real.
- Cloud Functions.
- Dashboard.
- Pagos.
- Reportes.
- Subida de archivos.
- APIs privadas.

Estos elementos solo pueden entrar en una fase posterior con scope, arquitectura, seguridad, privacidad, criterios de aceptacion y aprobacion independiente.

## 8. Criterios de aceptacion

- Los limites de app privada quedan documentados.
- La Fase 2.2 sigue siendo documental.
- No se implementa app privada.
- No se agregan rutas.
- No se agrega login.
- No se agrega Firebase.
- No se agrega Gemini.
- No se agrega base de datos.
- No se modifican landing publica ni produccion.
- Los limites quedan alineados con `docs/future/public-private-boundary.md`.
