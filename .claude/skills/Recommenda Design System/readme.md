# Recommenda — Design System

**Recommenda** is a recommendation app where friends recommend media to each other — **books and films** first, with music, podcasts and articles to follow. The voice is warm, playful and a little too-cool-for-school; the look is bold paper-and-ink: warm cream pages, deep royal blue, near-black hand-line illustrations.

> **Brand-vs-reference note.** The product brief is *Recommenda*. The supplied reference screenshots are of a different brand ("Cool Cat's Club", a coffee app). Per direction, we **adopted that visual language** — cream + royal blue + heavy grotesque + hand-drawn sunglasses-cat line art — and applied it to Recommenda. No Cool Cat's copy or coffee assets were carried over; the cat illustrations were redrawn as reading/film cats.

## Sources
- **Reference screenshots** (visual language only): mounted locally as `untitled folder/Screenshot 2026-06-22 at 23.08.18.png` and `…23.08.53.png`. Copies kept in `_refs/` for reference.
- No codebase or Figma was provided — foundations were sampled directly from the screenshots (exact colors via canvas pixel sampling).

---

## CONTENT FUNDAMENTALS — how Recommenda writes

- **Voice:** warm, witty, confident, a touch cheeky. Talks like a friend with great taste, never like a corporation or an algorithm.
- **Person:** second person — talks to *you* ("What your friends love", "Add to your shelf", "Tell them why they'll love it"). The product refers to itself sparingly.
- **Casing:** Headlines and section titles are **sentence case** ("Recommended for you"), not Title Case. Eyebrows/labels are **UPPERCASE** with wide tracking. The wordmark is **ALL CAPS**.
- **Length:** short and punchy. Recommendation notes are one human sentence ("The desert chapters live in my head rent-free." / "Watch it, then call your dad.").
- **Taglines** use the handwritten font and lowercase: *"come for the rec, stay for the taste."* — echoing the reference's *"come for the Brew, Stay for the vibes"*.
- **No emoji** in UI chrome. Personality comes from copy + illustration, not emoji.
- **Numbers/stats** are minimal and human ("Recommended by 2 friends", "24 given").

Examples in product: greeting `Tuesday evening` → headline `What your friends love`; empty state `Your shelf is empty / Tap the heart on a rec to save it here.`; success `Rec sent!`.

---

## VISUAL FOUNDATIONS

- **Palette:** warm cream paper `#F8F1E3` (page), deep royal blue `#002A8B` (primary), warm near-black ink `#1B1A1F` (line art + text). That trio *is* the brand. Status colors are muted and warm. See `tokens/colors.css`.
- **Backgrounds:** flat solid fields — cream paper, or full-bleed royal blue panels (splash, profile header, curation call-outs). **No gradients, no photo washes, no textures.**
- **Type:** one workhorse grotesque, **Hanken Grotesk**, across display (weight 900, tight −0.03em tracking, uppercase wordmarks), headings (800) and body (400–600). **Shantell Sans** is the handwritten accent — taglines, recommendation notes, stickers only; never body or UI labels. See `tokens/typography.css`. *(Both are Google Fonts substitutes — see Caveats.)*
- **Illustration:** _removed — the brand team will supply their own._ Screens reserve space for illustration in moments of delight (splash) and empty states; drop new art into `assets/illustrations/` and reference it there. Keep whatever style you choose loose and on-palette.
- **Corners:** generous and friendly. Buttons & chips are **full pills** (999px); cards are **24–28px**; bottom sheets 32px. See `tokens/radius.css`.
- **Cards:** warm paper (`--cream-50`) with a **2px ink border** — structure comes from the *line*, not a shadow. `--color-border-soft` (subtle) for most groupings, full ink for the bold hand-lined look.
- **Elevation:** the brand is **flat**. Shadows are reserved for floating product imagery (`--shadow-photo`, soft + warm) and overlays/sheets. Never hard grey drop shadows. See `tokens/shadow.css`.
- **Buttons / hover / press:** primary = filled blue, cream text; secondary = transparent w/ 2px blue border; ghost = text only. **Hover** deepens the fill (or tints `--blue-50`); **press** shrinks to `scale(0.97)`. Active toggles tint blue.
- **Spacing:** 4px grid (`--space-1`…`--space-12`); 20px mobile gutter. See `tokens/spacing.css`.
- **Motion:** quick and physical — 120–180ms ease on background/transform. No bounces, no infinite loops, no parallax.
- **Transparency/blur:** essentially none in-brand (the iOS device frame's glass is the OS chrome, not Recommenda). Keep surfaces opaque paper.
- **Imagery vibe:** we use **colour-block covers** (blue / ink / cream tiles with the title set in display caps) instead of stock art — intentional, on-palette, no warm/cool photo treatment to manage.

---

## ICONOGRAPHY
- **UI icons:** a small **Lucide-style stroke set** — 2.2px stroke, round caps/joins, 24px grid — matching the brand's bold line weight. Hand-authored inline in `ui_kits/mobile/icons.jsx` (Search, Heart, Plus, Home, Shelf, User, Book, Film, Back, Bell, Share, Star, Check, Chevron, Send, X, Sparkle). **For production, swap for [`lucide-react`](https://lucide.dev)** — identical visual language.
- **No icon font, no emoji, no unicode glyphs** as icons.
- **Illustrations are not icons** — illustration art is brand-supplied (none ship currently) and used at large sizes for splash and empty states; icons stay in the stroke set above.
- **Logo mark:** `assets/logo/recommenda-mark.svg` (blue tile) and `recommenda-mark-inverse.svg` (cream tile, for blue backgrounds) — a placeholder star "recommend" mark. _Swap in your own brand mark; same filenames keep the lockup and splash wired up._

---

## INDEX

**Root**
- `styles.css` — global entry point (the file consumers link); `@import` manifest only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadow.css`, `base.css`.
- `assets/logo/` — `recommenda-mark.svg`, `recommenda-mark-inverse.svg`.
- `_refs/` — reference screenshots + working crops (not shipped).

**Components** (`window.RecommendaDesignSystem_<hash>.<Name>`)
- core/ — `Button`, `IconButton`
- forms/ — `Input`, `Textarea`, `SegmentedControl`
- display/ — `Badge`, `Tag`, `Avatar`, `Card`, `MediaCard`

**Foundation cards** — `guidelines/*.card.html` (Colors, Type, Spacing, Brand).

**UI kits**
- `ui_kits/mobile/` — interactive mobile app: Splash → Feed → Detail → Recommend (Add) → Profile. See its `README.md`.

**Skill** — `SKILL.md` (Agent-Skills compatible).
