import React from 'react';

/** Surface container. Bordered paper by default; filled or inverse (blue) variants. */
export function Card({
  children,
  variant = 'bordered',
  padding = 20,
  radius = 'var(--radius-card)',
  onClick,
  style = {},
  ...rest
}) {
  const variants = {
    bordered: { background: 'var(--color-surface)', border: '2px solid var(--color-border-soft)', color: 'var(--ink-800)' },
    strong: { background: 'var(--color-surface)', border: '2px solid var(--color-border)', color: 'var(--ink-800)' },
    filled: { background: 'var(--cream-200)', border: '2px solid transparent', color: 'var(--ink-800)' },
    inverse: { background: 'var(--color-surface-inverse)', border: '2px solid transparent', color: 'var(--cream-100)' },
  };
  const v = variants[variant] || variants.bordered;
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: radius,
        padding,
        cursor: onClick ? 'pointer' : 'default',
        ...v,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
