---
name: Cyan Modernist
colors:
  surface: '#f5faff'
  surface-dim: '#d6dbdf'
  surface-bright: '#f5faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4f9'
  surface-container: '#eaeef3'
  surface-container-high: '#e4e9ee'
  surface-container-highest: '#dee3e8'
  on-surface: '#171c20'
  on-surface-variant: '#3e484f'
  inverse-surface: '#2c3135'
  inverse-on-surface: '#edf1f6'
  outline: '#6e7980'
  outline-variant: '#bdc8d1'
  surface-tint: '#00668a'
  primary: '#00668a'
  on-primary: '#ffffff'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#7bd0ff'
  secondary: '#0f6875'
  on-secondary: '#ffffff'
  secondary-container: '#a2ebfa'
  on-secondary-container: '#186c79'
  tertiary: '#006591'
  on-tertiary: '#ffffff'
  tertiary-container: '#43bbff'
  on-tertiary-container: '#00486a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#a5eefd'
  secondary-fixed-dim: '#89d2e0'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e59'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f5faff'
  on-background: '#171c20'
  surface-variant: '#dee3e8'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
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
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered for a premium, high-stakes educational environment. It prioritizes clarity, focus, and a sense of professional achievement. By blending a **Corporate/Modern** aesthetic with vibrant, tech-forward accents, the interface feels both authoritative and energizing. 

The visual language relies on significant whitespace to reduce cognitive load during assessments, while utilizing sharp, high-contrast typography to ensure readability. The emotional response is one of confidence and precision, achieved through the use of sophisticated gradients and subtle, layered elevation that distinguishes interactive elements from the structural background.

## Colors

The palette is anchored by a neutral, cool-toned slate base that ensures a professional atmosphere. **Primary Blue (#38BDF8)** serves as the main driver for action and success states, providing a high-visibility signal for progress and call-to-actions. 

**Secondary Teal (#5FA8B6)** is utilized for supportive UI elements like icons and borders, softening the interface without losing professional rigor. The use of gradients between these two hues creates a sense of depth and motion, particularly in progress indicators and primary buttons. High-contrast text colors are strictly enforced to meet accessibility standards and maintain a clean, editorial feel.

## Typography

This design system utilizes **Manrope** across all levels to maintain a refined, modern, and highly legible experience. The typeface's geometric qualities provide the "professional" edge required for a modern SaaS product, while its open terminals keep the text approachable.

Headlines use heavy weights and tighter letter spacing to create a strong visual hierarchy. Body text is set with generous line heights to ensure long-form questions and explanations are easy to digest. Labels and metadata use semi-bold weights to remain distinct even at smaller scales.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop experiences to maintain a premium, centered focus, while transitioning to a fluid, margin-based system for mobile. A strict 8px spatial rhythm governs all padding and margins, ensuring a consistent and predictable cadence across different screens.

Containers and cards are balanced with ample internal padding (typically 24px to 32px) to prevent the UI from feeling cramped, reinforcing the "clean" and "modern" brand pillars.

## Elevation & Depth

Depth in this design system is achieved through **Ambient Shadows** and subtle tonal layering. Rather than using harsh black shadows, the system employs low-opacity, tinted shadows that mirror the accent colors, creating a "glow" effect rather than a traditional drop shadow.

- **Level 1 (Cards):** Uses a very soft, diffused shadow (`0 4px 20px rgba(0,0,0,0.08)`) to lift content slightly off the #F8FAFC background.
- **Level 2 (Interactive/CTA):** Primary buttons utilize a more aggressive, tinted shadow (`0 6px 20px rgba(56,189,248,0.25)`) to signal interactivity and importance.
- **Micro-interactions:** Elevation is dynamic. Upon hover, cards should subtly increase their shadow spread, while buttons utilize a scale-up transform to provide tactile feedback.

## Shapes

The design system adopts a **Rounded** shape language to soften the "test-taking" experience and make it feel more inviting. 

Standard components like input fields and small cards use a 0.5rem (8px) radius. Larger structural elements, specifically primary buttons and answer cards, utilize a more pronounced **16px (1rem)** radius. This distinction helps to visually separate interactive "touch targets" from static informational blocks.

## Components

### Buttons
Primary CTA buttons feature a 135-degree linear gradient (`#38BDF8` to `#5FA8B6`). They must include a 16px corner radius and a signature soft cyan shadow. On hover, the button scales by 1.02x to provide a premium, tactile response. Secondary buttons should use the #5FA8B6 border with no fill.

### Cards
All content containers use a pure white background (`#FFFFFF`) against the primary background (`#F8FAFC`). They are finished with a subtle 1px border (`rgba(15,23,42,0.05)`) and the Level 1 shadow.

### Answer Options
Answer cards are the primary interaction point. They inherit the card style but include specific state logic:
- **Hover:** Apply a light cyan background tint (5% opacity of `#38BDF8`).
- **Selected:** Transition to a 2px border of `#38BDF8` with a 10% cyan background tint.
- **Text:** Remains Primary Text (`#0F172A`) for high contrast.

### Progress Bar
The track is a light gray (`#E2E8F0`) with a height of 8px and fully rounded caps. The fill is a 90-degree gradient from `#38BDF8` to `#0EA5E9`, creating a sense of forward momentum.

### Chips & Badges
Small status indicators or category tags should use a light teal background tint with `#5FA8B6` text, utilizing the 0.25rem (Soft) roundedness to differentiate them from primary action buttons.