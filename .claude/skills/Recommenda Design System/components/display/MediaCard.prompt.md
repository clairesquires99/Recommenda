The core recommendation feed unit — composes Badge, Avatar and IconButton. Shows the cover, media-type badge, title + creator, an optional handwritten note, who recommended it, and a heart to save.

```jsx
<MediaCard
  title="Dune"
  creator="Frank Herbert"
  type="Book"
  coverSrc="/covers/dune.jpg"
  recommenderName="Mia R."
  note="The desert chapters live in my head rent-free."
  saved={saved}
  onToggleSave={() => setSaved(!saved)}
/>
```
Pass `coverColor` for a tasteful fallback when there's no `coverSrc`.
