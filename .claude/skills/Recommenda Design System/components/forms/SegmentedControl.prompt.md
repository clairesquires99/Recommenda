Pill segmented toggle for switching between a small set of views — the Books / Films switch is the canonical use.

```jsx
const [tab, setTab] = React.useState('books');
<SegmentedControl
  fullWidth
  options={[{label:'Books', value:'books'}, {label:'Films', value:'films'}]}
  value={tab}
  onChange={setTab}
/>
```
Best for 2–3 options. Active segment is a filled blue pill. For more options use Tabs/chips instead.
