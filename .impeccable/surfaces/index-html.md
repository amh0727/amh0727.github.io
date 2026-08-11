---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["index.css","render.js","data.js","i18n/ja.js","i18n/en.js","i18n/ko.js"]
---

# Surface brief — index.html

## Scope and audience

- Mode: experience / researcher portfolio.
- Primary audience: researchers and prospective collaborators.
- Primary job: understand Minhyoung An's research focus and education context, inspect publications and awards, copy a correct BibTeX citation, and reach verified external profiles.

## Approved direction

- Composition: `.impeccable/mocks/comp-c.webp` (Question-led Index), approved with a concise-copy constraint.
- Visual references: Apple Machine Learning Research, Google Research researcher profiles, and polished MIT/Stanford faculty homepages.
- Cool white and pale gray surfaces, near-black type, restrained cobalt links, thin rules, no cards, gradients, glass, portrait, decorative illustration, magazine collage, or startup-style hero.

## Composition commitments

- Slim utility header with identity, section navigation, language control, and all verified external destinations.
- Keep the name once at small sticky-header scale; the first viewport splits evenly between research profile and education without repeating the name as a hero.
- Compact research-interest group inside the profile column using existing ACM CCS terms.
- Dense publication bibliography as the dominant body, followed by awards; education is not repeated as a list.
- Responsive mobile flow retains publication and citation actions without a side rail.

## Component grammar

- Semantic regions separated by 1px rules; square or subtly rounded controls only.
- System/neo-grotesk sans type with restrained scale, clear hierarchy, and 65–75ch reading measure.
- Cobalt is limited to links, active filters, and focus states. No elevation.
- Interactions: year filtering, publication links, expandable BibTeX, BibTeX copy, language switching, email copy.

## Truth boundary

- Use only repository content from `data.js` and i18n files.
- The generated mock's sample questions, authors, dates, and actions are placeholders and must not be literalized.
- Replace invented research questions with the verified short research description and existing ACM research interests.
- Show ORCID, GitHub, and Email because they are configured. Do not fabricate Google Scholar or CV URLs while their values are empty.
