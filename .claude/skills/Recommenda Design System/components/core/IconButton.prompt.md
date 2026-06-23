Icon-only button for navigation and toggles — back arrows, the favourite heart, overflow menus. Always pass `ariaLabel`.

```jsx
<IconButton ariaLabel="Go back" variant="ghost"><ArrowLeft/></IconButton>
<IconButton ariaLabel="Save" variant="outline" active={saved}><Heart/></IconButton>
```

`variant`: `solid` (filled blue), `outline` (2px ink border on paper), `ghost` (bare). `shape`: `circle` (default) or `square`. Set `active` to tint the glyph blue for an on state.
