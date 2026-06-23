/* Splash / onboarding entry — mirrors the brand splash */
(function () {
  function Splash({ onStart }) {
    return (
      <div style={{ height: '100%', background: 'var(--color-accent)', color: 'var(--cream-100)', display: 'flex', flexDirection: 'column', padding: '64px 28px 36px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="./../../assets/logo/recommenda-mark-inverse.svg" style={{ width: 30 }} alt="" />
          <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: '.18em', color: 'var(--blue-200)' }}>RECOMMENDA</span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontFamily: "'Caveat Brush', cursive", fontWeight: 400, fontSize: 62, lineHeight: 1, letterSpacing: '0.01em', textTransform: 'uppercase', color: 'var(--cream-100)', whiteSpace: 'nowrap' }}>
            Recommenda
          </h1>
          <div style={{ fontFamily: 'var(--font-hand)', fontWeight: 600, fontSize: 26, lineHeight: 1.15, marginTop: 24, color: 'var(--cream-100)' }}>
            come for the rec,<br/>stay for the taste.
          </div>
          <p style={{ color: 'var(--blue-200)', fontSize: 15, marginTop: 12, maxWidth: 280 }}>
            Books and films your friends actually loved — no algorithms, just good taste.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button onClick={onStart} style={{ height: 56, borderRadius: '999px', border: 'none', background: 'var(--cream-100)', color: 'var(--color-accent)', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 17, cursor: 'pointer' }}>
            Get started
          </button>
          <button onClick={onStart} style={{ height: 52, borderRadius: '999px', background: 'transparent', border: '2px solid var(--blue-500)', color: 'var(--cream-100)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
            I already have an account
          </button>
        </div>
      </div>
    );
  }
  window.Splash = Splash;
})();
