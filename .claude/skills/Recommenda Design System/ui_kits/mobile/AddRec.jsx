/* Add / send a recommendation screen */
(function () {
  const NS = window.RecommendaDesignSystem_f7975c;
  const { Button, IconButton, Avatar, Badge, Textarea, Input } = NS;
  const { Icons, RecoParts, RECO_DATA } = window;
  const { CoverTile } = RecoParts;

  function AddRec({ onClose }) {
    const [picked, setPicked] = React.useState(null);
    const [note, setNote] = React.useState('');
    const [friends, setFriends] = React.useState({});
    const [sent, setSent] = React.useState(false);
    const fids = Object.keys(RECO_DATA.friends);
    const chosenCount = Object.values(friends).filter(Boolean).length;
    const canSend = picked && chosenCount > 0;

    if (sent) {
      return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)', padding: 32, textAlign: 'center' }}>
          <h1 style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-0.03em', marginTop: 8 }}>Rec sent!</h1>
          <p style={{ color: 'var(--ink-500)', fontSize: 16, marginTop: 8, maxWidth: 260 }}>
            {chosenCount} {chosenCount === 1 ? 'friend' : 'friends'} just got a great taste recommendation.
          </p>
          <div style={{ marginTop: 22 }}><Button size="lg" onClick={onClose}>Back to feed</Button></div>
        </div>
      );
    }

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--color-bg)' }}>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '52px 16px 6px' }}>
            <IconButton ariaLabel="Close" variant="ghost" onClick={onClose}><Icons.X size={22} /></IconButton>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18 }}>Recommend</span>
            <span style={{ width: 44 }} />
          </div>

          <div style={{ padding: '8px 20px 0' }}>
            {/* 1. pick media */}
            <Label n="1" text="What are you recommending?" />
            {!picked && <div style={{ marginTop: 10 }}><Input shape="pill" placeholder="Search a title…" leadingIcon={<Icons.Search size={18} />} /></div>}
            <div style={{ display: 'flex', gap: 10, overflowX: 'auto', padding: '12px 0 4px', scrollbarWidth: 'none' }}>
              {(picked ? [RECO_DATA.recs.find((r) => r.id === picked)] : RECO_DATA.recs.slice(0, 5)).map((r) => (
                <div key={r.id} onClick={() => setPicked(r.id)} style={{ width: picked ? 96 : 92, height: picked ? 130 : 124, flex: 'none', cursor: 'pointer', outline: picked === r.id ? '3px solid var(--color-accent)' : 'none', outlineOffset: 2, borderRadius: 'var(--radius-lg)' }}>
                  <CoverTile rec={r} radius="var(--radius-lg)" />
                </div>
              ))}
            </div>
            {picked && <button onClick={() => setPicked(null)} style={{ background: 'none', border: 'none', color: 'var(--color-accent)', fontWeight: 700, fontSize: 13, cursor: 'pointer', padding: '4px 0' }}>Change</button>}

            {/* 2. note */}
            <div style={{ marginTop: 22 }}>
              <Label n="2" text="Add a note" />
              <div style={{ marginTop: 10 }}>
                <Textarea rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Tell them why they'll love it…" />
              </div>
            </div>

            {/* 3. friends */}
            <div style={{ marginTop: 22, paddingBottom: 16 }}>
              <Label n="3" text="Send to" />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 12 }}>
                {fids.map((id) => {
                  const f = RECO_DATA.friends[id];
                  const on = !!friends[id];
                  return (
                    <button key={id} onClick={() => setFriends((s) => ({ ...s, [id]: !s[id] }))}
                      style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px 6px 6px', borderRadius: '999px', cursor: 'pointer',
                        background: on ? 'var(--color-accent)' : 'var(--cream-50)', color: on ? 'var(--cream-100)' : 'var(--ink-700)',
                        border: `2px solid ${on ? 'var(--color-accent)' : 'var(--color-border-soft)'}`, fontWeight: 700, fontSize: 14 }}>
                      <Avatar size="sm" name={f.name} />
                      {f.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '12px 20px 30px', background: 'var(--cream-50)', borderTop: '2px solid var(--color-border-soft)' }}>
          <Button size="lg" fullWidth disabled={!canSend} onClick={() => setSent(true)} trailingIcon={<Icons.Send size={20} />}>
            {chosenCount > 0 ? `Send to ${chosenCount}` : 'Send recommendation'}
          </Button>
        </div>
      </div>
    );
  }

  function Label({ n, text }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 24, height: 24, borderRadius: '999px', background: 'var(--color-accent)', color: 'var(--cream-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, flex: 'none' }}>{n}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--ink-700)', letterSpacing: '-0.01em' }}>{text}</span>
      </div>
    );
  }

  window.AddRec = AddRec;
})();
