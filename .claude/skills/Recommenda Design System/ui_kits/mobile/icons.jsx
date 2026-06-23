/* Recommenda UI kit — shared icon set.
   Lucide-style 2.2px stroke, round caps — matches the brand's bold line aesthetic.
   For production, swap for lucide-react (identical visual language). */
(function () {
  const S = ({ d, size = 22, sw = 2.2, fill = 'none', children }) =>
    React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill, stroke: 'currentColor', strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' },
      d ? React.createElement('path', { d }) : children);

  const Icons = {
    Search: (p) => S({ ...p, children: [React.createElement('circle',{key:'c',cx:11,cy:11,r:7}), React.createElement('path',{key:'l',d:'m20 20-3.4-3.4'})] }),
    Heart: (p) => S({ ...p, fill: p && p.fill, d: 'M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1Z' }),
    Plus: (p) => S({ ...p, d: 'M12 5v14M5 12h14' }),
    Home: (p) => S({ ...p, children: [React.createElement('path',{key:'1',d:'M4 10.5 12 4l8 6.5'}), React.createElement('path',{key:'2',d:'M6 9.5V20h12V9.5'})] }),
    Shelf: (p) => S({ ...p, children: [React.createElement('rect',{key:'1',x:4,y:4,width:5,height:16,rx:1.2}), React.createElement('rect',{key:'2',x:11,y:4,width:5,height:16,rx:1.2}), React.createElement('path',{key:'3',d:'M18.2 6.4 21 7.1 18.6 20l-2.8-.7'})] }),
    User: (p) => S({ ...p, children: [React.createElement('circle',{key:'1',cx:12,cy:8,r:4}), React.createElement('path',{key:'2',d:'M4.5 20a7.5 7.5 0 0 1 15 0'})] }),
    Book: (p) => S({ ...p, children: [React.createElement('path',{key:'1',d:'M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5Z'}), React.createElement('path',{key:'2',d:'M5 19.5A1.5 1.5 0 0 0 6.5 21H19'})] }),
    Film: (p) => S({ ...p, children: [React.createElement('rect',{key:'1',x:3,y:4,width:18,height:16,rx:2}), React.createElement('path',{key:'2',d:'M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4'})] }),
    Back: (p) => S({ ...p, d: 'M19 12H5M11 6l-6 6 6 6' }),
    Bell: (p) => S({ ...p, children: [React.createElement('path',{key:'1',d:'M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8'}), React.createElement('path',{key:'2',d:'M13.7 21a2 2 0 0 1-3.4 0'})] }),
    Share: (p) => S({ ...p, children: [React.createElement('circle',{key:'1',cx:18,cy:5,r:2.5}), React.createElement('circle',{key:'2',cx:6,cy:12,r:2.5}), React.createElement('circle',{key:'3',cx:18,cy:19,r:2.5}), React.createElement('path',{key:'4',d:'m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6'})] }),
    Star: (p) => S({ ...p, fill: p && p.fill, d: 'M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 17l-5.3 2.8 1-5.8-4.2-4.1 5.9-.9z' }),
    Check: (p) => S({ ...p, d: 'M5 12.5 10 17 19 6' }),
    Chevron: (p) => S({ ...p, d: 'm9 6 6 6-6 6' }),
    Send: (p) => S({ ...p, children: [React.createElement('path',{key:'1',d:'M21 4 3 11l7 3 3 7 8-17Z'}), React.createElement('path',{key:'2',d:'m10 14 4-4'})] }),
    X: (p) => S({ ...p, d: 'M6 6l12 12M18 6 6 18' }),
    Sparkle: (p) => S({ ...p, d: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z' }),
  };
  window.Icons = Icons;
})();
