import React from 'react';

/** Small status / category label. Pill, compact, set in caps for eyebrows. */
export function Badge({
  children,
  variant = 'accent',
  size = 'md',
  uppercase = false,
  style = {},
}) {
  const variants = {
    accent: { background: 'var(--blue-50)', color: 'var(--color-accent)', border: '1.5px solid transparent' },
    solid: { background: 'var(--color-accent)', color: 'var(--color-on-accent)', border: '1.5px solid transparent' },
    neutral: { background: 'var(--cream-200)', color: 'var(--ink-700)', border: '1.5px solid var(--color-border-soft)' },
    outline: { background: 'transparent', color: 'var(--ink-800)', border: '1.5px solid var(--color-border)' },
    success: { background: 'var(--success-soft)', color: 'var(--success)', border: '1.5px solid transparent' },
    warning: { background: 'var(--warning-soft)', color: 'var(--warning)', border: '1.5px solid transparent' },
    danger: { background: 'var(--danger-soft)', color: 'var(--danger)', border: '1.5px solid transparent' },
  };
  const v = variants[variant] || variants.accent;
  const dims = size === 'sm' ? { fontSize: 11, padding: '3px 9px' } : { fontSize: 13, padding: '5px 12px' };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        letterSpacing: uppercase ? '0.06em' : '-0.005em',
        textTransform: uppercase ? 'uppercase' : 'none',
        borderRadius: 'var(--radius-pill)',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...dims,
        ...v,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
