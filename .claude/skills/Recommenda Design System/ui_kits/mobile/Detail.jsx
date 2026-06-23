/* Recommendation detail screen */
(function () {
  const NS = window.RecommendaDesignSystem_f7975c;
  const { Button, IconButton, Badge, Avatar, Tag } = NS;
  const { Icons, RecoParts, RECO_DATA } = window;
  const { CoverTile } = RecoParts;

  function Heart({ filled }) { return <Icons.Heart size={20} fill={filled ? 'var(--color-accent)' : 'none'} />; }

  function Detail({ rec, saved, toggleSave, onBack }) {
    if (!rec) return null;
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--color-bg)' }}>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {/* top bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '52px 16px 4px', position: 'sticky', top: 0 }}>
            <IconButton ariaLabel="Back" variant="outline" onClick={onBack} style={{ background: 'var(--cream-50)' }}><Icons.Back size={20} /></IconButton>
            <div style={{ display: 'flex', gap: 10 }}>
              <IconButton ariaLabel="Share" variant="outline" style={{ background: 'var(--cream-50)' }}><Icons.Share size={18} /></IconButton>
              <IconButton ariaLabel="Save" variant="outline" active={saved} onClick={toggleSave} style={{ background: 'var(--cream-50)' }}><Heart filled={saved} /></IconButton>
            </div>
          </div>

          {/* hero cover */}
          <div style={{ display: 'flex', justifyContent: 'center', padding: '14px 0 6px' }}>
            <div style={{ width: 176, height: 240, filter: 'drop-shadow(var(--shadow-photo))' }}>
              <CoverTile rec={rec} radius="var(--radius-lg)" />
            </div>
          </div>

          <div style={{ padding: '14px 22px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
              <Badge variant="accent" uppercase>{rec.type}</Badge>
            </div>
            <h1 style={{ textAlign: 'center', fontSize: 32, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.02 }}>{rec.title}</h1>
            <div style={{ textAlign: 'center', color: 'var(--ink-500)', fontWeight: 600, marginTop: 6, fontSize: 15 }}>{rec.creator}</div>

            {/* meta chips */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginTop: 14 }}>
              <Badge variant="neutral" size="sm">{rec.year}</Badge>
              <Badge variant="neutral" size="sm">{rec.meta}</Badge>
              {rec.genres.map((g) => <Badge key={g} variant="outline" size="sm">{g}</Badge>)}
            </div>

            <p style={{ marginTop: 18, color: 'var(--ink-700)', fontSize: 16, lineHeight: 1.55, textAlign: 'center' }}>{rec.blurb}</p>

            {/* recommended by */}
            <div style={{ marginTop: 24, marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--ink-700)', marginBottom: 12 }}>
                Recommended by {rec.by.length} {rec.by.length === 1 ? 'friend' : 'friends'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {rec.by.map((b) => {
                  const f = RECO_DATA.friends[b.who];
                  return (
                    <div key={b.who} style={{ display: 'flex', gap: 12, background: 'var(--cream-50)', border: '2px solid var(--color-border-soft)', borderRadius: 'var(--radius-lg)', padding: 14 }}>
                      <Avatar name={f.name} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, color: 'var(--ink-700)', fontSize: 15 }}>{f.name}</div>
                        <div style={{ fontFamily: 'var(--font-hand)', color: 'var(--color-accent)', fontSize: 16, lineHeight: 1.3, marginTop: 3 }}>“{b.note}”</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* sticky footer */}
        <div style={{ padding: '12px 20px 30px', background: 'var(--cream-50)', borderTop: '2px solid var(--color-border-soft)' }}>
          <Button variant={saved ? 'secondary' : 'primary'} size="lg" fullWidth onClick={toggleSave}
            leadingIcon={saved ? <Icons.Check size={20} /> : null}>
            {saved ? 'On your shelf' : 'Add to your shelf'}
          </Button>
        </div>
      </div>
    );
  }

  window.Detail = Detail;
})();
