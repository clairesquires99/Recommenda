/* Profile screen */
(function () {
  const NS = window.RecommendaDesignSystem_f7975c;
  const { Avatar, Badge, MediaCard, SegmentedControl, IconButton } = NS;
  const { Icons, RecoParts, RECO_DATA } = window;
  const { CoverTile, TabBar } = RecoParts;

  function Profile({ onOpen, saved, toggleSave, onNav }) {
    const [tab, setTab] = React.useState('shelf');
    const shelf = RECO_DATA.recs.filter((r) => saved[r.id]);
    const given = RECO_DATA.recs.slice(2, 5);

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--color-bg)' }}>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {/* blue header band */}
          <div style={{ background: 'var(--color-accent)', padding: '56px 20px 22px', color: 'var(--cream-100)' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton ariaLabel="Settings" variant="ghost" style={{ color: 'var(--cream-100)' }}><Icons.Chevron size={22} /></IconButton>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: -8 }}>
              <Avatar name="You" size="lg" style={{ background: 'var(--cream-100)', color: 'var(--color-accent)', boxShadow: '0 0 0 3px var(--blue-600)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26, letterSpacing: '-0.02em' }}>You</div>
                <div style={{ color: 'var(--blue-200)', fontWeight: 600, fontSize: 14 }}>@you · taste curator</div>
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-hand)', fontSize: 16, color: 'var(--cream-100)', marginTop: 12, opacity: .95 }}>
              come for the rec, stay for the taste.
            </div>
            {/* stats */}
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {[['24', 'given'], [String(shelf.length), 'on shelf'], ['38', 'friends']].map(([n, l]) => (
                <div key={l} style={{ flex: 1, background: 'var(--blue-600)', borderRadius: 'var(--radius-lg)', padding: '12px 10px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22 }}>{n}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--blue-200)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '18px 20px 24px' }}>
            <SegmentedControl fullWidth value={tab} onChange={setTab}
              options={[{ label: 'Shelf', value: 'shelf' }, { label: 'Given', value: 'given' }]} />

            {tab === 'shelf' && (
              shelf.length ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 16 }}>
                  {shelf.map((r) => (
                    <div key={r.id} onClick={() => onOpen(r.id)} style={{ height: 150, cursor: 'pointer' }}>
                      <CoverTile rec={r} radius="var(--radius-md)" />
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px 20px', color: 'var(--ink-500)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--ink-700)', marginTop: 4 }}>Your shelf is empty</div>
                  <div style={{ fontSize: 14, marginTop: 4 }}>Tap the heart on a rec to save it here.</div>
                </div>
              )
            )}

            {tab === 'given' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
                {given.map((r) => (
                  <MediaCard key={r.id} title={r.title} creator={r.creator} type={r.type} coverColor={r.cover}
                    recommenderName="You" note={r.by[0].note}
                    saved={!!saved[r.id]} onToggleSave={() => toggleSave(r.id)} onClick={() => onOpen(r.id)} />
                ))}
              </div>
            )}
          </div>
        </div>
        <TabBar active="profile" onNav={onNav} />
      </div>
    );
  }

  window.Profile = Profile;
})();
