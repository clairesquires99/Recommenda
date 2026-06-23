/*
 * ============================================================
 * RECOMMENDA DESIGN TOKEN MAP → NativeWind / Tailwind
 * ============================================================
 *
 * COLORS
 * ──────
 * Design token            Value         NativeWind class
 * --blue-700 (PRIMARY)    #002A8B       bg-brand / text-brand / border-brand
 * --blue-800              #001F66       bg-brand-dark
 * --blue-900              #001A5C       bg-brand-darker
 * --blue-600              #173BA0       bg-brand-600
 * --blue-500              #2E50C0       bg-brand-500  (focus ring)
 * --blue-200              #B9C4EA       bg-brand-200  (muted on inverse)
 * --blue-100              #DDE3F5       bg-brand-100
 * --blue-50               #EEF1FB       bg-brand-50   (hover tint)
 * --cream-100 (PAGE BG)   #F8F1E3       bg-paper / text-paper
 * --cream-50  (SURFACE)   #FCF8F0       bg-surface
 * --cream-200             #F1E8D6       bg-cream-200
 * --cream-300             #E8DDC7       bg-cream-300
 * --ink-900 (BORDER)      #1B1A1F       text-ink / border-ink
 * --ink-800 (TEXT)        #232026       text-ink-800
 * --ink-700 (HEADINGS)    #292A31       text-ink-700
 * --ink-500 (SECONDARY)   #6B675F       text-ink-500
 * --ink-400 (MUTED)       #928D83       text-ink-400
 * --ink-300 (PLACEHOLDER) #B6B0A4       text-ink-300
 * --taupe-200 (DISABLED)  #D7D0C2       bg-taupe-200
 * --success               #1F7A4D       text-ds-success
 * --success-soft          #E2EFE7       bg-ds-success-soft
 * --warning               #B5761B       text-ds-warning
 * --warning-soft          #F5ECDB       bg-ds-warning-soft
 * --danger                #B23A2E       text-ds-danger
 * --danger-soft           #F4E2DF       bg-ds-danger-soft
 * --color-border-soft     rgba(27,26,31,0.16)  border-ink/16
 *
 * RADIUS
 * ──────
 * --radius-xs    8px    rounded-ds-xs
 * --radius-sm   12px    rounded-ds-sm
 * --radius-md   16px    rounded-ds-md
 * --radius-lg   24px    rounded-ds-lg
 * --radius-card 28px    rounded-ds-card
 * --radius-sheet 32px   rounded-ds-sheet
 * --radius-pill 999px   rounded-ds-pill
 *
 * SPACING (4px grid — maps 1:1 to Tailwind's default scale)
 * ──────
 * --space-1   4px  → p-1, m-1, gap-1
 * --space-2   8px  → p-2, m-2, gap-2
 * --space-3  12px  → p-3, m-3, gap-3
 * --space-4  16px  → p-4, m-4, gap-4
 * --space-5  20px  → p-5, m-5, gap-5   (= --gutter)
 * --space-6  24px  → p-6, m-6, gap-6
 * --space-7  32px  → p-8, m-8, gap-8
 * --space-8  40px  → p-10
 * --space-9  48px  → p-12
 * --space-10 64px  → p-16
 *
 * TYPOGRAPHY
 * ──────────
 * --font-display / --font-sans  HankenGrotesk  → font-sans / font-display
 * --font-hand                   ShantellSans   → font-hand
 * --text-display clamp(44–76px) → text-ds-display
 * --text-h1      40px           → text-ds-h1
 * --text-h2      30px           → text-ds-h2
 * --text-h3      24px           → text-ds-h3
 * --text-h4      20px           → text-ds-h4
 * --text-body-lg 18px           → text-ds-body-lg (or text-lg in Tailwind)
 * --text-body    16px           → text-base (Tailwind default)
 * --text-sm      14px           → text-sm (Tailwind default)
 * --text-xs      12px           → text-xs (Tailwind default)
 * --fw-regular   400            → font-normal
 * --fw-medium    500            → font-medium
 * --fw-semibold  600            → font-semibold
 * --fw-bold      700            → font-bold
 * --fw-extra     800            → font-extrabold
 * --fw-black     900            → font-black
 * --tracking-display -0.03em   → tracking-ds-display
 * --tracking-tight   -0.015em  → tracking-ds-tight
 * --tracking-wide     0.08em   → tracking-ds-wide
 *
 * BUTTON HEIGHTS
 * ──────────────
 * sm 36px → min-h-[36px]
 * md 48px → min-h-[48px]  (default)
 * lg 56px → min-h-[56px]
 * ============================================================
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Brand blue
        brand: {
          DEFAULT: "#002A8B",
          dark:    "#001F66",
          darker:  "#001A5C",
          600:     "#173BA0",
          500:     "#2E50C0",
          200:     "#B9C4EA",
          100:     "#DDE3F5",
          50:      "#EEF1FB",
        },
        // Cream / paper
        paper:   "#F8F1E3",
        surface: "#FCF8F0",
        cream: {
          200: "#F1E8D6",
          300: "#E8DDC7",
        },
        // Warm ink
        ink: {
          DEFAULT: "#1B1A1F",
          800:     "#232026",
          700:     "#292A31",
          500:     "#6B675F",
          400:     "#928D83",
          300:     "#B6B0A4",
        },
        taupe: {
          200: "#D7D0C2",
        },
        // Status
        ds: {
          success:      "#1F7A4D",
          "success-soft": "#E2EFE7",
          warning:      "#B5761B",
          "warning-soft": "#F5ECDB",
          danger:       "#B23A2E",
          "danger-soft":  "#F4E2DF",
        },
      },
      borderRadius: {
        "ds-xs":    "8px",
        "ds-sm":    "12px",
        "ds-md":    "16px",
        "ds-lg":    "24px",
        "ds-card":  "28px",
        "ds-sheet": "32px",
        "ds-pill":  "999px",
      },
      fontFamily: {
        // Weights 400/500/600 — regular body
        sans:    ["HankenGrotesk_400Regular", "HankenGrotesk_500Medium", "system-ui", "sans-serif"],
        // Weight 800/900 — display / headings
        display: ["HankenGrotesk_800ExtraBold", "HankenGrotesk_900Black", "system-ui", "sans-serif"],
        // Handwritten accent
        hand:    ["ShantellSans_400Regular", "ShantellSans_600SemiBold", "cursive"],
      },
      fontSize: {
        "ds-display": ["44px",  { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "ds-h1":      ["40px",  { lineHeight: "1.18", letterSpacing: "-0.03em" }],
        "ds-h2":      ["30px",  { lineHeight: "1.18", letterSpacing: "-0.03em" }],
        "ds-h3":      ["24px",  { lineHeight: "1.18", letterSpacing: "-0.02em" }],
        "ds-h4":      ["20px",  { lineHeight: "1.18", letterSpacing: "-0.01em" }],
        "ds-body-lg": ["18px",  { lineHeight: "1.5"  }],
        "ds-eyebrow": ["12px",  { lineHeight: "1",   letterSpacing: "0.08em"  }],
      },
      letterSpacing: {
        "ds-display": "-0.03em",
        "ds-tight":   "-0.015em",
        "ds-wide":    "0.08em",
      },
      minHeight: {
        "btn-sm": "36px",
        "btn-md": "48px",
        "btn-lg": "56px",
      },
    },
  },
  plugins: [],
};
