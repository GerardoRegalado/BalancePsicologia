# PROMPTS OPERATIVOS

Este archivo concentra prompts reutilizables para operar el flujo comercial y técnico sin mezclar etapas.

## A) Prompt para generar `docs/project-scope.md`

```md
Actúa como estratega técnico-comercial enfocado en definición de alcance.

Lee primero `docs/client-discovery.md` y úsalo como fuente principal de verdad.

Interpretación obligatoria:
- `[x]` = seleccionado
- `[ ]` = no seleccionado
- respuestas en texto libre = fuente de verdad
- dominio deseado = parte del discovery

Con base en eso, genera o actualiza únicamente `docs/project-scope.md`.

El scope debe definir con claridad:
- alcance incluido
- alcance excluido
- supuestos
- dependencias
- criterios de aceptación

Reglas:
- no cotices todavía
- no generes prompt para Stitch todavía
- no inventes features fuera del discovery
- si falta información crítica, declárala como supuesto o pendiente explícito
```

## B) Prompt para generar `docs/quote.md`

```md
Actúa como estratega comercial para cotización freelance web.

Lee y usa como base:
- `docs/client-discovery.md`
- `docs/project-scope.md`

Usa el skill `pricing-strategy`.

Genera o actualiza únicamente `docs/quote.md`.

Reglas de pricing:
- usar mercado mexicano como referencia
- usar 15 USD por hora como referencia base
- considerar explícitamente que el proyecto se desarrollará con apoyo de IA/Codex
- asumir que la implementación asistida por IA reduce tiempo frente a un desarrollo manual tradicional, sin prometer tiempos irreales
- diferenciar entre tiempo de implementación asistida por IA y tiempo total del proyecto
- al generar `docs/quote.md`, distinguir explícitamente ambos tiempos con etiquetas claras
- el tiempo estimado de implementación debe cubrir la construcción técnica asistida por IA/Codex
- el tiempo estimado total de proyecto debe contemplar también diseño, validaciones, feedback, QA, iteraciones, ajustes y coordinación
- el tiempo total del proyecto debe contemplar también diseño, validaciones, feedback, QA, ajustes y coordinación
- usar como referencia comercial general:
  - proyectos pequeños: 1 a 2 semanas
  - proyectos medianos: 2 a 4 semanas
  - solo exceder 4 semanas si el alcance realmente lo justifica
- no llevar pricing a nivel enterprise sin justificación real
- si la estimación supera 4 semanas o sube demasiado por complejidad, seniority o tiempo estimado, preguntar primero antes de proponer un ajuste
- justificar claramente por qué sería necesario ese ajuste
- mantener la cotización realista, comercial, competitiva y vendible en México
- evitar fórmulas rígidas o promesas absurdas
- explicar la estimación con criterio comercial, no solo técnico

Además:
- no inventar features fuera del discovery/scope
- si falta información crítica, dejarla como supuesto o pendiente explícito
- mantener alineación estricta con `docs/project-scope.md`
```

## C) Prompt definitivo para Stitch (generado por Codex)

Uso manual:
1. Codex reemplaza esta sección cuando se ejecute el prompt D.
2. Copia manualmente el prompt final y pégalo en Stitch.
3. Exporta el `.zip` desde Stitch.
4. Guarda manualmente en `docs/design/` el `DESIGN.md` aprobado y las carpetas de vista aprobadas con sus archivos.

Prompt final para Stitch:

```md
[Codex debe reemplazar este bloque completo con el prompt definitivo para Stitch]
```

## D) Prompt para generar el prompt de Stitch

```md
Actúa como estratega de diseño comercial y preparador de prompts para Stitch.

Lee obligatoriamente:
- `docs/client-discovery.md`
- `docs/project-scope.md`
- `docs/quote.md`

Usa un skill UX/UI o de diseño si existe y aporta valor real.
- Prioriza `frontend-design` si está disponible.
- No instales herramientas nuevas si una skill ya disponible cubre la necesidad.

Objetivo:
- crear un prompt claro, accionable y listo para copiar/pegar en Stitch
- enfocado en producir mockups vendibles, claros y útiles para implementar luego con alta fidelidad

Antes de redactar el prompt final para Stitch, entrega en este orden:
1. resumen del tipo de negocio
2. resumen del objetivo principal de conversión
3. identificación de las pantallas o vistas visuales realmente necesarias
4. propuesta de dirección visual adecuada al negocio
5. prompt final para Stitch

La propuesta visual debe:
- alinearse al mercado, tono y nivel comercial del cliente
- respetar estrictamente lo aprobado en scope y quote
- evitar complejidad visual innecesaria o módulos inventados

El prompt para Stitch debe:
- ser más corto y preciso que un brief genérico
- respetar estrictamente el scope aprobado
- priorizar claridad comercial, jerarquía visual, conversión y calidad visual
- considerar mercado mexicano cuando aplique
- no inventar módulos, pantallas o features fuera del alcance
- enfocarse solo en las vistas realmente necesarias
- pedir salidas útiles para implementación posterior con alta fidelidad, idealmente exportables como `DESIGN.md`, carpetas por vista, `screen.png` y `code.html`
- no usar el diseño para justificar ampliaciones de alcance

Acción obligatoria:
- reemplaza completamente el contenido de la sección `## C) Prompt definitivo para Stitch (generado por Codex)` en `PROMPTS.md`
- no modifiques otras secciones de `PROMPTS.md`
```

## E) Prompt de development strategy para Codex (modo plan)

```md
Actúa como arquitecto técnico y planificador de implementación en modo plan.

Lee y usa como base obligatoria:
- `docs/client-discovery.md`
- `docs/project-scope.md`
- `docs/quote.md`
- `docs/design/README.md`
- los artefactos aprobados dentro de `docs/design/`, incluyendo `DESIGN.md` si existe y cada carpeta de vista con `screen.png` y `code.html`

Interpretación obligatoria de diseño:
- `screen.png` manda visualmente.
- `DESIGN.md` manda sobre sistema visual, tokens, estilo y lineamientos.
- `code.html` es solo referencia estructural y semántica; nunca es código final de producción.

Con esos insumos, genera o actualiza `docs/development-strategy.md` en español.

La estrategia debe incluir:
- resumen del proyecto
- versionamiento del proyecto si es necesario
- stack recomendado
- arquitectura recomendada
- features
- riesgos
- dependencias
- fases
- criterios de aceptación por fase
- skills recomendadas por fase
- qué validar manualmente en cada fase

Reglas:
- no inventes features fuera de scope
- mantener enfoque MVP y evitar sobreingeniería
- si algo no está claro, tratarlo como supuesto o riesgo
- alinear la estrategia con los artefactos aprobados dentro de `docs/design/`
- si el diseño muestra algo fuera de `docs/project-scope.md`, tratarlo como desalineación y no como requisito automático
```

## F) Prompt de implementación por fase

```md
Actúa como implementador por fases en este repo.

Lee primero:
- `docs/design/README.md`
- los artefactos aprobados dentro de `docs/design/`
- `docs/project-scope.md`
- `docs/development-strategy.md`
- `docs/client-discovery.md` (solo para contexto adicional, sin ampliar scope)

Usa el skill `frontend-design` como apoyo para calidad visual y consistencia.

Úsalo especialmente cuando la fase incluya UI o decisiones de implementación visual. Si la fase es principalmente técnica, úsalo solo cuando realmente aporte valor.

Objetivo:
- traducir el diseño aprobado a una implementación limpia y mantenible
- implementar únicamente una fase concreta definida en `docs/development-strategy.md`
- mantener alta fidelidad visual contra `screen.png` y `DESIGN.md`
- respetar estrictamente scope y estrategia
- resolver dentro de esa fase tanto UI como lógica, wiring o integración ligera si forman parte de sus entregables

Instrucción variable de ejecución:
- el usuario debe indicar explícitamente qué fase implementar, por número o por nombre, por ejemplo: `Implementa solo la Fase 1` o `Implementa solo la fase "Landing pública"`.

Modo de trabajo obligatorio:
- lee `docs/development-strategy.md` y ubica la fase solicitada
- implementa únicamente los entregables y criterios de esa fase
- permite trabajo full-stack ligero dentro del alcance de esa fase, incluyendo UI, wiring de servicios, auth, backend ligero, data fetching, integraciones y lógica operativa necesaria
- si la fase solicitada depende de entregables no completados de una fase anterior, detente y repórtalo antes de implementar
- no avances a la siguiente fase aunque detectes que ya sabes cómo hacerlo
- si detectas ambigüedad, conflicto entre diseño y strategy, o falta de definición que afecte esa fase, detente y repórtala antes de expandir alcance
- si una fase requiere UI + lógica + wiring, resuélvelo dentro de esa misma fase siempre que esté definido en scope y strategy

Reglas:
- usar `screen.png` como referencia visual principal
- usar `DESIGN.md` para tokens visuales, estilo y lineamientos
- usar `code.html` solo como referencia estructural
- no copiar `code.html` directo a producción
- no inventar nuevas secciones, features o integraciones
- no usar el diseño para justificar ampliaciones de scope
- no salir del alcance aprobado en `docs/project-scope.md`
- respetar `docs/development-strategy.md`
- mantener arquitectura del repo y límites entre `config/`, `content/`, `components/`, `services/`
- usar Server Components por defecto y aislar interactividad en piezas cliente cuando sea necesario
- implementar con alta fidelidad visual y con código limpio
- no modificar ni implementar trabajo perteneciente a otra fase
- no tocar auth, backend, data fetching, servicios o integraciones de otras fases si no pertenecen a la fase solicitada
- no usar el hecho de que ya sabes cómo seguir para adelantarte

Al cierre:
- reporta qué implementaste en la fase solicitada
- reporta qué quedó pendiente dentro de esa misma fase, si aplica
- reporta qué validaste
- corre validaciones razonables según el impacto de la fase y según lo indicado en `docs/development-strategy.md`
```

## G) Prompt de correcciones por fase

```md
Actúa como implementador correctivo por fases en este repo.

Lee primero:
- `docs/project-scope.md`
- `docs/development-strategy.md`
- `docs/design/README.md`
- los artefactos aprobados dentro de `docs/design/`

Entrada esperada del usuario:
- la fase afectada, por número o por nombre
- la lista concreta de problemas detectados

Objetivo:
- corregir solo los problemas reportados en una fase ya implementada
- no avanzar a la siguiente fase
- respetar estrictamente scope, strategy y diseño aprobado
- poder corregir problemas visuales, funcionales o técnicos dentro de la fase indicada

Modo de trabajo obligatorio:
- identifica la fase indicada en `docs/development-strategy.md`
- corrige únicamente los problemas listados para esa fase
- corrige tanto UI como lógica, wiring, auth, backend ligero, data fetching o integraciones si pertenecen a esa fase y al alcance aprobado
- no aproveches la tarea para refactorizar, expandir alcance o tocar partes no pedidas
- si descubres que un problema en realidad proviene de ambigüedad de diseño, conflicto con `docs/development-strategy.md` o falta de definición en scope, repórtalo explícitamente
- si corregir un punto exige tocar algo colateral, limítalo al mínimo necesario y explícalo

Reglas:
- usar `screen.png` como referencia visual principal
- usar `DESIGN.md` para sistema visual y lineamientos
- usar `code.html` solo como referencia estructural
- no copiar `code.html` directo a producción
- no avanzar a la siguiente fase
- no introducir mejoras no solicitadas
- no convertir una corrección en refactor general
- no tocar otras fases
- no alterar comportamiento ya validado de esa misma fase salvo que el problema reportado realmente lo requiera
- no usar el diseño para justificar ampliaciones de scope
- respetar estrictamente `docs/project-scope.md` y `docs/development-strategy.md`

Control de alcance por fase:
- si una "corrección" solicitada en realidad corresponde a entregables o implementaciones de una fase futura según `docs/development-strategy.md`, repórtalo explícitamente y no lo implementes como si fuera parte de la fase actual
- deja claro que eso no es una corrección de la fase actual sino trabajo correspondiente a una fase posterior

Al cierre:
- reporta qué corrigió Codex
- reporta qué problemas no pudo corregir por ambigüedad o conflicto documental
- reporta qué validaciones volvió a correr, si aplica
```
