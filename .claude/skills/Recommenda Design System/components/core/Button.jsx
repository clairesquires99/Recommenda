import React from 'react';

/**
 * Recommenda Button — pill-shaped, ink-bordered, paper-warm.
 * Variants: primary (filled royal blue), secondary (ink-outlined paper),
 * ghost (text-only). Press shrinks slightly; hover deepens.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  leadingIcon = null,
  trailingIcon = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { fontSize: 14, padding: '8px 16px', gap: 8, minHeight: 36 },
    md: { fontSize: 16, padding: '12px 24px', gap: 8, minHeight: 48 },
    lg: { fontSize: 18, padding: '15px 30px', gap: 10, minHeight: 56 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: hover ? 'var(--color-accent-hover)' : 'var(--color-accent)',
      color: 'var(--color-on-accent)',
      border: '2px solid transparent',
    },
    secondary: {
      background: hover ? 'var(--blue-50)' : 'transparent',
      color: 'var(--color-accent)',
      border: '2px solid var(--color-accent)',
    },
    ink: {
      background: hover ? 'var(--ink-800)' : 'var(--ink-900)',
      color: 'var(--cream-100)',
      border: '2px solid transparent',
    },
    ghost: {
      background: hover ? 'var(--blue-50)' : 'transparent',
      color: 'var(--color-accent)',
      border: '2px solid transparent',
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: s.fontSize,
        lineHeight: 1,
        letterSpacing: '-0.01em',
        padding: s.padding,
        minHeight: s.minHeight,
        width: fullWidth ? '100%' : 'auto',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
        transition: 'transform .12s ease, background .15s ease',
        whiteSpace: 'nowrap',
        ...v,
        ...style,
      }}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
