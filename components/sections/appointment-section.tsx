import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { ctaClass } from "@/components/ui/cta-styles";
import { leadFormContent } from "@/content/lead-form";
import type { LeadFormField } from "@/types/content";

function AppointmentField({ field }: { field: LeadFormField }) {
  const fieldId = `appointment-${field.name}`;
  const helperId = field.helperText ? `${fieldId}-helper` : undefined;
  const fieldClass =
    "w-full border-0 border-b border-outline/30 bg-surface-container-lowest px-0 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/70 disabled:opacity-100";

  return (
    <div className={field.type === "textarea" ? "sm:col-span-2" : undefined}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label
          htmlFor={fieldId}
          className="text-xs font-bold tracking-[0.08em] text-on-surface uppercase"
        >
          {field.label}
        </label>
        <span className="text-xs text-on-surface-variant">
          {field.required ? "Requerido" : "Opcional"}
        </span>
      </div>

      {field.type === "select" ? (
        <select
          id={fieldId}
          name={field.name}
          className={fieldClass}
          defaultValue=""
          disabled
          aria-required={field.required}
        >
          <option value="">{field.placeholder}</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          id={fieldId}
          name={field.name}
          className={`${fieldClass} min-h-24 resize-none`}
          placeholder={field.placeholder}
          disabled
          aria-describedby={helperId}
          aria-required={field.required}
        />
      ) : (
        <input
          id={fieldId}
          name={field.name}
          type={field.type}
          className={fieldClass}
          placeholder={field.placeholder}
          disabled
          aria-describedby={helperId}
          aria-required={field.required}
        />
      )}

      {field.helperText ? (
        <p id={helperId} className="mt-2 text-xs leading-5 text-on-surface-variant">
          {field.helperText}
        </p>
      ) : null}
    </div>
  );
}

export function AppointmentSection() {
  return (
    <LandingSectionShell
      id={leadFormContent.id}
      eyebrow={leadFormContent.eyebrow}
      title={leadFormContent.title}
      description={leadFormContent.description}
      publicNote={leadFormContent.publicNote}
    >
      <div className="grid gap-8 rounded-xl bg-surface-container-low p-4 shadow-atmospheric-sm sm:p-6 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:p-10 lg:p-12">
        <div className="space-y-7">
          <h3 className="font-serif text-2xl font-medium text-on-surface">
            {leadFormContent.aside.title}
          </h3>
          <p className="leading-7 text-on-surface-variant md:leading-8">
            {leadFormContent.aside.description}
          </p>

          <div className="space-y-5">
            {leadFormContent.aside.points.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-container/15 text-primary">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 3.5 18.5 6v5.2c0 4.1-2.7 7.7-6.5 8.9-3.8-1.2-6.5-4.8-6.5-8.9V6L12 3.5Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                    <path
                      d="m9.2 12.2 1.8 1.8 3.8-4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">
                    {point.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-lg border border-outline-variant/50 bg-surface-container-lowest p-5 md:p-8"
          role="group"
          aria-labelledby="appointment-visual-title"
        >
          <h3
            id="appointment-visual-title"
            className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase"
          >
            Datos para primer contacto
          </h3>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {leadFormContent.fields.map((field) => (
              <AppointmentField key={field.name} field={field} />
            ))}
          </div>

          <button
            type="button"
            className={ctaClass({
              disabled: true,
              className: "mt-8 w-full",
            })}
            disabled
          >
            {leadFormContent.visualSubmitLabel}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-on-surface-variant">
            {leadFormContent.privacyNote}
          </p>
        </div>
      </div>
    </LandingSectionShell>
  );
}
