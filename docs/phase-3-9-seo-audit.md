# Auditoria SEO - Phase 3.9

Fecha: 2026-06-13

Phase 3.9 cierra la configuracion tecnica publica de SEO, metadata, favicon, Open Graph, robots, sitemap y datos estructurados locales para la landing publica.

No se hizo deploy, no se modifico Vercel y no se promovio ninguna rama.

## Canonical

- Canonical de produccion: `https://www.balancepsicologia.com/`.
- Fuente central: `siteConfig.canonicalUrl`.
- La canonical no depende de `VERCEL_URL`, previews, staging ni localhost.
- Preview, development y staging mantienen canonical de produccion, pero resuelven `noindex,nofollow`.

## Title y description

- Default title: `Balance Psicología | Terapia en Aguascalientes`.
- Title template: `%s | Balance Psicología`.
- Description: `Terapia psicológica individual, de pareja y familiar en Aguascalientes. Conoce costos, ubicación y solicita información con Balance Psicología.`

Keywords configuradas:

- `psicología en Aguascalientes`.
- `terapia psicológica en Aguascalientes`.
- `terapia individual`.
- `terapia de pareja`.
- `terapia familiar`.
- `Balance Psicología`.

## Open Graph y Twitter

- Asset final: `public/media/balance-psicologia-og.png`.
- Ruta publica: `/media/balance-psicologia-og.png`.
- Dimensiones: 1200x630.
- Formato: PNG.
- Twitter usa el mismo asset mediante `summary_large_image`.
- `public/media/og-default.svg` fue eliminado por ser asset del template.

La aprobacion visual final del OG queda reservada para Phase 3.10.

## Favicon

- Fuente usada: `public/brand/balance-favicon-transparent-candidate.png`.
- Archivos integrados:
  - `app/icon.png`.
  - `app/apple-icon.png`.
- `app/favicon.ico` fue retirado por corresponder al favicon heredado/template.

El favicon queda integrado tecnicamente en Phase 3.9 y pendiente de validacion final contextual en Phase 3.10.

## Robots

Produccion indexable:

- `allow: /`.
- `sitemap: https://www.balancepsicologia.com/sitemap.xml`.
- `host: https://www.balancepsicologia.com`.

Development, preview y staging:

- No incluyen sitemap ni host de produccion.
- No bloquean `/` con `Disallow: /`.
- Permiten rastreo suficiente para que los buscadores lean `noindex,nofollow` desde metadata.

La proteccion de staging no depende solamente de `robots.txt`.

## Sitemap

Produccion indexable:

- Incluye solamente `https://www.balancepsicologia.com/`.
- `changeFrequency: monthly`.
- `priority: 1`.

Entornos no indexables:

- Sitemap vacio.

No incluye anchors, staging, previews, `/admin`, app privada, redes ni Google Maps.

## Politica de indexacion

La funcion `resolveIndexingPolicy` devuelve indexable solo cuando:

- El entorno efectivo es `production`.
- El hostname configurado es `www.balancepsicologia.com`.
- No es staging.
- No es localhost.
- No termina en `.vercel.app`.

Fallback seguro:

- Entorno desconocido: `noindex`.
- URL invalida: `noindex`.
- Variables ausentes: `noindex`.

## JSON-LD local

Tipo: `ProfessionalService`.

Incluye solamente datos aprobados:

- Nombre: `Balance Psicología`.
- URL: `https://www.balancepsicologia.com/`.
- Descripcion publica aprobada.
- Telefono internacional: `+524495556035`.
- Direccion postal aprobada.
- Google Maps aprobado.
- Logo horizontal aprobado.
- Imagen OG final.
- Facebook e Instagram canonicos.
- Area servida: `Aguascalientes`.

No incluye:

- Email.
- Horarios.
- Coordenadas.
- Ratings.
- Reviews.
- `aggregateRating`.
- `medicalSpecialty`.
- Fundador.
- Empleados.
- Precio.
- Monedas.

## Enlaces auditados

- WhatsApp: `https://wa.me/524495556035`.
- Facebook: `https://www.facebook.com/people/Psic-Fernanda-Regalado-Terapia-Cognitivo-Conductual/61590600875459/`.
- Instagram: `https://www.instagram.com/psic.fernandaregalado/`.
- Google Maps: `https://maps.app.goo.gl/yeoxjHcLFUmbPkCm7`.
- Credito de desarrollo: `https://www.gerardoregalado.dev/`.
- Canonical: `https://www.balancepsicologia.com/`.
- OG: `https://www.balancepsicologia.com/media/balance-psicologia-og.png`.

Confirmaciones:

- Enlaces externos HTTPS.
- Sin UTM.
- Sin parametros de tracking.
- Sin enlaces vacios detectados en superficies auditadas.
- Sin `/admin` en navegacion publica.
- Sin `app.balancepsicologia.com` en metadata publica.
- Sin staging dentro de metadata canonica.
- Sin API keys en el diff.

## Contenido sensible y legal

No se detecto contenido clinico, datos de pacientes, historiales, diagnosticos ni notas reales en metadata, JSON-LD o assets generados.

Contenido legal pendiente:

- Aviso de privacidad.
- Terminos y condiciones.
- Politica de cookies, si aplica.
- Consentimiento para formulario futuro.

Phase 3.9 no publica contenido legal inventado. El futuro formulario publico no puede entrar en produccion sin aviso y consentimiento aprobados.

## Validaciones tecnicas

- `npm run validate`.
- `npm run build`.
- Pruebas unitarias SEO.
- Validacion binaria de PNG para confirmar OG 1200x630.
- `git diff --check`.

## Pendiente

Phase 3.10 debe validar visualmente favicon, Open Graph, metadata renderizada, robots, sitemap, responsive y QA final antes de cualquier promocion controlada.
