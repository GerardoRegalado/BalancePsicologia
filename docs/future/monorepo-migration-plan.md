# Plan futuro de migracion a monorepo

Documento estrategico para Phase 4.x. Describe la migracion futura del repositorio actual a un monorepo privado, sin ejecutarla durante esta tarea.

## Proposito

El monorepo se adopta para separar claramente la landing publica de la futura app privada, conservar documentacion centralizada y permitir paquetes compartidos solo cuando exista reutilizacion real.

El repositorio actual se conserva. No se creara un repositorio nuevo desde cero.

## Estructura objetivo

```text
BalancePsicologia/
├── apps/
│   ├── marketing/
│   │   └── www.balancepsicologia.com
│   └── clinic/
│       └── app.balancepsicologia.com
├── packages/
│   ├── ui/
│   ├── config/
│   └── types/
├── docs/
├── package.json
└── pnpm-workspace.yaml
```

## Aplicaciones

- `apps/marketing`: contendra la landing publica y conservara `www.balancepsicologia.com`.
- `apps/clinic`: contendra la futura app privada y usara `app.balancepsicologia.com` cuando Phase 5 lo apruebe.
- La aplicacion publica no debe importar codigo clinico.
- La app privada no debe depender de contenido editorial de marketing como fuente de datos clinicos.

## Paquetes

- `packages/ui`: componentes realmente compartidos entre aplicaciones.
- `packages/config`: configuracion compartida no sensible.
- `packages/types`: tipos compartidos que no expongan informacion clinica.

Reglas:

- No crear paquetes si no hay reutilizacion real.
- No extraer abstracciones innecesarias.
- No mover logica clinica a paquetes publicos.
- No crear tipos clinicos compartidos antes de Phase 6.

## Estrategia de pnpm workspaces

Phase 4 debera definir:

- Package manager y lockfile actuales.
- Aprobacion explicita para migrar de npm a pnpm, si el proyecto aun usa npm.
- Campo `packageManager` en el `package.json` raiz para fijar version de pnpm.
- `pnpm-workspace.yaml`.
- Scripts raiz.
- Convencion de nombres.
- Lockfile de pnpm.
- TypeScript compartido minimo.
- ESLint/Prettier compartidos.
- Scripts por app para lint, typecheck, test y build.

La migracion debe mantener el comportamiento actual de la landing.

Reglas de migracion npm -> pnpm:

- No ejecutar la migracion sin aprobacion de Phase 4.3.
- Detectar primero el package manager y lockfile actuales.
- Crear `pnpm-workspace.yaml` solo durante la migracion aprobada.
- Generar lockfile de pnpm durante la migracion aprobada.
- No eliminar el lockfile anterior hasta que instalacion, lint, typecheck, tests y build pasen.
- Validar compatibilidad con Vercel, scripts y Root Directory.
- Documentar rollback al package manager anterior.
- No mezclar lockfiles despues de cerrar la migracion.

## Estrategia de Vercel

- La landing y la app privada tendran proyectos Vercel separados.
- Cada proyecto usara su propio Root Directory.
- `www.balancepsicologia.com` seguira apuntando a marketing.
- `app.balancepsicologia.com` quedara reservado para clinic.
- Staging y previews se configuraran por aplicacion.
- Variables y secretos se separaran por proyecto.
- No se compartiran secretos privados con marketing.

## Seguridad y secretos

Antes de migrar:

- Revisar secretos en archivos.
- Revisar variables `.env`.
- Revisar historial Git por datos sensibles.
- Revisar si existen forks publicos, clones conocidos, artefactos publicados o contenido previamente expuesto.
- Confirmar que no hay datos reales de pacientes.
- Revisar `.gitignore`.
- Revisar integraciones GitHub/Vercel.

El cambio de visibilidad del repositorio a privado debe hacerse manualmente desde GitHub por una persona autorizada. Codex no debe asumir que puede cambiar la visibilidad.

Advertencia: cambiar un repositorio publico a privado no vuelve privados los forks publicos existentes. Los forks publicos pueden quedar separados y continuar publicos. Cambiar la visibilidad tampoco elimina informacion que ya haya sido copiada externamente en clones, artefactos, caches o publicaciones previas.

Antes de considerar cerrado el hardening, se debe revisar y documentar si existen forks, clones conocidos, artefactos o contenido previamente publicado.

## Datos clinicos

Git no debe usarse como almacenamiento clinico, incluso despues de volver privado el repositorio.

No se deben guardar:

- Datos de pacientes.
- Historiales clinicos llenos.
- Nombres.
- Diagnosticos.
- Notas reales.
- Capturas con datos clinicos.
- Identificadores de pacientes.
- Credenciales.
- Secretos.

## Riesgos

- Romper imports o aliases al mover la landing.
- Configurar mal Root Directory en Vercel.
- Mezclar variables de marketing y clinic.
- Crear paquetes compartidos prematuros.
- Exponer codigo clinico desde marketing.
- Conservar secretos o datos sensibles en historial Git.
- Asumir incorrectamente que volver privado el repositorio elimina forks publicos, clones o contenido previamente copiado.
- Perder configuracion de staging o produccion.

## Rollback

Antes de ejecutar la migracion real se debe documentar:

- Commit base previo a migracion.
- Pasos para restaurar estructura actual.
- Root Directory anterior de Vercel.
- Variables actuales por proyecto.
- Package manager y lockfile anteriores.
- Validaciones minimas para confirmar rollback.

Si falla build, preview, staging o produccion, se debe revertir la migracion o restaurar Root Directory anterior hasta corregir.

## Checklist previo

- [ ] Phase 3 cerrada y aprobada.
- [ ] Repo auditado por secretos y datos sensibles.
- [ ] Forks publicos, clones conocidos, artefactos y contenido previamente publicado revisados.
- [ ] Repo convertido a privado manualmente.
- [ ] Colaboradores y GitHub Apps revisados.
- [ ] Vercel, Actions, webhooks y deploy keys revisados.
- [ ] Rollback documentado.
- [ ] Package manager y lockfile actuales identificados.
- [ ] Migracion a pnpm aprobada.
- [ ] Plan de pnpm workspaces aprobado.
- [ ] No existen datos clinicos reales en repo.

## Checklist posterior

- [ ] Landing movida a `apps/marketing` sin cambios funcionales.
- [ ] `packageManager` fijado en el `package.json` raiz.
- [ ] `pnpm-workspace.yaml` creado y validado.
- [ ] Lockfile de pnpm generado.
- [ ] Lockfile anterior eliminado solo despues de validar instalacion, lint, typecheck, tests y build.
- [ ] Scripts funcionan desde raiz y app.
- [ ] Lint, typecheck, tests y build pasan.
- [ ] Vercel marketing usa Root Directory correcto.
- [ ] Preview y staging funcionan.
- [ ] Produccion conserva `www.balancepsicologia.com`.
- [ ] `apps/clinic` no existe como app funcional salvo aprobacion de Phase 5.
- [ ] Variables privadas no se comparten con marketing.
- [ ] Rollback probado o documentado.
- [ ] No quedan lockfiles mezclados despues del cierre de migracion.

## Criterios de aceptacion

- El repositorio queda privado antes de cualquier app privada real.
- La landing publica conserva comportamiento y dominio.
- La estructura monorepo queda preparada sin funcionalidades clinicas.
- No se crea app privada funcional en Phase 4.
- No se agregan Firebase, Gemini, pacientes, notas, pagos ni datos sensibles.
- Vercel queda configurado con Root Directory correcto para marketing.
- La migracion queda documentada y reversible.
