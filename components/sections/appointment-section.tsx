import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { landingAppointmentContent } from "@/content/landing";

const appointmentFields = [
  "Nombre",
  "Telefono o WhatsApp",
  "Correo opcional",
  "Servicio de interes",
  "Mensaje breve",
] as const;

export function AppointmentSection() {
  return (
    <LandingSectionShell {...landingAppointmentContent}>
      <div className="grid gap-8 rounded-xl bg-surface-container p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div className="space-y-5">
          <h3 className="font-serif text-2xl font-medium text-on-surface">
            Bloque reservado para solicitud basica
          </h3>
          <p className="leading-8 text-on-surface-variant">
            El diseno contempla un flujo simple para iniciar contacto. La
            captura real de datos, validacion y envio quedan fuera de esta
            subfase.
          </p>
        </div>

        <div className="rounded-lg border border-outline-variant/70 bg-surface-container-lowest p-6">
          <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
            Campos planeados
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {appointmentFields.map((field) => (
              <li
                key={field}
                className="rounded-md border border-outline-variant/70 bg-surface px-4 py-3 text-sm text-on-surface-variant"
              >
                {field}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LandingSectionShell>
  );
}
