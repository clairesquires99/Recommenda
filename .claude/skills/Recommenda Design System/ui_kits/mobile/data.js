/* Recommenda UI kit — fake content. window.RECO_DATA */
(function () {
  const friends = {
    mia:  { name: 'Mia Rose',     handle: '@miareads' },
    ed:   { name: 'Sir Edward',   handle: '@edthethird' },
    jon:  { name: 'Jon Park',     handle: '@jonp' },
    ava:  { name: 'Ava Lim',      handle: '@avawatches' },
    theo: { name: 'Theo M.',      handle: '@theo' },
  };

  // Cover palette — minimalist colour-block covers (no stock art).
  const C = {
    blue: 'var(--blue-700)', ink: 'var(--ink-900)', deep: 'var(--blue-900)',
    cream: 'var(--cream-300)', mid: 'var(--blue-600)',
  };

  const recs = [
    { id:'dune', type:'Book',  title:'Dune', creator:'Frank Herbert', cover:C.deep, coverText:'cream',
      genres:['Sci-fi','Epic'], year:2021, meta:'688 pages',
      by:[ {who:'mia', note:'The desert chapters live in my head rent-free.'},
           {who:'theo', note:'Read it before the films. Trust me.'} ],
      blurb:'A desert planet, a noble house, and the most coveted substance in the universe.' },
    { id:'past-lives', type:'Film', title:'Past Lives', creator:'Celine Song', cover:C.blue, coverText:'cream',
      genres:['Drama','Romance'], year:2023, meta:'1h 45m',
      by:[ {who:'ava', note:'I cried on the subway afterwards. Worth it.'} ],
      blurb:'Two childhood friends reconnect over two decades and one fateful week in New York.' },
    { id:'klara', type:'Book', title:'Klara and the Sun', creator:'Kazuo Ishiguro', cover:C.mid, coverText:'cream',
      genres:['Sci-fi','Literary'], year:2021, meta:'320 pages',
      by:[ {who:'ed', note:'Chosen carefully. Quietly devastating.'} ],
      blurb:'An artificial friend observes the strange, tender world of the humans she serves.' },
    { id:'paddington', type:'Film', title:'Paddington 2', creator:'Paul King', cover:C.cream, coverText:'ink',
      genres:['Comedy','Family'], year:2017, meta:'1h 43m',
      by:[ {who:'jon', note:'The single nicest film ever made. Fight me.'},
           {who:'mia', note:'Pure serotonin.'} ],
      blurb:'A polite bear clears his name and reminds a city to be kind.' },
    { id:'pachinko', type:'Book', title:'Pachinko', creator:'Min Jin Lee', cover:C.ink, coverText:'cream',
      genres:['Historical','Family'], year:2017, meta:'496 pages',
      by:[ {who:'ava', note:'Four generations. I was wrecked and grateful.'} ],
      blurb:'A sweeping saga of a Korean family making a life in 20th-century Japan.' },
    { id:'aftersun', type:'Film', title:'Aftersun', creator:'Charlotte Wells', cover:C.deep, coverText:'cream',
      genres:['Drama'], year:2022, meta:'1h 41m',
      by:[ {who:'theo', note:'Watch it, then call your dad.'} ],
      blurb:'A daughter remembers a holiday with her young father, twenty years on.' },
  ];

  window.RECO_DATA = { friends, recs };
})();
