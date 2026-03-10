# Creative Direction

Use this reference when choosing or refining a visual direction before implementation.

## Design Thinking Questions

Answer these first:

1. Purpose: what core job does this interface perform?
2. Audience: who uses it, in what context, with what urgency?
3. Tone: which visual personality should dominate?
4. Constraints: brand requirements, accessibility targets, technical limits.
5. Differentiation: what one visual or interaction idea should users remember?

## Direction Catalog

Pick one primary direction and one secondary influence.

| Direction | Best for | Key cues |
|---|---|---|
| Brutally minimal | Premium SaaS, productivity, editorial | high contrast, strict spacing, restrained motion |
| Maximalist | Creative brands, campaigns, entertainment | layered textures, dense compositions, strong accents |
| Retro-futuristic | Tech launches, gaming, concept products | neon accents, chrome/glass blends, bold type |
| Organic/natural | Wellness, sustainability, lifestyle | warm neutrals, natural textures, soft curves |
| Luxury/refined | Beauty, hospitality, high-end ecommerce | elegant serif + clean sans, generous white space |
| Playful/toy-like | Education, family products, creator tools | vivid palette, soft geometry, lively microstates |
| Editorial/magazine | Media, storytelling, portfolios | expressive typography hierarchy, asymmetry |
| Brutalist/raw | Experimental products, art-tech | heavy blocks, hard edges, unapologetic contrast |
| Art deco/geometric | Premium branding, events | geometric motifs, ornamental lines, symmetry |
| Industrial/utilitarian | Data-heavy apps, enterprise tools | functional layout, clear state encoding |
| Glassmorphism | Modern dashboards, ambient UIs | translucent layers, soft blur, controlled glow |
| Bento grid | Feature-rich homepages, product overviews | modular cards, varied block scale |

## Execution Rules

### Typography

1. Choose characterful fonts; avoid default and overused safe stacks.
2. Do not default to Inter/Roboto/Arial/system stack unless explicitly requested.
3. Pair a distinctive display/headline family with a readable body family.
4. Keep line-height in a readable range (usually 1.5-1.75 for long-form body text).
5. Use consistent type scale and weight mapping across components.

### Color and Theme

1. Commit to a focused palette with clear dominant and accent roles.
2. Define tokens via CSS variables or theme objects.
3. Ensure text and surface contrast stays readable in all states.
4. Avoid default purple-gradient-on-white aesthetics unless explicitly requested.

### Motion and Interaction

1. Use 150-300ms for most micro-interactions.
2. Animate transform/opacity before layout properties.
3. Make high-impact moments intentional (entry choreography, staged reveals).
4. Respect `prefers-reduced-motion` with reduced or disabled animation variants.

### Spatial Composition

1. Use deliberate composition choices: asymmetry, overlap, offset grids, or strict rhythm.
2. Match density to product goals: sparse for focus, dense for power-user workflows.
3. Control scan paths with hierarchy, contrast, and grouping.

### Background and Atmosphere

1. Prefer layered backgrounds over flat single-color fills.
2. Use gradients, textures, patterns, grain, or subtle shape systems to add depth.
3. Keep effects consistent with tone; avoid visual noise that fights readability.

## Anti-Generic Guardrails

Avoid these outcomes:

1. Cookie-cutter layouts with no context-specific identity.
2. Recycled font choices across unrelated projects.
3. Random decorative animation without UX purpose.
4. Unclear hierarchy caused by uniform spacing and similar visual weights.
5. Heavy visual effects that reduce readability or interaction clarity.

## Creativity Space

Keep room for originality while preserving quality:

1. Reuse principles, not page clones.
2. Keep one signature differentiator per project (type, layout, motion, or texture).
3. If requirements are broad, present 2-3 distinct directions before final implementation.
4. Keep novelty intentional; preserve usability and accessibility.

## Direction Brief Template

Use this structure before coding:

```text
Project:
Primary direction:
Secondary influence:
Audience + task context:
Typography pairing:
Palette intent:
Motion language:
Differentiator:
Constraints:
```

If the user is undecided, present 2-3 direction options and proceed with the selected one.
