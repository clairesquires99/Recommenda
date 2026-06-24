import React from 'react';

/**
 * Segmented control — the Books / Films toggle. Full-pill track,
 * the active segment is a filled blue pill that slides into place.
 */
export function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  style = {},
}) {
  const norm = options.map((o) => (typeof o === 'string' ? { label: o, value: o } : o));
  const pad = size === 'sm' ? '6px 14px' : '10px 20px';
  const fs = size === 'sm' ? 13 : 15;
  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex',
        width: fullWidth ? '100%' : 'auto',
        background: 'var(--cream-200)',
        border: '2px solid var(--color-border-soft)',
        borderRadius: 'var(--radius-pill)',
        padding: 4,
        gap: 4,
        ...style,
      }}
    >
      {norm.map((o) => {
        const selected = o.value === value;
        return (
          <button
            key={o.value}
            role="tab"
            aria-selected={selected}
            onClick={() => onChange && onChange(o.value)}
            style={{
              flex: fullWidth ? 1 : 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              padding: pad,
              fontFamily: 'var(--font-sans)',
              fontSize: fs,
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              borderRadius: 'var(--radius-pill)',
              background: selected ? 'var(--color-accent)' : 'transparent',
              color: selected ? 'var(--color-on-accent)' : 'var(--ink-500)',
              transition: 'background .18s ease, color .18s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {o.icon}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
