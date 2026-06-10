---
name: Serene Balance
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#414845'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#727975'
  outline-variant: '#c1c8c4'
  surface-tint: '#47645b'
  primary: '#324f47'
  on-primary: '#ffffff'
  primary-container: '#4a675e'
  on-primary-container: '#c4e4d8'
  inverse-primary: '#aecdc2'
  secondary: '#6d5b47'
  on-secondary: '#ffffff'
  secondary-container: '#f5dcc2'
  on-secondary-container: '#725f4b'
  tertiary: '#344f48'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b675f'
  on-tertiary-container: '#c6e4da'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9e9de'
  primary-fixed-dim: '#aecdc2'
  on-primary-fixed: '#022019'
  on-primary-fixed-variant: '#304c44'
  secondary-fixed: '#f8dec5'
  secondary-fixed-dim: '#dac3aa'
  on-secondary-fixed: '#261909'
  on-secondary-fixed-variant: '#544431'
  tertiary-fixed: '#cbe9df'
  tertiary-fixed-dim: '#afcdc3'
  on-tertiary-fixed: '#04201a'
  on-tertiary-fixed-variant: '#314c45'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-padding-lg: 120px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is anchored in the concept of "The Professional Sanctuary." It moves away from sterile, clinical aesthetics toward a space that feels both intellectually authoritative and emotionally safe. The brand personality is grounded, empathetic, and sophisticated.

The design style is **Warm Minimalism**. It utilizes high-end editorial typography and a restricted, nature-inspired palette to create a sense of order and tranquility. By prioritizing generous whitespace and high-quality imagery, the interface reduces cognitive load, mirroring the mental clarity sought through therapy. The goal is to evoke an immediate sense of privacy, reliability, and peace from the first interaction.

## Colors
The palette is derived from natural elements—sage leaves, earth, and stone—to foster a "human" rather than "medical" atmosphere.

- **Primary (Sage Green):** Used for primary actions and brand presence. It represents growth and calmness.
- **Secondary (Muted Sand):** Used for accents and subtle highlights to provide warmth and grounding.
- **Tertiary (Dusty Teal):** Provides depth for secondary UI elements or categorization.
- **Neutral (Charcoal):** Reserved for typography to ensure AA/AAA accessibility contrast against warm white backgrounds.
- **Background (Warm White):** A soft, off-white base that prevents the "starkness" of pure white, reducing eye strain and feeling more inviting.

## Typography
This design system employs a pairing of a transitional serif and a functional sans-serif to balance authority with accessibility.

- **Headlines (Source Serif 4):** Chosen for its academic and professional pedigree. It conveys trust, experience, and elegance. Use for all page titles and section headers.
- **Body & Labels (Work Sans):** A highly legible, grounded sans-serif that remains neutral and clear. It ensures that complex psychological information is easy to digest.
- **Editorial Flourish:** Large display text should use tighter letter spacing and optical sizing where available to emphasize the premium feel of the clinic.

## Layout & Spacing
The layout philosophy is built on **Generous Breathing Room**. In a clinical context, "crowded" equals "stressful." 

- **Grid:** A 12-column fixed grid for desktop (centered), collapsing to 4 columns for mobile.
- **Rhythm:** Use a strict 8px base unit. Section vertical padding should be aggressive (96px to 120px) to allow each concept to stand alone, preventing the user from feeling overwhelmed.
- **Reflow:** On mobile, margins reduce to 20px, and vertical spacing scales down by one tier (e.g., `stack-lg` becomes `stack-md`).

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** and **Ambient Diffusion** rather than harsh shadows.

- **Surface Tiers:** Use subtle shifts in background color (Warm White to Surface Sage) to define regions.
- **Shadows:** When necessary (e.g., on floating action cards), use "Atmospheric Shadows"—extremely low opacity (4-6%), high blur radius (30px+), and a slight tint of the primary green to make the shadow feel like a natural part of the environment.
- **Outlines:** Use soft, low-contrast borders (1px, Primary color at 15% opacity) for input fields and secondary containers to maintain a "flat-plus" minimalist aesthetic.

## Shapes
The shape language is **Softly Organic**. 

- **Corner Radius:** Avoid sharp 90-degree angles which can feel aggressive or overly corporate. The standard `rounded` (0.5rem) provides a friendly but professional touch.
- **Images:** Photography should use `rounded-xl` (1.5rem) to reinforce the "gentle" nature of the practice. 
- **Icons:** Use thin-stroke (2px or 1.5px) icons with rounded caps and joins to match the typography's weight and the overall softness of the UI.

## Components

### Buttons
- **Primary:** Solid Sage Green with White text. No shadows. High-contrast, bold, but with softened corners.
- **Secondary:** Ghost style with a 1px Sage Green border.
- **Interaction:** Subtle lift on hover (2px Y-offset) with a transition speed of 300ms to feel deliberate and calm.

### Cards
Cards are the primary vehicle for service descriptions and therapist bios. They should use a "Surface Sage" background with no border, or a White background with a 1px soft border. Padding inside cards should be generous (min 32px).

### Input Fields
Forms (Contact/Booking) must feel non-intrusive. Use "Warm White" backgrounds with bottom-only borders or very light full-stroke borders. Labels should always be visible (avoid placeholder-only layouts) to maintain clarity and accessibility for all age groups.

### Photography Placeholders
Imagery must be high-quality, featuring soft natural lighting, organic textures (linen, wood, plants), and "human-centric" moments. Avoid generic stock photos of people shaking hands; prefer shots of peaceful interiors or empathetic, candid portraits.

### Chips/Tags
Used for "Specialties" (e.g., Anxiety, Child Psychology). These should be low-contrast (Secondary Sand background with Charcoal text) to provide information without distracting from primary calls to action.