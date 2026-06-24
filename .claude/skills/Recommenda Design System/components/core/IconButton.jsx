import React from 'react';

/**
 * Round / square icon button — for back arrows, hearts, overflow menus.
 * Bordered "outline" by default; "solid" filled blue; "ghost" bare.
 */
export function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  shape = 'circle',
  active = false,
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = { sm: 36, md: 44, lg: 52 };
  const d = dims[size] || dims.md;

  const variants = {
    solid: {
      background: hover ? 'var(--color-accent-hover)' : 'var(--color-accent)',
      color: 'var(--color-on-accent)',
      border: '2px solid transparent',
    },
    outline: {
      background: hover ? 'var(--cream-100)' : 'transparent',
      color: active ? 'var(--color-accent)' : 'var(--ink-800)',
      border: '2px solid var(--color-border)',
    },
    ghost: {
      background: hover ? 'rgba(27,26,31,0.06)' : 'transparent',
      color: active ? 'var(--color-accent)' : 'var(--ink-800)',
      border: '2px solid transparent',
    },
  };
  const v = variants[variant] || variants.ghost;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: d,
        height: d,
        flex: 'none',
        borderRadius: shape === 'circle' ? 'var(--radius-pill)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background .15s ease, transform .12s ease',
        ...v,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
