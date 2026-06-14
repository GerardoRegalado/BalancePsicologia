# Valores publicos para Phase 3

Formulario manual para capturar valores publicos exactos antes de trasladarlos a `content/` o `config/`.

Este documento no integra datos en la landing. Ningun valor debe implementarse mientras su estado no sea `Aprobado`.

## Estado del documento

| Campo | Valor |
| --- | --- |
| Responsable de captura | Gerardo Regalado |
| Responsable de validacion final | Fernanda Regalado |
| Estado general | En revision |
| Fecha de ultima actualizacion | 2026-06-13 |

## WhatsApp

| Campo | Valor |
| --- | --- |
| Numero nacional | 449 555 6035 |
| Codigo de pais | +52 |
| Numero internacional sin espacios | 524495556035 |
| Numero visible en landing | 449 555 6035 |
| Mensaje prellenado aprobado | PENDIENTE |
| Estado de validacion | Aprobado |

URL aprobada para Phase 3.4: `https://wa.me/524495556035`.

Nota: Phase 3.4 integra el enlace `wa.me` sin mensaje prellenado, sin parametros `text`, UTM ni tracking. El mensaje prellenado sigue `PENDIENTE`.

Superficies integradas en Phase 3.4:

- CTA del header.
- CTA principal del hero.
- Menu mobile.
- Seccion de contacto.
- Footer.

Nota Phase 3.8A: WhatsApp queda consolidado como canal principal provisional durante la etapa actual de la landing. Hero, header, menu mobile y seccion de agenda usan la misma URL `https://wa.me/524495556035`. El formulario visual deshabilitado fue retirado para no simular funcionalidad; esto no cancela un formulario publico futuro, que queda fuera de Phase 3 y debera conectarse a un flujo privado seguro de leads. La landing de Phase 3 no recopila, almacena ni envia datos. No existe agenda automatica, confirmacion inmediata ni mensaje prellenado. WhatsApp y redes permaneceran como canales alternativos, y los contactos externos podran registrarse manualmente en una fase privada futura.

## Redes sociales

### Facebook

| Campo | Valor |
| --- | --- |
| Nombre publico o usuario | Psic. Fernanda Regalado - Terapia Cognitivo Conductual |
| URL oficial | https://www.facebook.com/people/Psic-Fernanda-Regalado-Terapia-Cognitivo-Conductual/61590600875459/ |
| Estado de validacion | Aprobado |

### Instagram

| Campo | Valor |
| --- | --- |
| Nombre publico o usuario | @psic.fernandaregalado |
| URL oficial | https://www.instagram.com/psic.fernandaregalado/ |
| Estado de validacion | Aprobado |

### Otras redes

| Red | Nombre publico o usuario | URL oficial | Estado de validacion |
| --- | --- | --- | --- |
| No aplica | No aplica | No aplica | No aplica |

Nota Phase 3.5A: Facebook e Instagram se mantienen en seccion de contacto, footer y navegacion mobile. Se retiraron del header desktop por decision visual del cliente y no aparecen en el header en ningun breakpoint. Solo aparecen redes aprobadas. LinkedIn no se integra. Las URLs se mantienen canonicas y sin parametros de tracking. No se habilita correo publico. La revision final de enlaces sociales y metadata queda para Phase 3.9.

## Ubicacion

| Campo | Valor |
| --- | --- |
| Nombre publico del consultorio | Clínica MIND |
| Calle y numero | Jacaranda 552 |
| Colonia | Las Arboledas |
| Codigo postal | 20020 |
| Ciudad | Aguascalientes |
| Estado | Aguascalientes |
| Pais | México |
| Direccion visible completa | Jacaranda 552, Las Arboledas, 20020 Aguascalientes, Ags. |
| URL oficial de Google Maps | https://maps.app.goo.gl/yeoxjHcLFUmbPkCm7 |
| Texto breve para llegar | PENDIENTE |
| Estado de validacion | Aprobado para publicacion |

Nota: La direccion visible completa y el enlace de Google Maps se integraron primero en el footer durante Phase 3.5A. En Phase 3.6 tambien se integran en la tarjeta de contacto y en la seccion de ubicacion mediante enlace externo a Google Maps. Phase 3.6A rechaza visualmente la vista abstracta anterior y la sustituye por Google Maps Embed API en modo `place`, dependiente de `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY`. El cliente confirmo que Google Maps Embed API quedo configurada, que el mapa real aparece correctamente en la landing, que el fallback continua disponible para entornos sin variable y que la correccion visual de contraste fue aceptada; Phase 3.6A queda cerrada. No se usa Maps JavaScript API, geolocalizacion ni almacenamiento de ubicaciones de visitantes. El texto breve para llegar sigue pendiente y SEO local/metadata quedan para Phase 3.9.

## Costos y sesiones

| Servicio o modalidad | Costo publico | Duracion | Condiciones | Estado |
| --- | --- | --- | --- | --- |
| Sesion individual | $450 MXN | PENDIENTE | PENDIENTE | Aprobado para publicacion |
| Sesion de pareja | $700 MXN | PENDIENTE | PENDIENTE | Aprobado para publicacion |
| Sesion familiar | $900 MXN | PENDIENTE | PENDIENTE | Aprobado para publicacion |

Nota: El cliente aprobo la integracion de Terapia individual `$450 MXN`, Terapia de pareja `$700 MXN` y Terapia familiar `$900 MXN`. Los costos y nombres de modalidades estan aprobados e integrados en Phase 3.7. Las tres modalidades tienen jerarquia equivalente, ninguna modalidad esta destacada y no se publicaron paquetes, promociones ni descuentos. La duracion y condiciones publicas siguen pendientes. Phase 3.7 queda cerrada. La revision final de CTAs se atiende en Phase 3.8 y la revision SEO final queda para Phase 3.9.

## Datos publicos adicionales

| Campo | Valor |
| --- | --- |
| Correo publico | PENDIENTE |
| Horario de atencion | PENDIENTE |
| Modalidad presencial | PENDIENTE |
| Modalidad en linea | PENDIENTE |
| Otra informacion destinada a la landing | PENDIENTE |

## Checklist de aprobacion

- [x] WhatsApp aprobado.
- [x] Redes sociales aprobadas.
- [x] Ubicacion visible completa aprobada.
- [x] Enlace de mapa aprobado.
- [x] Costos aprobados.
- [x] Servicios/modalidades aprobados.
- [ ] Correo publico aprobado.
- [ ] Horarios aprobados.
- [ ] Mensaje prellenado de WhatsApp aprobado.
- [ ] Aptitud general para publicacion confirmada.

## Reglas del documento

- Usar `PENDIENTE` para valores todavia no capturados.
- Usar `No aplica` cuando corresponda.
- Ningun dato debe integrarse mientras su estado no sea `Aprobado`.
- Solo se deben escribir aqui datos destinados a publicacion.
- El repositorio actualmente es publico.
- No incluir datos clinicos.
- No incluir datos de pacientes.
- No incluir credenciales ni secretos.
- No incluir telefonos, direcciones o perfiles que no hayan sido aprobados para exposicion publica.
- No inventar valores concretos.
