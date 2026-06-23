/* App shell — routing + shared state, wrapped in the iOS device frame */
(function () {
  const { RECO_DATA } = window;

  function App() {
    const [route, setRoute] = React.useState('splash');
    const [sel, setSel] = React.useState(null);
    const [saved, setSaved] = React.useState({ dune: true, paddington: true });

    const toggleSave = (id) => setSaved((s) => ({ ...s, [id]: !s[id] }));
    const onOpen = (id) => { setSel(id); setRoute('detail'); };
    const onNav = (key) => {
      if (key === 'add') return setRoute('add');
      if (key === 'shelf' || key === 'profile') return setRoute('profile');
      return setRoute('home');
    };

    const rec = RECO_DATA.recs.find((r) => r.id === sel);
    let screen;
    if (route === 'splash') screen = <window.Splash onStart={() => setRoute('home')} />;
    else if (route === 'home') screen = <window.Feed onOpen={onOpen} saved={saved} toggleSave={toggleSave} onNav={onNav} />;
    else if (route === 'detail') screen = <window.Detail rec={rec} saved={!!saved[sel]} toggleSave={() => toggleSave(sel)} onBack={() => setRoute('home')} />;
    else if (route === 'add') screen = <window.AddRec onClose={() => setRoute('home')} />;
    else if (route === 'profile') screen = <window.Profile onOpen={onOpen} saved={saved} toggleSave={toggleSave} onNav={onNav} />;

    return <window.IOSDevice>{screen}</window.IOSDevice>;
  }

  window.RecoApp = App;
})();
