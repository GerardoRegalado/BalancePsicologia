# Google Maps Embed setup

La landing usa Google Maps Embed API en modo `place` para mostrar el mapa real de la ubicacion aprobada.

## Variable requerida

```text
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY
```

La clave no debe guardarse en Git. Debe configurarse por entorno y mantenerse fuera de `.env.local`, `.env.development.local`, `.env.production.local` o cualquier archivo con valores reales versionados.

## Restricciones recomendadas

La clave debe ser exclusiva para Google Maps Embed API.

Restriccion de API:

- Maps Embed API.

Restricciones de sitios web previstas:

- `http://localhost:3000/*`
- `https://*.vercel.app/*`
- `https://balancepsicologia.com/*`
- `https://www.balancepsicologia.com/*`
- `https://staging.balancepsicologia.com/*`

Las restricciones finales deben revisarse en Google Cloud segun los dominios realmente usados.

## Notas

- No incluir claves reales en documentacion, commits, issues o capturas.
- No incluir screenshots de Google Cloud con identificadores.
- No incluir informacion de facturacion.
- No se usa Maps JavaScript API, scripts externos, geolocalizacion ni almacenamiento de ubicacion del visitante.
