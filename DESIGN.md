# Design System Specification: IA Academy Primary School

## 1. Overview & Creative North Star: "The Nurturing Atelier"
The Creative North Star for this design system is **"The Nurturing Atelier."** 

Unlike traditional educational platforms that rely on rigid, institutional grids, this system treats the digital interface as a high-end editorial gallery. For parents of children with ADHD, ADD, and Dyslexia, cognitive load is a primary concern. We break the "template" look by using intentional asymmetry and expansive breathing room to create a sense of calm authority. 

By layering soft, frosted surfaces over deep tonal backgrounds, we mimic the focused environment of a one-on-one classroom. We use overlapping elements—such as a student portrait breaking the boundary of a container—to symbolize the school’s ability to look beyond traditional labels and see the individual child.

---

## 2. Colors: Regal Depth & Supportive Warmth
The palette utilizes a sophisticated interplay of deep Purples (`primary`), illuminating Golds (`secondary`), and grounded Neutrals. 

### Palette Strategy
*   **Primary (`#5e0081`):** Represents the institution's wisdom and academic rigor. Use this for high-impact brand moments.
*   **Secondary (`#745b00`):** Inspired by the gold in the logo, this color is used to "illuminate" key paths, acting as a beacon for important information.
*   **Tertiary (`#383838`):** Provides the "Black" anchor from the brand requirements, used to ground the layout in stability and trust.

### The "No-Line" Rule
To maintain a premium, editorial feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background. This creates a "soft-edge" transition that is easier on the eyes for users with sensory sensitivities.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create depth:
*   **Base:** `surface` (`#f9f9fc`)
*   **Secondary Sections:** `surface-container-low` (`#f3f3f6`)
*   **Interactive Cards:** `surface-container-lowest` (`#ffffff`) for maximum "pop."
*   **Floating Elements:** Use `surface-variant` with a **Backdrop Blur (20px-30px)** to create a Glassmorphism effect, allowing the brand colors to bleed through softly.

### Signature Textures
Main CTAs and Hero backgrounds should utilize a subtle linear gradient transitioning from `primary` (`#5e0081`) to `primary_container` (`#7b1fa2`) at a 135-degree angle. This adds a "soulful" shimmer that flat color cannot achieve.

---

## 3. Typography: The Lexend Standard
We have selected **Lexend** as the sole typeface. Lexend was specifically designed to reduce visual stress and improve reading performance for students with dyslexia and other learning difficulties.

*   **Display (Display-LG 3.5rem):** Reserved for "Hero" moments. Use high-contrast sizing to create an editorial hierarchy.
*   **Headlines (Headline-MD 1.75rem):** Used for section titles. Pair these with `on_surface_variant` to keep the tone warm and approachable.
*   **Body (Body-LG 1rem):** The workhorse for parent communication. Ensure a generous line-height (1.6 - 1.8) to facilitate easy tracking for neurodivergent readers.
*   **Labels (Label-MD 0.75rem):** Used for micro-copy and tags. Always in Semi-Bold to ensure legibility.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, shadows are an exception, not the rule. Depth is achieved through the **Layering Principle.**

*   **Tonal Stacking:** Place a `surface-container-lowest` card atop a `surface-container-low` background. The subtle shift in hex value provides a sophisticated "lift."
*   **Ambient Shadows:** When an element must float (like a "Book a Tour" modal), use an ultra-diffused shadow: `0px 20px 40px rgba(94, 0, 129, 0.06)`. Note the use of a `primary` tint in the shadow to mimic natural light hitting a purple surface.
*   **The Ghost Border:** If a boundary is strictly required for accessibility, use a `outline_variant` at **15% opacity**. Never use 100% opaque borders.
*   **Glassmorphism:** For the navigation bar and floating action buttons, use semi-transparent surface colors with a `blur(12px)` filter. This keeps the user grounded in the content while they navigate.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (Primary to Primary Container), `xl` (1.5rem) roundedness. No border. Text is `on_primary`.
*   **Secondary:** `surface-container-highest` fill with `primary` text. This provides a soft, "warm" alternative to the high-energy primary button.
*   **Tertiary:** No fill. `primary` text with an underline that appears only on hover.

### Cards & Lists
*   **Forbid Divider Lines:** Separate list items using the Spacing Scale (e.g., `spacing-4`). 
*   **The "Small Class" Card:** Use a `surface-container-lowest` card with an asymmetrical image placement. This highlights the "one-on-one" focus through layout—giving the content room to "breathe" just like the students in the classroom.

### Input Fields
*   **State:** Use `surface-container-high` as the background for the input field. 
*   **Focus:** On focus, the field should transition to `surface-container-lowest` with a 2px `secondary` (Gold) bottom-border only. This "underlining" feel mimics a teacher’s supportive hand-marking.

### Pro-Active Support Chips
*   **Function:** Used to tag specific learning support types (e.g., "ADHD-Friendly," "Tactile Learning").
*   **Style:** `surface-container-lowest` background with a `secondary` (Gold) ghost-border at 20% opacity.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical white space. Leave one side of a section "heavy" and the other "light" to create a premium, curated feel.
*   **Do** use the `secondary_container` (Gold) sparingly. It should feel like a reward or a highlight, not a primary background.
*   **Do** prioritize "Reading Comfort." Ensure text blocks never exceed 60 characters in width.

### Don't:
*   **Don't** use pure black `#000000` for text. Use `on_surface` (`#1a1c1e`) to avoid the high-contrast "vibration" that can be distracting for ADHD/Dyslexic readers.
*   **Don't** use sharp 90-degree corners. The minimum roundedness is `md` (0.75rem). Soft corners communicate safety and support.
*   **Don't** use standard "Drop Shadows." If it looks like a default CSS shadow, it is too heavy for this system. Use the Ambient Shadow specification.