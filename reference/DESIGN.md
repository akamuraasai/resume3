# Design System Specification: The Executive Editorial

## 1. Overview & Creative North Star
**Creative North Star: The Sovereign Monograph**

This design system rejects the "template" aesthetic in favor of a bespoke, editorial experience. It is designed to feel like a high-end physical letterhead—heavy-stock paper, intentional ink-on-page precision, and the quiet authority of a private office. 

The system moves away from digital-first "app" patterns. Instead of boxes and buttons, we use **Negative Space as Structure** and **Typographic Gravitas** to command attention. The layout is unapologetically centered and balanced, utilizing a rigid structural spine while allowing content to breathe through expansive margins. We break the "generic grid" by treating every page as a single, cohesive composition rather than a collection of modular cards.

---

## 2. Colors & Surface Logic
The palette is rooted in deep, authoritative tones that mimic charcoal ink and slate-colored wool.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Traditional lines feel "cheap" and digital. Boundaries must be defined through:
1.  **Background Color Shifts:** A section using `surface-container-low` (#f1f4f6) sitting against a `surface` (#f8f9fa) background.
2.  **Vertical Whitespace:** Utilizing the larger ends of the spacing scale (16 or 20) to denote a change in context.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of premium stationery.
*   **Base Layer:** `surface` (#f8f9fa) provides a soft, warm-white canvas.
*   **The Inset:** Use `surface-container-lowest` (#ffffff) for the primary content "sheet" to create a subtle, luminous focus.
*   **The Accent:** Use `primary` (#566065) and `secondary` (#526075) only for high-authority moments like name headings or significant section headers.

### Signature Textures
To add "soul," use subtle linear gradients for hero backgrounds or background washes. Transition from `surface` to `surface-container-high` (#e3e9ec) at a 15-degree angle to mimic the natural fall of light across a heavy paper surface.

---

## 3. Typography
Typography is the primary architect of this system. We pair a high-contrast serif with a utilitarian sans-serif to balance heritage with modern clarity.

*   **Display & Headlines (Newsreader):** This is the "voice" of the brand. Use `display-lg` for the individual’s name. The variable optical sizing of Newsreader should be leveraged to ensure that larger titles feel elegant and thin, while smaller headlines remain legible.
*   **Body & Titles (Inter):** Inter provides a "clean-room" aesthetic for data-heavy sections like work history. It acts as the functional anchor to the decorative serif.
*   **Typographic Hierarchy:** 
    *   **High-Contrast Scaling:** We jump from `display-lg` (3.5rem) directly to `body-md` (0.875rem) in sub-headers to create a dramatic, editorial tension.
    *   **Leading:** Increase line-height for `body-lg` to 1.6 to ensure the "Executive" feel of readability and calm.

---

## 4. Elevation & Depth
In a high-end system, depth is felt, not seen. We avoid heavy shadows in favor of **Tonal Layering.**

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` card on top of a `surface-container-low` section. This creates a "soft lift" that feels like a physical layer of paper without the clutter of a shadow.
*   **Ambient Shadows:** If a floating element (like a print modal) is required, use a "Whisper Shadow":
    *   Blur: 40px
    *   Opacity: 4% 
    *   Color: `on-surface` (#2b3437)
*   **The "Ghost Border" Fallback:** If a divider is mandatory for accessibility, use `outline-variant` (#abb3b7) at **15% opacity**. It should be barely perceptible—a suggestion of a line, not a boundary.

---

## 5. Components

### Cards & Sections
*   **Rule:** Forbid divider lines. 
*   **Implementation:** Use a 2.75rem (`spacing-8`) vertical gap between experience items. Separate the "Company Name" from the "Role" using a background shift to `surface-container-low` for the company header.

### Buttons (The "Seal")
*   **Primary:** `on-primary-fixed` (#374146) background with `on-primary` (#f0f9ff) text. Rectangular (0px radius).
*   **Secondary:** No background. Use a bottom-border of 2px using the `primary` token, appearing only on hover.
*   **States:** On hover, primary buttons should shift to `primary-dim` (#4a5459). No rounded corners.

### Input Fields
*   **Style:** Minimalist under-line style only. 
*   **State:** Use `outline` (#737c7f) for the inactive state and `primary` (#566065) for the active state. Labels must use `label-md` in all-caps with 0.05rem letter spacing to feel like an official form.

### Chips (Expertise Tags)
*   **Style:** No background. Use a `ghost-border` (outline-variant at 20%) and `body-sm` text. These should look like discreet catalog entries, not colorful buttons.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Centered Layouts:** Align the primary header and contact info to the center to mimic a formal letterhead.
*   **Use Generous Margins:** Ensure the "page" has at least `spacing-20` (7rem) of padding on large screens. 
*   **Prioritize Type over Icons:** Use words. If an icon is necessary, it must be ultra-thin (0.5px to 1px stroke) and match the `on-surface-variant` color.

### Don’t:
*   **No Rounded Corners:** `0px` radius is mandatory for all elements. Rounded corners feel "friendly" and "consumer-grade"; sharp corners feel "architectural" and "authoritative."
*   **No High-Contrast Grids:** Avoid dark-mode-style pitch black. Use the Charcoal/Slate spectrum to maintain an "ink on paper" softness.
*   **No Animation Bloat:** Transitions should be "Instant" or "Fade Only" (200ms ease-in). Avoid bouncy or playful motions.

### Accessibility Note:
While we utilize subtle tonal shifts, ensure that text-to-background contrast always meets WCAG AA standards by using the `on-surface` (#2b3437) for all primary reading material.