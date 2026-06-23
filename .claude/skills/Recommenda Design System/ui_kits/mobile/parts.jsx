/* Recommenda UI kit — shared layout parts. window.RecoParts */
(function () {
  const { Icons } = window;

  function CoverTile({ rec, radius = 'var(--radius-md)', style = {} }) {
    const onCream = rec.coverText === 'cream';
    const fg = onCream ? 'var(--cream-100)' : 'var(--ink-900)';
    const TypeIcon = rec.type === 'Film' ? Icons.Film : Icons.Book;
    return (
      React.createElement('div', { style: {
        position: 'relative', background: rec.cover, color: fg,
        borderRadius: radius, overflow: 'hidden', width: '100%', height: '100%',
        border: '1.5px solid var(--color-border-soft)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 12, boxSizing: 'border-box', ...style,
      }},
        React.createElement('div', { style: { position:'absolute', top:10, left:10, opacity:.9 } },
          React.createElement(TypeIcon, { size: 16, sw: 2.4 })),
        React.createElement('div', { style: {
          fontFamily: 'var(--font-display)', fontWeight: 900, lineHeight: .98,
          letterSpacing: '-0.03em', fontSize: 'clamp(15px, 3.4vw, 22px)',
          textTransform: 'uppercase', textWrap: 'balance',
        }}, rec.title),
        React.createElement('div', { style: { fontSize: 11, fontWeight: 600, opacity:.75, marginTop: 4 } }, rec.creator)
      )
    );
  }

  function TabBar({ active, onNav }) {
    const item = (key, Icon, label) => {
      const on = active === key;
      return React.createElement('button', {
        key, onClick: () => onNav(key),
        style: {
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
          background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0',
          color: on ? 'var(--color-accent)' : 'var(--ink-400)',
        },
      },
        React.createElement(Icon, { size: 23, sw: on ? 2.6 : 2.1, fill: on && key==='home' ? 'none' : 'none' }),
        React.createElement('span', { style: { fontSize: 10.5, fontWeight: on ? 800 : 600, letterSpacing: '.01em' } }, label)
      );
    };
    return React.createElement('div', { style: {
      display: 'flex', alignItems: 'center', padding: '8px 14px 26px',
      background: 'var(--cream-50)', borderTop: '2px solid var(--color-border-soft)', gap: 4,
    }},
      item('home', Icons.Home, 'Home'),
      item('search', Icons.Search, 'Browse'),
      React.createElement('div', { style: { flex: 1, display: 'flex', justifyContent: 'center' } },
        React.createElement('button', { onClick: () => onNav('add'), 'aria-label':'Recommend', style: {
          width: 54, height: 54, marginTop: -22, borderRadius: 'var(--radius-pill)',
          background: 'var(--color-accent)', color: 'var(--cream-100)', border: '3px solid var(--cream-50)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          boxShadow: 'var(--shadow-md)',
        }}, React.createElement(Icons.Plus, { size: 26, sw: 2.6 }))),
      item('shelf', Icons.Shelf, 'Shelf'),
      item('profile', Icons.User, 'You')
    );
  }

  window.RecoParts = { CoverTile, TabBar };
})();
