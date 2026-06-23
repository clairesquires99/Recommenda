import React from 'react';

/** Friend avatar — image or initials, optional blue ring. */
export function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  style = {},
}) {
  const dims = { xs: 24, sm: 32, md: 44, lg: 64 };
  const d = dims[size] || dims.md;
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: d,
        height: d,
        flex: 'none',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--blue-100)',
        color: 'var(--color-accent)',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: d * 0.4,
        letterSpacing: '-0.02em',
        overflow: 'hidden',
        boxShadow: ring ? '0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-accent)' : 'none',
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        initials || '?'
      )}
    </span>
  );
}
