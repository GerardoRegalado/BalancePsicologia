import { Container } from "@/components/ui/container";
import { adminConfig } from "@/config/admin";

export function AdminPanelPlaceholder() {
  return (
    <Container className="space-y-10 py-16">
      <section className="max-w-3xl space-y-4">
        <p className="text-xs tracking-[0.35em] text-emerald-300 uppercase">
          {adminConfig.intro.eyebrow}
        </p>
        <h2 className="text-4xl font-semibold tracking-tight">
          {adminConfig.intro.title}
        </h2>
        <p className="text-base leading-8 text-slate-300">
          {adminConfig.intro.description}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {adminConfig.futureModules.map((area) => (
          <article
            key={area.key}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
          >
            <p className="text-xs tracking-[0.28em] text-emerald-300 uppercase">
              {area.status}
            </p>
            <h3 className="mt-3 text-xl font-semibold">{area.label}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {area.description}
            </p>
            <p className="mt-4 text-xs tracking-[0.24em] text-slate-400 uppercase">
              Owner: {area.owner}
            </p>
          </article>
        ))}
      </section>
    </Container>
  );
}
