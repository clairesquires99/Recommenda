import React from 'react';

/** Selectable filter chip — topics, genres, media filters. Toggles to filled blue. */
export function Tag({
  children,
  selected = false,
  leadingIcon = null,
  onClick,
  onRemove,
  disabled = false,
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return (
    <span
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 600,
        padding: '8px 14px',
        borderRadius: 'var(--radius-pill)',
        cursor: interactive && !disabled ? 'pointer' : 'default',
        opacity: disabled ? 0.5 : 1,
        userSelect: 'none',
        transition: 'background .15s ease, border-color .15s ease, color .15s ease',
        background: selected ? 'var(--color-accent)' : hover && interactive ? 'var(--cream-100)' : 'transparent',
        color: selected ? 'var(--color-on-accent)' : 'var(--ink-700)',
        border: `2px solid ${selected ? 'var(--color-accent)' : 'var(--color-border-soft)'}`,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {leadingIcon}
      {children}
      {onRemove && (
        <span
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{ marginLeft: 2, marginRight: -2, cursor: 'pointer', fontWeight: 700, opacity: 0.7, lineHeight: 1 }}
        >
          ×
        </span>
      )}
    </span>
  );
}
