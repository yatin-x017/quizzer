---
name: Celestial Tech
colors:
  surface: '#0e141a'
  surface-dim: '#0e141a'
  surface-bright: '#333a40'
  surface-container-lowest: '#080f14'
  surface-container-low: '#161c22'
  surface-container: '#1a2026'
  surface-container-high: '#242b31'
  surface-container-highest: '#2f353c'
  on-surface: '#dde3eb'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dde3eb'
  inverse-on-surface: '#2b3137'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#89d2e0'
  on-secondary: '#00363e'
  secondary-container: '#00606d'
  on-secondary-container: '#90d9e7'
  tertiary: '#c5cce6'
  on-tertiary: '#283044'
  tertiary-container: '#a9b1ca'
  on-tertiary-container: '#3c4459'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#a5eefd'
  secondary-fixed-dim: '#89d2e0'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e59'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#0e141a'
  on-background: '#dde3eb'
  surface-variant: '#2f353c'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  h3:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  stat-value:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  gutter: 24px
  container-max: 1200px
---

## Brand & Style

This design system establishes a high-performance, immersive environment for intellectual competition. The brand personality is "The Neo-Scholar"—combining the rigor of traditional academic pursuits with the sleek, high-contrast aesthetics of modern aerospace and digital technology.

The UI targets a digitally native audience that values precision and speed. By utilizing a **Glassmorphism** style mixed with **High-Contrast Tech** elements, the interface evokes a sense of deep space and illuminated logic. Users should feel focused, empowered, and mentally sharp, as if they are operating a sophisticated knowledge terminal. The emotional response is one of "calm intensity"—a premium, dark, and undistracted space for rapid-fire trivia and deep learning.

## Colors

The color palette is rooted in deep obsidian and navy tones to reduce eye strain during long gaming sessions. The primary background provides the "void," while the secondary background and elevated cards create structural layers. 

Accent colors are limited to electric cyans and teals to maintain a technical, futuristic feel. The "Subtle Accent" is used for hover states and selection rings to provide an ethereal glow without overwhelming the primary information. Contrast ratios are strictly maintained to ensure that critical quiz content remains highly legible against the dark backdrops.

## Typography

This design system uses a dual-font strategy to balance character with utility. 

**Space Grotesk** is used for headlines, labels, and statistics. Its geometric and technical letterforms reinforce the "tech-inspired" narrative. **Inter** is utilized for body text and quiz questions to ensure maximum readability and a neutral, systematic feel. High-contrast hierarchy is achieved through significant size differences between headlines and body text, alongside the use of uppercase tracking for labels to denote category headers and metadata.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop (12 columns) and a **Fluid** model for mobile. A strict 8px/4px spatial rhythm is applied to all components to maintain a disciplined, mathematical feel. 

Generous margins (24px to 32px) are used to prevent the interface from feeling cluttered, emphasizing the "Minimalism" style. Quiz interactions are centered on the screen to focus the user's cognitive load on the question, with peripheral information (timers, scores) tucked into the corners or top bar using consistent gutter spacing.

## Elevation & Depth

This design system relies on **Glassmorphism** and **Tonal Layers** rather than traditional shadows to convey depth. 

1.  **Base Layer:** Primary background (#0F172A).
2.  **Surface Layer:** Secondary background (#1E293B) for sidebars or secondary navigation.
3.  **Floating Layer:** Elevated cards utilize `rgba(30, 41, 59, 0.8)` with a 10px backdrop-blur and a 1px border (`rgba(226, 232, 240, 0.1)`).
4.  **Accent Layer:** Active elements or primary buttons use a glow-shadow (`0 10px 30px rgba(56, 189, 248, 0.3)`) to appear as if they are emitting light onto the surfaces below.

Transitions between these layers should feel fluid, utilizing subtle opacity shifts to indicate state changes.

## Shapes

The shape language is consistently "Rounded" to soften the high-tech edge, making the experience feel premium rather than aggressive. 

Standard components (Cards, Answer Options) use a 0.5rem (8px) base radius. Larger containers or prominent modal cards use the `rounded-xl` (1.5rem/24px) setting to create a friendly, modern container. Buttons and input fields mirror the 8px radius to maintain a cohesive visual rhythm.

## Components

### Buttons
Primary buttons feature a 135-degree linear gradient from `#38BDF8` to `#5FA8B6`. They must include a `0 10px 30px` glow shadow using the primary accent color at low opacity. On hover, the button scales by 1.05x and the glow intensity increases.

### Cards
Cards are the primary container. They use the elevated glassmorphism style: 10px backdrop-blur, a 1px subtle border, and a soft `0 8px 30px` shadow to separate them from the base background.

### Answer Options
Options are presented as glass cards. Hover states trigger a subtle cyan outer glow and a background shift to `rgba(56, 189, 248, 0.1)`. Selected states feature a 2px solid `#38BDF8` border and an "Electric Cyan" inner glow.

### Progress Bar
The bar track is a dark `#1E293B`. The fill uses the primary-to-secondary gradient. The leading edge of the progress fill should have a small, bright glow effect to simulate a "charging" or "active" energy beam.

### Chips & Tags
Small indicators for categories or difficulty levels use the "Subtle Accent" background with "Primary Accent" text. They are pill-shaped (32px height) with no border.

### Input Fields
Inputs are semi-transparent with a 1px border. Upon focus, the border color shifts to the primary accent, and the backdrop-blur increases slightly to pull the input "forward" in the hierarchy.