import { brandConfig } from "@/config/brand";

const socialLinks = [
  {
    label: "Facebook",
    href: brandConfig.social.facebook,
  },
  {
    label: "Instagram",
    href: brandConfig.social.instagram,
  },
] as const;

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

export function SocialLinks({
  className,
  linkClassName,
  onLinkClick,
}: SocialLinksProps) {
  const availableLinks = socialLinks.filter((link) => link.href.length > 0);

  if (availableLinks.length === 0) {
    return null;
  }

  return (
    <div className={className} aria-label="Redes sociales">
      {availableLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onLinkClick}
          className={linkClassName}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
