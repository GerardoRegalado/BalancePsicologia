import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { ctaClass } from "@/components/ui/cta-styles";
import { brandConfig } from "@/config/brand";
import { appointmentSectionContent } from "@/content/lead-form";
import type { ContentAction } from "@/types/content";

function AppointmentAction({
  action,
  className,
}: {
  action: ContentAction;
  className?: string;
}) {
  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noopener noreferrer" : undefined}
      className={ctaClass({
        variant: action.variant,
        size: "md",
        className,
      })}
    >
      {action.mobileLabel ?? action.label}
    </a>
  );
}

export function AppointmentSection() {
  return (
    <LandingSectionShell
      id={appointmentSectionContent.id}
      eyebrow={appointmentSectionContent.eyebrow}
      title={appointmentSectionContent.title}
      description={appointmentSectionContent.description}
      publicNote={appointmentSectionContent.publicNote}
    >
      <div className="grid gap-8 rounded-xl bg-surface-container-low p-4 shadow-atmospheric-sm sm:p-6 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:p-10 lg:p-12">
        <div className="space-y-7">
          <div>
            <h3 className="font-serif text-2xl font-medium text-on-surface">
              {appointmentSectionContent.intro.title}
            </h3>
            <p className="mt-4 leading-7 text-on-surface-variant md:leading-8">
              {appointmentSectionContent.intro.description}
            </p>
          </div>

          <ol className="space-y-5">
            {appointmentSectionContent.steps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-container/15 text-sm font-bold text-primary">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside
          className="rounded-lg border border-primary/20 bg-surface-container-lowest p-5 shadow-atmospheric-sm md:p-8"
          aria-labelledby="appointment-contact-title"
        >
          <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
            Canal principal
          </p>
          <h3
            id="appointment-contact-title"
            className="mt-4 font-serif text-2xl font-medium text-on-surface"
          >
            WhatsApp
          </h3>
          <p className="mt-3 text-lg font-semibold text-primary">
            {brandConfig.contact.whatsappDisplay}
          </p>
          <p className="mt-4 text-sm leading-7 text-on-surface-variant">
            {appointmentSectionContent.publicNote}
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <AppointmentAction
              action={appointmentSectionContent.primaryAction}
              className="w-full"
            />
            <AppointmentAction
              action={appointmentSectionContent.secondaryAction}
              className="w-full"
            />
          </div>

          <p className="mt-6 rounded-lg bg-secondary-container/45 px-4 py-3 text-xs leading-5 text-on-secondary-container">
            {appointmentSectionContent.privacyNote}
          </p>
        </aside>
      </div>
    </LandingSectionShell>
  );
}
