# Phase 3.10 QA report

Fecha: 2026-06-13

Rama revisada: `develop`

HEAD base observado durante la auditoria: `f30fdaa`

Estado general: release candidate preparado para auditoria externa previa a staging. No se hizo deployment manual, no se modifico Vercel, no se promovio ninguna rama y produccion continua bloqueada.

## Comandos ejecutados

| Verificacion | Estado | Resultado |
| --- | --- | --- |
| `npm run validate` | PASS | Lint, typecheck, Vitest y build dentro de validate pasaron. |
| `npm run build` | PASS | Build de produccion local paso. |
| `git diff --check` | PASS | Sin errores de whitespace. |
| Verificacion HTTP local renderizada | PASS | HTML, metadata, robots y sitemap verificados contra servidor local existente. |
| Playwright visual por viewport | PENDING MANUAL | Python Playwright no esta instalado en el entorno; no se instalaron dependencias nuevas. |

## Correcciones aplicadas

| Area | Estado | Resultado |
| --- | --- | --- |
| FAQ ubicacion | PASS | Se elimino la doble puntuacion `Ags..` sin modificar `brandConfig.address.display`. |
| Nosotros | PASS | Se reemplazo copy que comunicaba informacion pendiente por un texto cerrado y profesional. |
| Testimonios | PASS | La seccion retorna `null` cuando `testimonialItems` esta vacio; no renderiza heading, empty state ni espacio publico. |
| Testimonios futuros | PASS | El modelo y contenido quedan preparados para volver a renderizar cuando existan items autorizados. |

## Responsive

| Viewport | Estado | Resultado |
| --- | --- | --- |
| 320 px | PENDING MANUAL | Requiere inspeccion visual real en navegador. |
| 375 px | PENDING MANUAL | Requiere inspeccion visual real en navegador. |
| 430 px | PENDING MANUAL | Requiere inspeccion visual real en navegador. |
| 768 px | PENDING MANUAL | Requiere inspeccion visual real en navegador. |
| 1024 px | PENDING MANUAL | Requiere inspeccion visual real en navegador. |
| 1440 px | PENDING MANUAL | Requiere inspeccion visual real en navegador. |

Notas:

- La verificacion HTTP confirmo que la home renderiza sin placeholders publicos obsoletos, sin formulario falso, sin testimonios vacios visibles y con datos publicos aprobados.
- La validacion visual de overflow, colisiones, tactilidad, foco visible y lectura fina por viewport queda pendiente de auditoria externa porque no hay Playwright disponible en el entorno.

## Navegacion y enlaces

| Elemento | Estado | Resultado |
| --- | --- | --- |
| Header desktop | PASS | Codigo conserva logo a `/`, navegacion interna y CTA WhatsApp; Facebook e Instagram no se renderizan en header. |
| Menu mobile | PASS | Codigo conserva `aria-expanded`, `aria-controls`, cierre por anchors y enlaces externos seguros. |
| Hero | PASS | CTA principal conserva WhatsApp; CTA secundario navega a `#agenda`. |
| Agenda | PASS | No existe formulario, inputs, selects, textarea, submit ni controles disabled. |
| Contacto | PASS | WhatsApp, Facebook, Instagram y Google Maps usan fuentes centralizadas. |
| Footer | PASS | WhatsApp, redes, Maps y credito de desarrollo conservan enlaces externos seguros; legales siguen no interactivos. |
| Click real con teclado/mouse | PENDING MANUAL | Requiere navegador interactivo. |

## Datos publicos

| Dato | Estado | Valor verificado |
| --- | --- | --- |
| WhatsApp visible | PASS | `449 555 6035` |
| WhatsApp URL | PASS | `https://wa.me/524495556035` |
| Terapia individual | PASS | `$450 MXN` |
| Terapia de pareja | PASS | `$700 MXN` |
| Terapia familiar | PASS | `$900 MXN` |
| Clinica | PASS | `Clínica MIND` |
| Direccion | PASS | `Jacaranda 552, Las Arboledas, 20020 Aguascalientes, Ags.` |
| Servicios/costos | PASS | Usan los mismos nombres desde `pricingPlans`. |
| Duracion, horarios, promociones o condiciones | PASS | No se agregaron. |

## Google Maps

| Verificacion | Estado | Resultado |
| --- | --- | --- |
| Iframe renderizado con variable local | PASS | El HTML local contiene iframe de Google Maps Embed y no muestra fallback. |
| Fallback sin variable | PASS | Cubierto por pruebas unitarias existentes de configuracion. |
| Carga lazy | PASS | Implementacion conserva `loading="lazy"`. |
| CTA externo | PASS | La seccion conserva CTA a Google Maps aprobado. |
| Pin, direccion e interaccion dentro del mapa | PENDING MANUAL | Requiere inspeccion visual con API key valida en preview/staging. |
| Restriccion de API key | PENDING MANUAL | El propietario debe confirmar en Google Cloud que la key sigue restringida a Maps Embed API y referrers autorizados. No se inspecciono desde el repositorio. |

## Accesibilidad

| Verificacion | Estado | Resultado |
| --- | --- | --- |
| `lang="es-MX"` | PASS | Confirmado en HTML renderizado. |
| Un solo `h1` | PASS | Cubierto por estructura actual y QA de contenido; requiere reconfirmacion visual externa. |
| Imagenes con alt | PASS | Header/footer y contenido usan `alt` descriptivo o marca. |
| Iconos decorativos | PASS | Componentes usan `aria-hidden` donde aplica. |
| Iframe con title | PASS | Implementacion mantiene `title` para mapa de Clínica MIND. |
| Menu mobile con estados | PASS | Codigo conserva `aria-expanded`, label dinamico y controles. |
| Foco visible | PASS | Codigo conserva clases `focus-visible`; validacion visual queda pendiente. |
| Navegacion por teclado | PENDING MANUAL | Requiere navegador interactivo. |
| Contraste legible | PENDING MANUAL | Requiere revision visual final. |

## SEO renderizada

| Elemento | Estado | Resultado |
| --- | --- | --- |
| Title home | PASS | `Terapia psicológica en Aguascalientes \| Balance Psicología` |
| Canonical | PASS | `https://www.balancepsicologia.com/` |
| Robots preview/dev | PASS | `noindex,nofollow` con `noarchive`. |
| Open Graph | PASS | `balance-psicologia-og.png` |
| Twitter | PASS | `summary_large_image` |
| JSON-LD | PASS | `ProfessionalService` |
| `robots.txt` | PASS | `Allow: /`; no usa `Disallow: /`. |
| `sitemap.xml` en preview/dev | PASS | Vacio. |
| Favicon | PASS | `app/icon.png` existe y carga por metadata de archivo. |
| Apple icon | PASS | `app/apple-icon.png` existe y carga por metadata de archivo. |
| OG dimensiones | PASS | PNG `1200x630`. |
| Template copy | PASS | No aparece copy del template en superficies publicas renderizadas. |
| Rutas privadas | PASS | No se promueve `/admin` ni `app.balancepsicologia.com` en contenido publico. |
| Datos sensibles | PASS | No se detectaron datos clinicos, pacientes, diagnosticos, notas ni secretos en contenido publico modificado. |

## Favicon y Open Graph

| Asset | Estado | Resultado |
| --- | --- | --- |
| Favicon | PASS | Simbolo centrado, sin fondo blanco visible, sin recorte evidente y colores conservados en inspeccion visual local. |
| Favicon 16/32/48 | PENDING MANUAL | Requiere validacion en navegador/sistema a tamanos reales. |
| Open Graph | PASS | Logo no deformado, copy legible, margenes seguros y sin precios, telefono o datos sensibles. |
| Redisenio de assets | NOT APPLICABLE | No se regeneraron ni modificaron favicon u OG en Phase 3.10. |

## Contenido legal pendiente

| Pendiente | Estado | Nota |
| --- | --- | --- |
| Aviso de privacidad final | PENDING MANUAL | Bloquea produccion; no bloquea staging. |
| Terminos y condiciones, si aplican | PENDING MANUAL | Bloquea produccion si se requieren legalmente. |
| Consentimiento del formulario futuro | PENDING MANUAL | Obligatorio antes de implementar formulario publico futuro. |
| Politica de cookies, si aplica | PENDING MANUAL | Depende de decision legal y de tracking/cookies futuros. |

No se crearon paginas legales ni enlaces legales activos.

## Staging release candidate

| Campo | Estado | Registro |
| --- | --- | --- |
| Rama fuente | PASS | `develop` |
| Staging noindex | PASS | La politica actual debe mantener `noindex,nofollow` fuera de produccion. |
| Canonical | PASS | Debe seguir apuntando a `https://www.balancepsicologia.com/`. |
| Variable Maps | PENDING MANUAL | Staging requiere `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` configurada y restringida. |
| Deployment | PASS | Ninguna promocion ni deployment manual se ejecuto durante esta fase. |
| SHA exacto | PENDING MANUAL | Debera seleccionarse despues de la auditoria externa de Phase 3.10. |
| Produccion | PASS | Continua bloqueada. |

## Pendientes para staging

- Auditoria visual externa en 320, 375, 430, 768, 1024 y 1440 px.
- Verificacion interactiva de menu mobile, teclado, foco visible y enlaces externos.
- Confirmacion visual del pin y comportamiento del iframe de Google Maps con key valida.
- Confirmacion externa de restricciones de la API key en Google Cloud.
- Seleccion del SHA exacto del release candidate.

## Resultado

Phase 3.10 deja el release candidate preparado desde codigo y documentacion, con pendientes manuales claros antes de desplegar a staging. Produccion no queda aprobada.
