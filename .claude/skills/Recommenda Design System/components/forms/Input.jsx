import React from 'react';

/** Text input — paper field with a soft ink border, pill or rounded. */
export function Input({
  value,
  defaultValue,
  placeholder,
  type = 'text',
  disabled = false,
  invalid = false,
  shape = 'rounded',
  leadingIcon = null,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = invalid
    ? 'var(--danger)'
    : focus
      ? 'var(--color-accent)'
      : 'var(--color-border-soft)';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--cream-50)',
        border: `2px solid ${border}`,
        borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)',
        padding: '0 16px',
        minHeight: 50,
        opacity: disabled ? 0.5 : 1,
        transition: 'border-color .15s ease',
        ...style,
      }}
    >
      {leadingIcon && <span style={{ display: 'flex', color: 'var(--ink-400)' }}>{leadingIcon}</span>}
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontFamily: 'var(--font-sans)',
          fontSize: 16,
          fontWeight: 500,
          color: 'var(--ink-800)',
          padding: '13px 0',
          minWidth: 0,
        }}
        {...rest}
      />
    </div>
  );
}
