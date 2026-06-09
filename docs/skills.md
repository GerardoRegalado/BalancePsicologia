# Skills

## Objetivo

Estos skills complementan el trabajo de diseño, implementación, testing, debugging y descubrimiento dentro de este template.

## Skills solicitados

### `ui-ux-pro-max`

Comando:

```bash
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
```

Propósito:

- inteligencia UI/UX para decisiones de estructura, accesibilidad, jerarquía visual, responsive design, interacción, color, tipografía y calidad visual

Cuándo usarlo:

- al diseñar nuevas landings, vistas institucionales, dashboards o componentes visuales
- al refinar jerarquía visual, accesibilidad, interacción, layouts responsivos o consistencia de producto
- al revisar UI antes de cerrar una fase de implementación

Notas:

- reemplaza a la skill anterior de diseño frontend como skill principal de diseño del proyecto
- origen solicitado: `https://ui-ux-pro-max-skill.nextlevelbuilder.io/`
- repositorio usado por el instalador: `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`
- la instalación también agrega skills auxiliares `ckm:*` del mismo paquete

### `vercel-react-best-practices`

Comando:

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

Propósito:

- revisión de buenas prácticas en componentes React

Cuándo usarlo:

- después de editar varios componentes o al revisar deuda técnica

### `web-design-guidelines`

Comando:

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
```

Propósito:

- guía para decisiones de diseño web consistentes

Cuándo usarlo:

- antes de aterrizar una propuesta visual o al alinear una landing con una dirección estética

### `next-best-practices`

Comando:

```bash
npx skills add https://github.com/vercel-labs/next-skills --skill next-best-practices
```

Propósito:

- refuerzo de buenas prácticas específicas de Next.js

Cuándo usarlo:

- al tocar routing, metadata, rendering o estructura del App Router

### `next-cache-components`

Comando:

```bash
npx skills add https://github.com/vercel-labs/next-skills --skill next-cache-components
```

Propósito:

- guía para usar Cache Components, `use cache`, `cacheLife`, `cacheTag` y límites entre contenido estático, cacheado y dinámico

Cuándo usarlo:

- cuando el proyecto entre a una iteración de performance, caching, PPR o refinamiento de Server/Client boundaries

### `copywriting`

Comando:

```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill copywriting
```

Propósito:

- apoyo para copies de hero, beneficios, CTA y messaging comercial

Cuándo usarlo:

- al transformar el brief del cliente en contenido de conversión

### `pricing-strategy`

Comando:

```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill pricing-strategy
```

Propósito:

- apoyo para estructurar pricing, paquetes o anclaje comercial

Cuándo usarlo:

- cuando el proyecto requiera una sección de pricing o una oferta más clara

### `webapp-testing`

Comando:

```bash
npx skills add https://github.com/anthropics/skills --skill webapp-testing
```

Propósito:

- enfoque más sistemático para testing y validación de apps web

Cuándo usarlo:

- antes de cerrar features relevantes o al definir cobertura inicial

### `systematic-debugging`

Comando:

```bash
npx skills add https://github.com/obra/superpowers --skill systematic-debugging
```

Propósito:

- debugging ordenado y reproducible

Cuándo usarlo:

- ante bugs difíciles, fallos intermitentes o problemas de integración

### `find-skills`

Comando:

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

Propósito:

- descubrir skills adicionales útiles según el reto del proyecto

Cuándo usarlo:

- cuando aparezcan necesidades nuevas no cubiertas por los skills ya instalados

## Nota operativa

- Estos skills se instalan en el entorno de Codex del usuario, no dentro del repo como dependencias de la app.
- Después de instalarlos conviene reiniciar Codex para que queden disponibles en la sesión.
- `next-cache-components` quedó instalado como parte de la preparación de v1.1.
- La skill anterior de diseño frontend fue retirada y reemplazada por `ui-ux-pro-max`.
