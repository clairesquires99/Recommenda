Selectable filter chip for genres, topics and media filters. Toggles to a filled blue pill when `selected`.

```jsx
<Tag selected={g==='Sci-fi'} onClick={()=>setG('Sci-fi')}>Sci-fi</Tag>
<Tag onRemove={()=>removeTopic('Thriller')}>Thriller</Tag>
```
