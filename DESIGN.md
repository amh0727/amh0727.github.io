---
name: Minhyoung An Research Index
description: A concise multilingual index of research, publications, and verified academic identity.
colors:
  cool-paper: "#f7f8fa"
  white-surface: "#ffffff"
  ink: "#17191d"
  body-ink: "#343941"
  muted-ink: "#565d68"
  soft-ink: "#737b87"
  research-cobalt: "#075ccf"
  research-cobalt-hover: "#03479f"
  research-cobalt-soft: "#eaf2ff"
  rule: "#dfe3e8"
  rule-strong: "#c8ced6"
  focus-cobalt: "rgba(7, 92, 207, .26)"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Hiragino Sans, Yu Gothic UI, Noto Sans CJK JP, Noto Sans KR, sans-serif"
    fontSize: ".92rem"
    fontWeight: 680
    lineHeight: 1
    letterSpacing: "-.015em"
  headline:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Hiragino Sans, Yu Gothic UI, Noto Sans CJK JP, Noto Sans KR, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 680
    lineHeight: 1.2
    letterSpacing: "-.025em"
  title:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Hiragino Sans, Yu Gothic UI, Noto Sans CJK JP, Noto Sans KR, sans-serif"
    fontSize: "1rem"
    fontWeight: 650
    lineHeight: 1.46
    letterSpacing: "-.012em"
  body:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Hiragino Sans, Yu Gothic UI, Noto Sans CJK JP, Noto Sans KR, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Hiragino Sans, Yu Gothic UI, Noto Sans CJK JP, Noto Sans KR, sans-serif"
    fontSize: ".74rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "normal"
  mono:
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace"
    fontSize: ".7rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  square: "0"
  control: "4px"
spacing:
  micro: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
components:
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
  navigation-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.research-cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
  publication-filter:
    backgroundColor: "transparent"
    textColor: "{colors.soft-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    height: "32px"
  publication-filter-active:
    backgroundColor: "transparent"
    textColor: "{colors.research-cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    height: "32px"
  citation-copy:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.muted-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "3px 9px"
    height: "30px"
---

# Design System: Minhyoung An Research Index

## Overview

**Creative North Star: "The Research Index"**

The system presents an academic record as a precise working index: concise, institutional, and personal without becoming brand-heroic. Profile and education occupy equal adjacent columns, while publications and awards form the primary lists.

Its character comes from a cool paper field, near-black ink, restrained Research Cobalt, and a disciplined hierarchy of rules. Every treatment should help a visitor scan, verify, open, filter, or cite the work.

**Key Characteristics:**

- Cool, quiet, and information-forward.
- Flat structure defined by rules and tonal surfaces.
- Compact multilingual controls and bibliography-first density.
- Precise, restrained component behavior.

## Colors

Cool Paper and White Surface create a quiet academic field; Ink carries evidence, while Research Cobalt is reserved for links, active states, selection, and focus.

### Primary

- **Research Cobalt:** Signals actionable scholarly destinations and current control state; its darker companion is the hover treatment and its pale companion is used for selection.

### Neutral

- **Cool Paper:** The page and control ground.
- **White Surface:** The expanded BibTeX surface.
- **Ink and Body Ink:** Primary headings, names, and long-form explanation.
- **Muted Ink and Soft Ink:** Metadata, navigation, labels, and supporting details.
- **Rule and Strong Rule:** Row boundaries, section boundaries, rails, and quiet control structure.

### Named Rules

**The Cobalt Means Action Rule.** Use the accent for links, active filters, active navigation, copied feedback, selection, and visible focus; do not spread it across passive surfaces.

## Typography

**Display Font:** Inter with system, Japanese, and Korean sans-serif fallbacks

**Body Font:** Inter with the same multilingual system fallback stack
**Label/Mono Font:** The sans stack for interface labels; SFMono-Regular with system monospace fallbacks for BibTeX

**Character:** A neo-grotesk sans keeps multilingual scholarship direct and contemporary. Tight heading tracking and compact metadata establish hierarchy without theatrical scale.

### Hierarchy

- **Display:** The researcher name appears once as a compact site title in the sticky header; it is not repeated in the profile column.
- **Headline:** Section headings above strong rules.
- **Title:** Publication and award titles, including external-title affordances.
- **Body:** Biography and explanatory text; research copy stays within a 68-character measure.
- **Label:** Navigation, filters, years, metadata, and actions.
- **Mono:** Copyable BibTeX records only.

### Named Rules

**The Evidence Before Scale Rule.** Use weight, spacing, and rules before increasing type size; the name stays at header-label scale and is never repeated as a hero.

## Layout

The desktop page is capped at 1180px with 24px minimum gutters. The 940px intro splits evenly into profile and education columns separated by a thin vertical rule; research interests stay inside the profile column to keep the top dense. On mobile the columns stack and the rule becomes horizontal. The body then becomes a fluid main column plus a 132px sticky contents rail with a 72px gap. Publication and award rows reserve an 88px metadata column.

At 1050px, header navigation is removed, profile targets grow to 44px, and the rail narrows. At 760px, the rail and site identity disappear, gutters become 18px, the content becomes a single column, and bibliography metadata narrows to 62px. Below 480px, publication and award rows stack and the citation copy action moves above the code.

## Elevation & Depth

The system is flat. It uses no shadows, gradients, glass, or simulated elevation; hierarchy comes from one-pixel rules, White Surface against Cool Paper, typography, and spacing. Focus is conveyed by a three-pixel translucent cobalt outline rather than lift.

### Named Rules

**The Flat Evidence Rule.** Surfaces stay on one plane; use rules and restrained tonal contrast to organize information.

## Shapes

The form language is square and linear. Navigation, language controls, filters, rows, and the BibTeX panel have square corners; only the compact citation-copy control uses the subtle control radius. Borders are one-pixel neutral rules, never decorative frames.

## Components

### Navigation

Header and side-rail links expose only Publications and Awards. They are compact muted labels that become Research Cobalt on hover or when active. The desktop header is sticky with a bottom rule; primary section links disappear below 1050px, and the side rail disappears below 760px. All links receive the shared visible focus outline.

### Language Switch

Three transparent text buttons sit after a vertical rule. The active language is cobalt and underlined with a four-pixel offset; hover returns inactive labels to Ink. On mobile, the full language names collapse to two-letter codes.

### Publication Year Filters

Filters are borderless, square, transparent labels on a ruled row. Hover shifts Soft Ink to Ink; the active year uses Research Cobalt for both text and a one-pixel bottom rule. Filtering hides nonmatching publication rows without changing their structure.

### Publication and BibTeX Row

Each publication is a two-column bibliography row separated by a rule. The left column carries tabular year and type; the right carries title, authors, venue metadata, optional resource links, and an expandable BibTeX disclosure. External titles gain a small cobalt arrow, and the researcher name is emphasized within the author list.

Japanese publications may include an English display title directly below the official title in the English and Korean interfaces. The display translation uses muted text and never replaces the official title stored in BibTeX.

The open BibTeX panel uses White Surface, a neutral border, and compact mono text. Its copy action is positioned at the upper right on larger screens and shifts above the code on narrow screens. Hover and copied states turn its text and border cobalt; copied feedback returns to the original label after 1.5 seconds.

### External Profile Links

Verified destinations use transparent icon-and-label links in muted text; email uses the same appearance as a copy button. Hover and successful copy become cobalt. At narrower widths, labels disappear while 44px icon targets remain. Only configured destinations are rendered.

## Do's and Don'ts

### Do:

- **Do** keep publications and citation actions visually dominant through density, rules, and clear metadata.
- **Do** reserve Research Cobalt for meaningful interaction and current state.
- **Do** preserve keyboard focus, reduced-motion behavior, high-contrast overrides, and responsive access to language and citation controls.
- **Do** use verified profile destinations and repository-backed publication content only.

### Don't:

- **Don't** introduce flashy AI-startup styling, gradients, glass, or decorative imagery.
- **Don't** turn bibliography rows into cards or add shadows.
- **Don't** use a magazine or editorial collage composition.
- **Don't** create a giant-name hero or brand-heroic voice.
