# System Build Playbook

Use this reference for implementation strategy, stack choices, and final quality checks.

## Priority Model

Apply rules in this order:

| Priority | Category | Impact |
|---|---|---|
| 1 | Accessibility | Critical |
| 2 | Touch and Interaction | Critical |
| 3 | Performance | High |
| 4 | Layout and Responsive | High |
| 5 | Typography and Color | Medium |
| 6 | Animation | Medium |
| 7 | Style Selection | Medium |
| 8 | Charts and Data | Low |

Do not sacrifice higher-priority categories for stylistic preferences.

## Build Workflow

### Step 1. Analyze Requirements

Extract:

1. Product type (SaaS, ecommerce, portfolio, dashboard, service site, mobile app).
2. Style keywords (minimal, elegant, playful, dark, brutalist, glass, etc.).
3. Industry context (fintech, healthcare, beauty, education, gaming, enterprise).
4. Stack expectations (React, Next.js, Vue, Svelte, native, or plain web).

### Step 2. Define Design System

Produce a concise system before implementation:

1. Pattern choice (layout style and component architecture).
2. Visual style choice (tone, density, texture strategy).
3. Palette (base + semantic states + contrast-safe text roles).
4. Typography (heading/body pairing + scale).
5. Effects (shadows, borders, blurs, radius, motion tokens).
6. Anti-patterns to avoid for this project.

### Step 3. Expand Details as Needed

When gaps remain, deepen only relevant domains:

| Need | Focus |
|---|---|
| More visual differentiation | style direction and composition |
| Better readability and hierarchy | typography and spacing |
| Stronger data presentation | chart selection and data UI |
| Fewer UX regressions | accessibility and interaction rules |
| Better conversion flow | landing structure and CTA hierarchy |

### Step 4. Apply Stack-Specific Patterns

Use stack defaults that match project constraints:

| Stack | Focus |
|---|---|
| html-tailwind | Rapid implementation, responsive utility styling |
| react | Component composition, state management, rendering performance |
| nextjs | SSR/SSG strategy, routing, image optimization |
| vue | Composition API patterns, state and route coherence |
| svelte | Lean runtime, reactive ergonomics, transition control |
| swiftui | Native layout/state/navigation patterns |
| react-native | Touch ergonomics, list performance, navigation states |
| flutter | Widget composition, theming, device adaptation |
| shadcn | Accessible primitives, component consistency, theme integration |
| jetpack-compose | State hoisting, recomposition safety, adaptive layout |

If stack is unspecified, choose the most direct stack already used by the codebase.
If no stack is present and task is web, default to `html-tailwind`.
If no stack is present and task is mobile, use platform-native patterns.

## Professional UI Guardrails

### Icons and Visual Elements

1. Use SVG icon systems (Heroicons, Lucide, Simple Icons) for consistency.
2. Keep icon size and viewbox consistent across similar components.
3. Verify official brand marks before shipping logo usage.
4. Avoid emoji icons in production UI unless explicitly requested.

### Interaction and Cursor

1. Add pointer cursor and clear affordance for clickable elements.
2. Use hover/active/focus states with visible contrast change.
3. Avoid hover transforms that cause layout shift.
4. Keep transition durations responsive (normally <= 300ms).

### Light and Dark Contrast

1. Ensure text contrast remains readable in light and dark themes.
2. In light mode, avoid overly transparent surfaces that hide boundaries.
3. Keep border visibility explicit; do not rely on ultra-low-opacity borders.
4. Verify muted text still meets usability expectations.

### Layout and Spacing

1. Keep container widths and spacing scales consistent.
2. Reserve space for fixed headers/navs so content is not hidden.
3. Prevent horizontal overflow on mobile.
4. Test at common breakpoints (375, 768, 1024, 1440 minimum).

## Data and Chart Selection

Pick chart type by information intent:

1. Trend over time: line/area.
2. Category comparison: bar/column.
3. Part-to-whole: pie/donut (few categories only).
4. Distribution: histogram/box plot.
5. Funnel conversion: funnel chart.
6. Correlation: scatter plot.

Always provide accessible labels and a non-chart fallback when needed.

## Pre-Delivery Checklist

### Visual Quality

1. Visual direction is distinct and coherent.
2. Iconography is consistent and non-emoji for core UI.
3. Hover states are stable and do not shift layout.
4. Tokens are used instead of scattered hard-coded values.

### Interaction

1. Clickable elements have clear affordance.
2. Keyboard navigation and focus states are visible.
3. Async actions expose loading and disabled states.
4. Error feedback is specific and placed near the issue.

### Theme and Contrast

1. Both light and dark variants keep readable contrast.
2. Surface layers and borders remain visible.
3. Text hierarchy remains clear in both modes.

### Layout and Responsiveness

1. No hidden content behind fixed elements.
2. No horizontal scrolling on target breakpoints.
3. Empty/long-content states keep layout stable.

### Accessibility

1. Images have meaningful alt text or empty alt for decorative usage.
2. Form inputs have labels and programmatic associations.
3. Color is not the only status indicator.
4. Reduced-motion preference is respected.

Use this checklist before final output in build and redesign modes.

## Creativity Without Template Lock-In

1. Avoid shipping the same layout skeleton across unrelated projects.
2. Start from design tokens and interaction principles, then compose new layouts.
3. Treat starter patterns as optional scaffolding, never final identity.
4. If using `assets/primitives/`, retheme and recombine before final delivery.
