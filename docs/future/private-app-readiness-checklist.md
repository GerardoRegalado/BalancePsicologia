# Checklist de preparacion para app privada futura

Documento estrategico para la subfase 2.5 de Version 2.x. Define criterios minimos antes de construir o usar cualquier funcionalidad privada real en `app.balancepsicologia.com`, incluyendo pacientes, citas internas, notas clinicas, expedientes, IA real o workflows administrativos.

Fase 2.x sigue siendo documental. Este checklist no autoriza implementar app privada, rutas privadas, login, Firebase, Gemini, base de datos, dependencias ni cambios en la landing publica.

## 1. Proposito

Este checklist establece el minimo de decisiones, aprobaciones y criterios que deben estar listos antes de iniciar una futura Fase 3 o fase privada equivalente.

No debe usarse como permiso para guardar datos reales. Su funcion es ayudar a confirmar que seguridad, privacidad, arquitectura, operacion, IA, costos y alcance estan definidos antes de cualquier implementacion real.

## 2. Como usar el checklist

Cada punto debe marcarse con uno de estos estados:

- Pendiente.
- En revision.
- Aprobado.
- No aplica.

Ningun dato real de pacientes, notas, sesiones o IA clinica debe usarse hasta que los puntos bloqueantes esten aprobados. Si un punto se marca como `No aplica`, debe existir una justificacion documentada.

## 3. Checklist de alcance y aprobacion

- [ ] Scope de Fase 3 aprobado.
- [ ] Cotizacion/estimacion aprobada.
- [ ] Responsables del proyecto definidos.
- [ ] Funcionalidades privadas priorizadas.
- [ ] Exclusiones documentadas.
- [ ] Criterios de aceptacion definidos.
- [ ] Ambientes definidos.
- [ ] Decision de proveedor aprobada.

## 4. Checklist legal y privacidad

Estos puntos no son asesoria legal final. Deben validarse con asesoria legal/profesional antes de produccion.

- [ ] Aviso de privacidad validado.
- [ ] Consentimiento explicito definido.
- [ ] Responsable(s) de tratamiento definidos.
- [ ] Finalidades de tratamiento documentadas.
- [ ] Politica de retencion/borrado definida.
- [ ] Politica de exportacion definida.
- [ ] Procedimiento de eliminacion de datos definido.
- [ ] Procedimiento de respuesta a incidentes definido.
- [ ] Reglas para uso de datos de prueba definidas.
- [ ] Prohibicion de datos reales en staging definida.

## 5. Checklist de arquitectura

- [ ] Decision Firebase/otro proveedor aprobada.
- [ ] Modelo `workspaceId` definido.
- [ ] Estrategia multiusuario-lite definida.
- [ ] Roles iniciales definidos.
- [ ] Matriz de permisos definida.
- [ ] Modelo conceptual de pacientes definido.
- [ ] Modelo conceptual de notas definido.
- [ ] Modelo conceptual de auditoria definido.
- [ ] Separacion publica/privada definida.
- [ ] Estrategia de ambientes production/preview/staging definida.
- [ ] Estrategia de backups definida.

## 6. Checklist de seguridad

- [ ] Auth definido.
- [ ] Reglas de acceso definidas.
- [ ] Firestore Rules o equivalente disenadas.
- [ ] App Check o equivalente evaluado.
- [ ] Reglas para sesiones y recuperacion de cuenta definidas.
- [ ] Desactivacion de usuarios definida.
- [ ] Manejo de secretos definido.
- [ ] Validaciones server-side definidas.
- [ ] Rate limits definidos.
- [ ] Monitoreo y alertas definidos.

## 7. Checklist de datos clinicos

- [ ] Datos minimos a capturar definidos.
- [ ] Datos que NO se capturan definidos.
- [ ] Campos sensibles identificados.
- [ ] Politica de minimizacion definida.
- [ ] Reglas para notas clinicas definidas.
- [ ] Reglas para correccion/anulacion de notas definidas.
- [ ] Reglas para exportacion/borrado de expediente definidas.
- [ ] Datos de prueba ficticios definidos.
- [ ] Prohibicion de datos clinicos en logs, analytics, screenshots y docs definida.

## 8. Checklist de IA supervisada

- [ ] Casos de uso de IA aprobados.
- [ ] Lenguaje de producto aprobado.
- [ ] Prohibicion de diagnostico automatico documentada.
- [ ] Flujo de revision humana definido.
- [ ] Outputs marcados como borrador revisable.
- [ ] Versionado de prompts/modelos definido.
- [ ] Capa segura para IA definida.
- [ ] Minimizacion de datos enviados al modelo definida.
- [ ] Limites de uso/costo definidos.
- [ ] Registro de aprobacion/edicion/descarte definido.

## 9. Checklist operativo

- [ ] Quien puede crear pacientes definido.
- [ ] Quien puede ver pacientes definido.
- [ ] Quien puede crear/editar notas definido.
- [ ] Quien puede aprobar outputs IA definido.
- [ ] Quien puede borrar o desactivar informacion definido.
- [ ] Proceso para cuenta comprometida definido.
- [ ] Proceso de baja de usuario definido.
- [ ] Proceso para errores humanos definido.
- [ ] Proceso para soporte definido.
- [ ] Revision de auditoria definida.

## 10. Checklist de finanzas y administracion interna

- [ ] Alcance financiero definido.
- [ ] Que informacion financiera se capturara definido.
- [ ] Que informacion financiera NO se capturara definido.
- [ ] Reglas para cobros, pagos o saldos definidas, si aplican.
- [ ] Reglas para recibos, comprobantes o facturacion definidas, si aplican.
- [ ] Permisos para ver informacion financiera definidos.
- [ ] Permisos para editar informacion financiera definidos.
- [ ] Relacion entre citas, pagos y reportes definida, si aplica.
- [ ] Politica para correcciones o cancelaciones administrativas definida.
- [ ] Confirmacion de que pagos online quedan fuera hasta aprobacion explicita.

## 11. Checklist de costos y monitoreo

- [ ] Presupuesto mensual esperado definido.
- [ ] Budget alerts configuradas antes de produccion.
- [ ] Cuotas de IA definidas.
- [ ] Limites por usuario/workspace definidos.
- [ ] Monitoreo de uso definido.
- [ ] Procedimiento ante abuso o loops definido.

## 12. Bloqueantes absolutos

Estos puntos bloquean cualquier implementacion con datos reales si no estan aprobados:

- Aviso de privacidad.
- Consentimiento.
- Auth.
- Roles/permisos.
- `workspaceId`.
- Reglas de acceso.
- Auditoria minima.
- Politica de retencion/borrado.
- Prohibicion de datos reales en staging.
- IA solo como borrador revisable.
- Capa segura para IA.
- Budget alerts.
- Alcance financiero definido si la app manejara cobros, pagos, saldos, recibos o reportes administrativos.

Si cualquiera de estos puntos esta pendiente o en revision, la futura app privada no debe procesar pacientes reales, notas clinicas, sesiones reales, expedientes, IA clinica real ni workflows administrativos reales.

## 13. Criterios de aceptacion

- El checklist queda documentado.
- La Fase 2.5 sigue siendo documental.
- No se implementa app privada.
- No se agregan rutas.
- No se agrega login.
- No se agrega Firebase.
- No se agrega Gemini.
- No se agrega base de datos.
- No se modifican landing publica ni produccion.
- El checklist queda alineado con los documentos previos en `docs/future/`.
