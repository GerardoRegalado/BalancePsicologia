import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { brandConfig } from "@/config/brand";
import { contactSectionContent } from "@/content/contact";
import type { ContactChannel } from "@/types/content";

function getChannelHref(channel: ContactChannel) {
  if (channel.kind === "whatsapp") {
    return brandConfig.contact.whatsappUrl || undefined;
  }

  if (channel.kind === "email" && brandConfig.supportEmail) {
    return `mailto:${brandConfig.supportEmail}`;
  }

  if (channel.kind === "instagram") {
    return brandConfig.social.instagram || undefined;
  }

  return undefined;
}

export function ContactSection() {
  return (
    <LandingSectionShell
      id={contactSectionContent.id}
      eyebrow={contactSectionContent.eyebrow}
      title={contactSectionContent.title}
      description={contactSectionContent.description}
      className="bg-surface-container-low"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contactSectionContent.channels.map((channel) => {
          const href = getChannelHref(channel);
          const content = (
            <>
              <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase">
                {channel.status}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-medium text-on-surface">
                {channel.label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                {channel.description}
              </p>
            </>
          );

          return href ? (
            <a
              key={channel.label}
              href={href}
              className="rounded-lg border border-primary/20 bg-surface-container-lowest p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-atmospheric-sm focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none md:p-6"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {content}
            </a>
          ) : (
            <article
              key={channel.label}
              className="rounded-lg border border-outline-variant/60 bg-surface-container-lowest p-5 md:p-6"
            >
              {content}
            </article>
          );
        })}
      </div>
    </LandingSectionShell>
  );
}
