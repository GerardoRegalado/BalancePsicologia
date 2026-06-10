import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { landingLocationContent } from "@/content/landing";

export function LocationSection() {
  return (
    <LandingSectionShell {...landingLocationContent}>
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
        <div className="min-h-80 rounded-xl border border-dashed border-outline-variant bg-surface-container">
          <div className="flex h-full min-h-80 items-center justify-center p-8 text-center">
            <p className="max-w-sm text-sm leading-7 text-on-surface-variant">
              Placeholder de mapa. La integracion real y la direccion se
              agregaran cuando exista ubicacion confirmada.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-primary p-8 text-on-primary">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">
            Aguascalientes, Mexico
          </p>
          <h3 className="mt-4 font-serif text-3xl font-medium">
            Direccion pendiente
          </h3>
          <p className="mt-5 leading-8 text-on-primary/85">
            Espacio reservado para direccion, referencias, horarios de atencion
            y enlaces de navegacion cuando sean aprobados.
          </p>
        </div>
      </div>
    </LandingSectionShell>
  );
}
