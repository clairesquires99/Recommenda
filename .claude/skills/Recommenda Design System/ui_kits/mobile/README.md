# Recommenda — Mobile UI Kit

Interactive, click-through recreation of the Recommenda phone app, composed from the design-system components and wrapped in an iOS device frame.

Open **`index.html`**.

## Flow

**Splash** → _Get started_ → **Feed** (Home) → tap a rec → **Detail** → save it. The bottom tab's **＋** opens **Recommend** (pick a title → note → friends → send). The **You** tab opens **Profile** (shelf grid + given list).

## Screens

- `Splash.jsx` — blue onboarding with wordmark, cat illustration, handwritten tagline.
- `Feed.jsx` — greeting header, search, Books/Films/All toggle, "Popular this week" cover rail, "Recommended for you" `MediaCard` list, bottom tab bar.
- `Detail.jsx` — hero colour-block cover, meta chips, blurb, "Recommended by N friends" with handwritten notes, sticky _Add to your shelf_.
- `AddRec.jsx` — 3-step recommend flow (pick media → note → friends) with a sent confirmation.
- `Profile.jsx` — blue header band, stats, Shelf/Given segmented views, empty state.

## Supporting files

- `App.jsx` — routing + shared `saved` state, wraps screens in `IOSDevice`.
- `parts.jsx` — `CoverTile` (minimalist colour-block covers) + `TabBar`. → `window.RecoParts`
- `icons.jsx` — Lucide-style stroke icons. → `window.Icons`
- `data.js` — fake friends + recommendations. → `window.RECO_DATA`
- `ios-frame.jsx` — device bezel starter (`window.IOSDevice`).

## How it loads

React + Babel + `../../_ds_bundle.js` (the compiled component library) load first, then `data.js`, `icons.jsx`, `parts.jsx`, then the JSX screens, then App mounts and a small script scales the 402×874 device to fit the viewport. Components are read from `window.RecommendaDesignSystem_<hash>`.

> Covers are intentional colour-blocks (no stock imagery). Swap `data.js` cover values / add `coverSrc` to use real artwork.
