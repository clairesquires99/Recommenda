import React from 'react';

/** Multi-line note field — e.g. "why you're recommending this". */
export function Textarea({
  value,
  defaultValue,
  placeholder,
  rows = 4,
  disabled = false,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      onChange={onChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        background: 'var(--cream-50)',
        border: `2px solid ${focus ? 'var(--color-accent)' : 'var(--color-border-soft)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: '14px 16px',
        fontFamily: 'var(--font-sans)',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.5,
        color: 'var(--ink-800)',
        outline: 'none',
        resize: 'vertical',
        transition: 'border-color .15s ease',
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
      {...rest}
    />
  );
}
