# Project Scope - Balance Psicologia

Documento para cerrar el alcance aprobado antes de cotizar, antes del diseno/mockup final y antes de la estrategia de desarrollo.

## Datos base

- Cliente: Balance Psicologia
- Contacto principal: Fernanda Regalado
- Proyecto: Landing publica y vision futura de plataforma privada para consultorio psicologico
- Fecha: 2026-06-09
- Fuente principal: `docs/client-discovery.md`
- Dominio deseado para fase actual: `www.balancepsicologia.com`
- Dominio deseado para fase futura: `app.balancepsicologia.com`
- Orden en el flujo: se define despues de discovery y antes de quote, design y development strategy.

## Resumen del proyecto

Balance Psicologia necesita una presencia profesional en internet para presentar sus servicios psicologicos, costos, ubicacion del consultorio, medios de contacto y una opcion sencilla para solicitar o agendar una cita.

El proyecto tambien contempla una vision futura para una app privada en `app.balancepsicologia.com`, orientada a administrar citas, pacientes, seguimiento clinico, notas internas, estados y finanzas del consultorio. Esa app privada no forma parte de la primera entrega, salvo por una preparacion conceptual minima para no bloquear su crecimiento posterior.

## Fases del alcance

### Fase 1 - Landing publica en `www.balancepsicologia.com`

Esta es la fase actual del proyecto y el unico alcance de implementacion inicial.

Objetivo:

- Crear una landing publica profesional, calida, humana, confiable, limpia y tranquila.
- Facilitar que una persona interesada entienda los servicios, revise costos, conozca la ubicacion y solicite informacion o una cita.
- Generar presencia profesional y puntos de contacto claros para leads.

Usuario principal:

- Personas que buscan atencion psicologica en Aguascalientes, Mexico, y necesitan informacion clara antes de contactar o solicitar una cita.

### Fase 2 - App privada en `app.balancepsicologia.com`

Esta fase queda documentada como vision futura y no incluida en la primera entrega.

Objetivo futuro:

- Crear una plataforma privada para administrar el consultorio, citas, pacientes, historial o seguimiento, notas internas, estados y finanzas.

Estado en esta entrega:

- No se implementa login.
- No se implementa base de datos.
- No se implementa panel administrativo completo.
- No se almacenan datos sensibles de pacientes.
- Solo se considera preparacion conceptual minima para que la arquitectura de la fase 1 no cierre la puerta a una fase posterior.

## Alcance incluido

### Fase 1 - Paginas y secciones incluidas

- Inicio / Home con propuesta clara de Balance Psicologia.
- Seccion Nosotros.
- Seccion Servicios.
- Seccion Costos / Pricing / Paquetes, enfocada en presentar informacion comercial de servicios o paquetes.
- Seccion Agenda / solicitud de cita.
- Seccion Testimonios, sujeta a que el cliente proporcione testimonios reales y autorizados.
- Seccion FAQ.
- Seccion Contacto.
- Mapa / ubicacion del consultorio.
- Footer con informacion de contacto y enlaces relevantes.

### Fase 1 - Funcionalidades incluidas

- Formulario de contacto o solicitud de cita.
- Boton de WhatsApp como canal principal de contacto.
- Integracion con correo / SMTP para recibir solicitudes, si el cliente proporciona los datos o proveedor necesario.
- Agenda entendida como solicitud de cita o contacto inicial, sin confirmacion automatica obligatoria.
- Mapa o enlace de ubicacion del consultorio.
- SEO base para presencia inicial en buscadores.
- Medicion basica de visitas y clics importantes mediante Google Analytics, sujeta a contar con cuenta o acceso del cliente.
- Presentacion de imagenes y/o PDFs/documentos cuando el cliente los proporcione y sean necesarios para la landing.

### Fase 1 - Contenido y diseno incluidos

- Apoyo para redactar o mejorar el contenido de la landing con base en el discovery.
- Estructura comercial clara para servicios, costos, contacto y solicitud de cita.
- Direccion visual alineada a una marca profesional, minimalista, sobria, calida, humana, confiable, limpia y tranquila.
- Uso del logo si el cliente lo proporciona.
- Propuesta visual inicial basada en referencias pendientes y en los atributos definidos en discovery.

### Fase 1 - Entregables

- Codigo fuente en este repositorio.
- Implementacion de la landing publica definida en este alcance.
- Configuracion inicial necesaria para la landing.
- Integracion de contenido aprobado por el cliente.
- QA basico y validacion previa a entrega.
- Preparacion conceptual minima para futura separacion entre `www.balancepsicologia.com` y `app.balancepsicologia.com`.

## Alcance excluido

### Excluido de la Fase 1

- Cotizacion, presupuesto o desglose economico.
- Prompt para Stitch o generacion de mockup final en esta etapa.
- App privada funcional en `app.balancepsicologia.com`.
- Login, usuarios, roles o permisos.
- Base de datos.
- Panel administrativo interno.
- Gestion de pacientes.
- Historial clinico o seguimiento del paciente.
- Notas clinicas o notas internas.
- Estados de pacientes o procesos internos.
- Gestion financiera del consultorio.
- Registro de citas pagadas.
- Registro de paquetes pagados.
- Ingresos, egresos, gastos o renta del consultorio.
- Carga, edicion o administracion de archivos desde un panel.
- Almacenamiento de documentos o archivos relacionados con pacientes.
- Pagos en linea, Stripe, Mercado Pago, tienda, membresias o suscripciones.
- CRM o integracion con CRM.
- Meta Pixel.
- Blog.
- Portafolio / proyectos.
- Gestion de proyectos.
- Confirmacion automatica de citas, sincronizacion avanzada con calendario real o sistema interno de citas.
- Produccion profesional de fotografia, video, identidad visual completa, logo nuevo o assets finales, salvo que se acuerde despues.
- Testimonios inventados, genericos o no autorizados.

### Fase 2 futura no incluida en la primera entrega

La siguiente vision queda registrada para continuidad, pero no debe tratarse como implementacion inmediata:

- Plataforma privada en `app.balancepsicologia.com`.
- Autenticacion segura.
- Permisos y roles.
- Base de datos.
- Gestion de citas.
- Creacion y gestion de pacientes.
- Historial o seguimiento del paciente.
- Notas internas o clinicas.
- Estatus de pacientes o procesos.
- Finanzas del consultorio.
- Citas pagadas, paquetes pagados, ingresos, egresos y gastos.
- Manejo seguro de documentos o archivos de pacientes.

Antes de implementar esta fase sera necesario definir alcance tecnico, seguridad, privacidad, permisos, validacion de datos, modelo de datos, responsabilidades operativas y criterios legales aplicables.

## Supuestos

- El discovery en `docs/client-discovery.md` refleja correctamente la necesidad del cliente.
- La primera entrega se enfoca en la landing publica de `www.balancepsicologia.com`.
- `app.balancepsicologia.com` se considera una fase futura y no forma parte del scope inicial.
- La agenda de fase 1 puede iniciar como solicitud de cita o formulario de contacto, sin confirmacion automatica.
- El contenido final de servicios, costos, FAQ, direccion, horarios y datos de contacto sera validado o entregado por el cliente.
- Los testimonios solo se publicaran si el cliente entrega testimonios reales, autorizados y aptos para uso publico.
- Si no hay testimonios disponibles al momento de entrega, la seccion podra quedar preparada, oculta o con un estado editorial pendiente, sin inventar contenido.
- El cliente cuenta con logo, pero colores, tipografias, referencias visuales y material fotografico siguen pendientes.
- La fase privada no debe almacenar informacion sensible hasta contar con medidas de seguridad, privacidad y arquitectura adecuadas.
- La fecha objetivo de entrega esta pendiente y se considera flexible.

## Pendientes de informacion critica

- Correo electronico y telefono / WhatsApp finales para contacto publico.
- Direccion exacta o ubicacion aprobada del consultorio para mapa.
- Costos, paquetes y servicios finales a publicar.
- Textos finales o aprobacion del copy propuesto.
- Logo en formato utilizable.
- Referencias visuales aprobadas.
- Fotografias, imagenes de apoyo, iconos o recursos visuales.
- Testimonios reales y autorizados, si se desea mostrar la seccion en la primera publicacion.
- Cuenta o acceso para Google Analytics.
- Proveedor o datos para envio por correo / SMTP, si aplica.
- Definicion final de como se recibiran las solicitudes de cita: WhatsApp, correo, formulario o combinacion.
- Validacion de disponibilidad y acceso operativo al dominio `www.balancepsicologia.com`.

## Dependencias

- Aprobacion del presente alcance antes de cotizar o avanzar a diseno.
- Contenido final aprobado por el cliente.
- Material visual disponible o autorizacion para trabajar con placeholders.
- Acceso o instrucciones para dominio y hosting cuando llegue la etapa de publicacion.
- Cuenta de Google Analytics o aprobacion para configurarla despues.
- Datos de contacto publicos y direccion aprobada.
- Testimonios reales y autorizados para publicar la seccion correspondiente.
- Feedback y aprobaciones del cliente dentro de tiempos acordados.

## Riesgos y notas operativas

- La falta de contenido final puede retrasar la publicacion o requerir trabajar con textos preliminares sujetos a aprobacion.
- La falta de testimonios reales puede impedir publicar la seccion de testimonios en la primera version visible.
- La falta de referencias visuales puede requerir una propuesta inicial basada solamente en los atributos de marca definidos en discovery.
- La app privada involucra informacion sensible de salud mental; no debe implementarse sin una etapa especifica de seguridad, privacidad y definicion tecnica.
- La integracion de agenda puede mantenerse como solicitud de cita en fase 1 para evitar complejidad prematura.
- La integracion de pagos no forma parte de la primera etapa.

## Criterios de aceptacion

### Fase 1 - Landing publica

- La landing esta disponible para representar a Balance Psicologia en `www.balancepsicologia.com` o en un entorno de revision previo a publicacion.
- La pagina comunica de forma clara servicios, costos, ubicacion, contacto y solicitud de cita.
- El contacto principal por WhatsApp esta visible y funcional.
- El formulario de contacto o solicitud de cita funciona segun el canal definido.
- El mapa o enlace de ubicacion dirige correctamente al consultorio aprobado.
- La seccion de testimonios solo muestra testimonios reales y autorizados, o queda preparada/oculta si el cliente no los entrega.
- La FAQ y el footer incluyen informacion aprobada.
- La medicion basica con Google Analytics queda instalada o documentada como pendiente si faltan accesos.
- El sitio mantiene una apariencia profesional, calida, humana, confiable, limpia y tranquila.
- No se implementa ni simula una app privada funcional dentro de la fase 1.
- No se almacenan datos sensibles de pacientes.
- El build, la validacion basica y la revision final no presentan bloqueadores criticos.

### Fase 2 - Vision futura

- La vision de `app.balancepsicologia.com` queda documentada como fase futura.
- La fase futura no se cotiza ni se trata como implementacion inmediata en este documento.
- Cualquier avance posterior de app privada requiere nuevo alcance, criterios de seguridad y aprobacion independiente.

## Aprobacion

- Estado: Pendiente de aprobacion
- Fecha de aprobacion: Pendiente
- Aprobado por: Pendiente
