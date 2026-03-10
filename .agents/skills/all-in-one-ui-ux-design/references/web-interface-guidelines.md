# Web Interface Guidelines

Use this reference for UI code review and compliance checks.

When auditing, read target files and check them against all categories below.
Output should be concise, high signal, and grouped by file.

## Accessibility

1. Icon-only buttons require `aria-label`.
2. Form controls require `<label>` or `aria-label`.
3. Interactive elements require keyboard handlers when needed.
4. Use `<button>` for actions, `<a>`/`<Link>` for navigation.
5. Images require `alt` (or empty alt when decorative).
6. Decorative icons should use `aria-hidden="true"`.
7. Async updates (toasts, validation) should expose `aria-live="polite"`.
8. Prefer semantic HTML before adding ARIA.
9. Keep heading hierarchy valid (`h1` -> `h6`).
10. Provide skip link for main content where applicable.
11. Use `scroll-margin-top` for heading anchors.

## Focus States

1. Interactive elements need visible focus styles.
2. Do not remove outline without equivalent replacement.
3. Prefer `:focus-visible` over `:focus` for pointer interactions.
4. Use `:focus-within` for grouped controls.

## Forms

1. Inputs need meaningful `name` and `autocomplete`.
2. Use correct input `type` and `inputmode`.
3. Do not block paste with `preventDefault`.
4. Ensure labels are clickable and correctly associated.
5. Disable spellcheck for emails/codes/usernames where relevant.
6. Keep checkbox/radio hit targets unified with labels.
7. Keep submit enabled until request starts; show loading state after.
8. Render inline errors near fields and focus first error on submit.
9. Use placeholders as examples, not labels.
10. Warn before losing unsaved changes.

## Animation

1. Respect `prefers-reduced-motion`.
2. Animate transform/opacity before layout-affecting properties.
3. Avoid `transition: all`; list properties explicitly.
4. Set intentional `transform-origin`.
5. For SVG transforms, wrap in `<g>` and set transform origin/box correctly.
6. Keep animations interruptible by user input.

## Typography and Copy Rendering

1. Use consistent heading and body rhythm.
2. Use tabular numerals for aligned numeric columns.
3. Balance heading wraps where supported (`text-wrap: balance` / `text-pretty`).
4. Keep loading labels explicit and consistent (`Loading...`, `Saving...`).

## Content Handling

1. Handle long text with truncate, clamp, or wrapping strategies.
2. Use `min-w-0` in flex children to allow truncation.
3. Define empty states explicitly.
4. Anticipate short, normal, and very long user-generated content.

## Images and Media

1. Set explicit width and height to reduce CLS.
2. Lazy-load below-the-fold media.
3. Prioritize above-the-fold critical images.

## Performance

1. Virtualize long lists (>50 items) when practical.
2. Avoid layout reads in render paths.
3. Batch DOM reads and writes.
4. Keep controlled input updates cheap.
5. Preconnect to critical external asset domains.
6. Preload critical fonts and use `font-display: swap`.

## Navigation and State

1. Keep meaningful UI state reflected in URL where practical.
2. Use real links for navigation (supports open-in-new-tab behavior).
3. Deep-link stateful views (filters, tabs, pagination) when possible.
4. Protect destructive actions with confirmation or undo patterns.

## Touch and Interaction

1. Use `touch-action: manipulation` on tap interactions as needed.
2. Set `-webkit-tap-highlight-color` intentionally.
3. Use `overscroll-behavior: contain` in modals/sheets/drawers.
4. During drag interactions, disable accidental selection.
5. Use `autoFocus` sparingly and avoid it by default on mobile.

## Safe Areas and Layout

1. Respect `env(safe-area-inset-*)` for full-bleed mobile layouts.
2. Prevent accidental horizontal scroll.
3. Prefer flex/grid layout systems over JS measurements.

## Dark Mode and Theming

1. Set `color-scheme: dark` for dark themes when appropriate.
2. Keep browser UI theme metadata aligned with page background.
3. Style native controls explicitly in dark mode where platform defaults break contrast.

## Locale and i18n

1. Format dates with `Intl.DateTimeFormat`.
2. Format numbers/currency with `Intl.NumberFormat`.
3. Detect language from browser/user preference signals, not IP heuristics alone.

## Hydration Safety

1. Inputs with `value` must pair with `onChange` (or use uncontrolled patterns).
2. Guard date/time rendering against server/client mismatch.
3. Use hydration suppression only when strictly necessary.

## Hover and Interactive States

1. Buttons/links/cards need visible hover feedback.
2. Hover/active/focus states should increase clarity, not reduce contrast.

## Content and Microcopy

1. Use active voice with direct actions.
2. Keep labels specific to user intent (for example, `Save API Key` instead of `Continue`).
3. Include recovery guidance in error messages.
4. Keep copy concise and user-centered.

## Anti-Patterns to Flag

1. Disabling zoom (`user-scalable=no`, `maximum-scale=1`).
2. Blocking paste in forms.
3. Using `transition: all`.
4. Removing outline with no replacement focus style.
5. Using non-semantic clickable `<div>`/`<span>` for button behavior.
6. Navigating via click handlers without real links.
7. Rendering images without explicit dimensions.
8. Rendering large maps/lists without virtualization strategy.
9. Inputs without labels.
10. Icon buttons without accessible names.
11. Hardcoded locale-dependent date/number formats.
12. Unjustified autofocus.

## Audit Output Format

Return findings in this format:

```text
## src/Button.tsx

src/Button.tsx:42 - icon button missing aria-label
src/Button.tsx:18 - input lacks label

## src/Modal.tsx

src/Modal.tsx:12 - missing overscroll-behavior: contain

## src/Card.tsx

pass
```

Rules:

1. Findings first, grouped by file.
2. Use `file:line` for each issue.
3. Keep each issue short and actionable.
4. If no issues in a file, mark `pass`.
5. Add residual risks if testing scope is limited.
