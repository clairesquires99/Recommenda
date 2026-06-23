/* Feed (home) screen */
(function () {
  const NS = window.RecommendaDesignSystem_f7975c;
  const { Avatar, Badge, MediaCard, SegmentedControl, Input } = NS;
  const { Icons, RecoParts, RECO_DATA } = window;
  const { CoverTile, TabBar } = RecoParts;

  function Feed({ onOpen, saved, toggleSave, onNav }) {
    const [tab, setTab] = React.useState('all');
    const recs = RECO_DATA.recs.filter((r) => tab === 'all' || (tab === 'books' ? r.type === 'Book' : r.type === 'Film'));
    const popular = RECO_DATA.recs.slice(0, 5);

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--color-bg)' }}>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {/* Header */}
          <div style={{ padding: '54px 20px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 13, color: 'var(--ink-500)', fontWeight: 600 }}>Tuesday evening</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', color: 'var(--ink-700)', lineHeight: 1.05, marginTop: 2 }}>
                  What your<br/>friends love
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button aria-label="Notifications" style={{ width: 44, height: 44, borderRadius: '999px', border: '2px solid var(--color-border-soft)', background: 'var(--cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--ink-700)' }}>
                  <Icons.Bell size={20} />
                </button>
                <Avatar name="You" ring />
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <Input shape="pill" placeholder="Search books & films" leadingIcon={<Icons.Search size={18} />} />
            </div>

            <div style={{ marginTop: 14 }}>
              <SegmentedControl fullWidth value={tab} onChange={setTab}
                options={[{ label: 'All', value: 'all' }, { label: 'Books', value: 'books' }, { label: 'Films', value: 'films' }]} />
            </div>
          </div>

          {/* Popular rail */}
          <div style={{ marginTop: 24 }}>
            <SectionEyebrow icon={<Icons.Sparkle size={15} />} text="Popular this week" pad />
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '12px 20px 4px', scrollbarWidth: 'none' }}>
              {popular.map((r) => (
                <div key={r.id} onClick={() => onOpen(r.id)} style={{ width: 116, height: 156, flex: 'none', cursor: 'pointer' }}>
                  <CoverTile rec={r} radius="var(--radius-lg)" />
                </div>
              ))}
            </div>
          </div>

          {/* Recommended list */}
          <div style={{ marginTop: 18, padding: '0 20px 24px' }}>
            <SectionEyebrow text="Recommended for you" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
              {recs.map((r) => (
                <MediaCard key={r.id} title={r.title} creator={r.creator} type={r.type}
                  coverColor={r.cover}
                  recommenderName={RECO_DATA.friends[r.by[0].who].name}
                  note={r.by[0].note}
                  saved={!!saved[r.id]} onToggleSave={() => toggleSave(r.id)}
                  onClick={() => onOpen(r.id)} />
              ))}
            </div>
          </div>
        </div>
        <TabBar active="home" onNav={onNav} />
      </div>
    );
  }

  function SectionEyebrow({ text, icon, pad }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--ink-700)', padding: pad ? '0 20px' : 0 }}>
        {icon && <span style={{ color: 'var(--color-accent)', display: 'flex' }}>{icon}</span>}
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.07em', textTransform: 'uppercase' }}>{text}</span>
      </div>
    );
  }

  window.Feed = Feed;
})();
