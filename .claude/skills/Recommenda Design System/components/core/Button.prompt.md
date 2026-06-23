The primary pill button for any Recommenda action — use `primary` for the main action on a screen, `secondary` (ink-outlined) for alternates, `ghost` for low-emphasis links.

```jsx
<Button variant="primary" size="lg" fullWidth>Add to your shelf</Button>
<Button variant="secondary">Skip</Button>
<Button variant="ghost" trailingIcon={<ArrowIcon/>}>See all</Button>
```

Variants: `primary` (filled royal blue), `secondary` (transparent, 2px blue border), `ink` (filled near-black), `ghost` (text only). Sizes `sm | md | lg`. Always a full pill. Press shrinks to 0.97; hover deepens the fill. Pass `leadingIcon` / `trailingIcon` as nodes.
