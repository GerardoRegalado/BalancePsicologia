# Frontera publica, staging y app privada futura

Documento estrategico para la subfase 2.1 de Version 2.x. Su objetivo es dejar clara la separacion conceptual entre la superficie publica, el entorno de revision y la futura app privada de Balance Psicologia.

Esta subfase es unicamente documental. No autoriza implementar app privada, login, base de datos, Firebase, Gemini, rutas privadas ni integraciones nuevas.

## 1. Superficie publica

`www.balancepsicologia.com` es la superficie publica del consultorio.

Debe cubrir unicamente:

- Landing publica.
- Informacion general del consultorio.
- Servicios visibles.
- Costos, paquetes visibles o placeholders publicos.
- Contacto publico.
- Ubicacion publica.
- SEO y presencia profesional.
- Solicitud visual o canal publico cuando exista.
- En una fase futura aprobada, formulario minimo de solicitud de contacto.
- Aviso de privacidad asociado al formulario publico.
- Envio de solicitud a un endpoint seguro.

La superficie publica debe funcionar de forma independiente. No debe depender de una app privada, de modelos internos, de reglas de permisos, de datos clinicos ni de proveedores pensados para una fase privada futura.

La landing publica puede facilitar contacto o solicitud inicial por canales aprobados, pero no debe operar como sistema clinico, panel interno, gestor de pacientes ni expediente digital.

Si se implementa un formulario publico futuro, ese formulario no administrara leads, no mostrara pacientes, no accedera a expedientes y no escribira directamente en colecciones privadas. Toda gestion de solicitudes, seguimiento, conversion y auditoria ocurrira en la app privada o en una capa segura autorizada.

## 2. Staging

`staging.balancepsicologia.com` es un entorno de revision previo a produccion.

Debe usarse para:

- Revisar cambios de landing antes de promoverlos a produccion.
- Validar contenido, documentacion, responsive, accesibilidad basica y comportamiento visual.
- Compartir avances con cliente o equipo antes de publicacion final.

No debe usarse como app privada real.

Restricciones de staging:

- No debe almacenar datos reales de pacientes.
- No debe usarse para sesiones reales.
- No debe contener notas clinicas reales.
- No debe operar como sistema administrativo del consultorio.
- No debe usarse para validar workflows privados con informacion sensible.

Staging puede estar protegido por Vercel Authentication, share links temporales u otro mecanismo de revision, siempre que eso no se confunda con seguridad clinica ni con una app privada implementada.

## 3. App privada futura

`app.balancepsicologia.com` sera una superficie separada y futura.

No esta implementada en Fase 2.x. Cualquier avance real requiere nuevo scope, nueva aprobacion, criterios de seguridad, privacidad y una definicion tecnica especifica.

En una fase posterior, la app privada podria incluir:

- Login.
- Usuarios internos.
- Roles.
- Bandeja de leads.
- Seguimiento de leads.
- Creacion manual de leads.
- Conversion auditable de lead a paciente.
- Pacientes.
- Notas de sesion.
- Auditoria.
- Asistencia con IA supervisada.
- Configuracion de consultorio.

Esta subfase no implementa ninguno de esos elementos. Solo documenta la frontera para evitar que la landing publica o staging acumulen responsabilidades privadas antes de tiempo.

## 4. Reglas de separacion

- La landing publica no debe importar logica privada.
- La landing publica no debe depender de Firebase.
- La landing publica no debe consultar datos clinicos.
- La landing publica no debe escribir directamente en colecciones privadas.
- La landing publica no debe administrar leads ni pacientes.
- La landing publica no debe exponer `/admin`.
- La landing publica no debe enlazar `app.balancepsicologia.com` hasta que exista una app privada real aprobada.
- Los workflows internos no deben vivir en componentes publicos.
- Los datos sensibles nunca deben aparecer en `content/`, `config/` o componentes de marketing.
- Los placeholders publicos deben seguir siendo editoriales, no tecnicos.
- La app privada futura debe tener su propio scope antes de implementarse.

Estas reglas aplican tanto al codigo como a la documentacion, navegacion, metadata, copy, CTAs, formularios, pruebas y configuraciones futuras.

## 5. Relacion con dominios

La intencion conceptual por dominio es:

- `www.balancepsicologia.com` = produccion publica.
- `staging.balancepsicologia.com` = revision previa a produccion.
- `app.balancepsicologia.com` = futura app privada, no implementada.
- `/admin` = ruta heredada/template/futura, no publica y no desarrollada en Fase 2.x.

Ningun dominio o ruta debe usarse para simular una superficie distinta sin seguridad, alcance y aprobacion adecuados.

## 6. Riesgos de mezclar superficies

Mezclar superficies puede provocar riesgos tecnicos, legales, comerciales y de privacidad, especialmente por tratarse de servicios de salud mental.

Riesgos principales:

- Exponer datos clinicos en landing publica.
- Mezclar metadata publica con flujos internos.
- Enlazar rutas privadas antes de tener seguridad real.
- Usar staging como entorno clinico real.
- Agregar Firebase/Auth sin scope.
- Crear falsas expectativas de app privada ya disponible.
- Indexar contenido privado por error.

Tambien puede aumentar deuda tecnica al poner workflows internos en componentes de marketing, duplicar decisiones de negocio en capas publicas o convertir placeholders editoriales en promesas funcionales.

## 7. Criterios de aceptacion

- La separacion entre `www`, `staging` y `app` queda clara.
- La Fase 2.1 sigue siendo documental.
- No se implementan rutas privadas.
- No se implementa login.
- No se implementa base de datos.
- No se implementa Firebase.
- No se implementa Gemini.
- No se modifica la landing publica.
- No se modifica produccion.
