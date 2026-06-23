/* @ds-bundle: {"format":3,"namespace":"RecommendaDesignSystem_f7975c","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"MediaCard","sourcePath":"components/display/MediaCard.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Button.jsx":"0c719275000e","components/core/IconButton.jsx":"161b68afab11","components/display/Avatar.jsx":"432cf662ae14","components/display/Badge.jsx":"cf3dca786d75","components/display/Card.jsx":"835ad3b075dd","components/display/MediaCard.jsx":"1c5dd6f40e0f","components/display/Tag.jsx":"db4d631f8f34","components/forms/Input.jsx":"44fe12d215f4","components/forms/SegmentedControl.jsx":"a22137ab04c4","components/forms/Textarea.jsx":"5791d5537ddd","ui_kits/mobile/AddRec.jsx":"ff9215c10fa8","ui_kits/mobile/App.jsx":"23149f95e8a1","ui_kits/mobile/Detail.jsx":"9197311dc574","ui_kits/mobile/Feed.jsx":"da64aa73e81d","ui_kits/mobile/Profile.jsx":"aa2e15519903","ui_kits/mobile/Splash.jsx":"f9588182ae47","ui_kits/mobile/data.js":"0fa2db722ea8","ui_kits/mobile/icons.jsx":"4ed6d460f7db","ui_kits/mobile/ios-frame.jsx":"be3343be4b51","ui_kits/mobile/parts.jsx":"5c8262f3a4ee"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RecommendaDesignSystem_f7975c = window.RecommendaDesignSystem_f7975c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Recommenda Button — pill-shaped, ink-bordered, paper-warm.
 * Variants: primary (filled royal blue), secondary (ink-outlined paper),
 * ghost (text-only). Press shrinks slightly; hover deepens.
 */
function Button({
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
    sm: {
      fontSize: 14,
      padding: '8px 16px',
      gap: 8,
      minHeight: 36
    },
    md: {
      fontSize: 16,
      padding: '12px 24px',
      gap: 8,
      minHeight: 48
    },
    lg: {
      fontSize: 18,
      padding: '15px 30px',
      gap: 10,
      minHeight: 56
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: hover ? 'var(--color-accent-hover)' : 'var(--color-accent)',
      color: 'var(--color-on-accent)',
      border: '2px solid transparent'
    },
    secondary: {
      background: hover ? 'var(--blue-50)' : 'transparent',
      color: 'var(--color-accent)',
      border: '2px solid var(--color-accent)'
    },
    ink: {
      background: hover ? 'var(--ink-800)' : 'var(--ink-900)',
      color: 'var(--cream-100)',
      border: '2px solid transparent'
    },
    ghost: {
      background: hover ? 'var(--blue-50)' : 'transparent',
      color: 'var(--color-accent)',
      border: '2px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
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
      ...style
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Round / square icon button — for back arrows, hearts, overflow menus.
 * Bordered "outline" by default; "solid" filled blue; "ghost" bare.
 */
function IconButton({
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
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const d = dims[size] || dims.md;
  const variants = {
    solid: {
      background: hover ? 'var(--color-accent-hover)' : 'var(--color-accent)',
      color: 'var(--color-on-accent)',
      border: '2px solid transparent'
    },
    outline: {
      background: hover ? 'var(--cream-100)' : 'transparent',
      color: active ? 'var(--color-accent)' : 'var(--ink-800)',
      border: '2px solid var(--color-border)'
    },
    ghost: {
      background: hover ? 'rgba(27,26,31,0.06)' : 'transparent',
      color: active ? 'var(--color-accent)' : 'var(--ink-800)',
      border: '2px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
/** Friend avatar — image or initials, optional blue ring. */
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  style = {}
}) {
  const dims = {
    xs: 24,
    sm: 32,
    md: 44,
    lg: 64
  };
  const d = dims[size] || dims.md;
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/** Small status / category label. Pill, compact, set in caps for eyebrows. */
function Badge({
  children,
  variant = 'accent',
  size = 'md',
  uppercase = false,
  style = {}
}) {
  const variants = {
    accent: {
      background: 'var(--blue-50)',
      color: 'var(--color-accent)',
      border: '1.5px solid transparent'
    },
    solid: {
      background: 'var(--color-accent)',
      color: 'var(--color-on-accent)',
      border: '1.5px solid transparent'
    },
    neutral: {
      background: 'var(--cream-200)',
      color: 'var(--ink-700)',
      border: '1.5px solid var(--color-border-soft)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-800)',
      border: '1.5px solid var(--color-border)'
    },
    success: {
      background: 'var(--success-soft)',
      color: 'var(--success)',
      border: '1.5px solid transparent'
    },
    warning: {
      background: 'var(--warning-soft)',
      color: 'var(--warning)',
      border: '1.5px solid transparent'
    },
    danger: {
      background: 'var(--danger-soft)',
      color: 'var(--danger)',
      border: '1.5px solid transparent'
    }
  };
  const v = variants[variant] || variants.accent;
  const dims = size === 'sm' ? {
    fontSize: 11,
    padding: '3px 9px'
  } : {
    fontSize: 13,
    padding: '5px 12px'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. Bordered paper by default; filled or inverse (blue) variants. */
function Card({
  children,
  variant = 'bordered',
  padding = 20,
  radius = 'var(--radius-card)',
  onClick,
  style = {},
  ...rest
}) {
  const variants = {
    bordered: {
      background: 'var(--color-surface)',
      border: '2px solid var(--color-border-soft)',
      color: 'var(--ink-800)'
    },
    strong: {
      background: 'var(--color-surface)',
      border: '2px solid var(--color-border)',
      color: 'var(--ink-800)'
    },
    filled: {
      background: 'var(--cream-200)',
      border: '2px solid transparent',
      color: 'var(--ink-800)'
    },
    inverse: {
      background: 'var(--color-surface-inverse)',
      border: '2px solid transparent',
      color: 'var(--cream-100)'
    }
  };
  const v = variants[variant] || variants.bordered;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      borderRadius: radius,
      padding,
      cursor: onClick ? 'pointer' : 'default',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/MediaCard.jsx
try { (() => {
function Heart({
  filled
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: filled ? 'var(--color-accent)' : 'none',
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1Z"
  }));
}

/**
 * Recommendation card — the core feed unit. Cover thumbnail, media-type badge,
 * title + creator, and who recommended it. Horizontal row layout.
 */
function MediaCard({
  title,
  creator,
  type = 'Book',
  coverSrc,
  coverColor = 'var(--blue-100)',
  recommenderName,
  recommenderAvatar,
  note,
  saved = false,
  onToggleSave,
  onClick,
  style = {}
}) {
  const isFilm = String(type).toLowerCase().startsWith('film');
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      gap: 16,
      background: 'var(--color-surface)',
      border: '2px solid var(--color-border-soft)',
      borderRadius: 'var(--radius-card)',
      padding: 14,
      position: 'relative',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 96,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: coverColor,
      overflow: 'hidden',
      border: '1.5px solid var(--color-border-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, coverSrc && /*#__PURE__*/React.createElement("img", {
    src: coverSrc,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      paddingRight: 32
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "accent",
    size: "sm",
    uppercase: true
  }, isFilm ? 'Film' : type), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      lineHeight: 1.15,
      color: 'var(--ink-700)',
      letterSpacing: '-0.015em'
    }
  }, title), creator && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-500)',
      fontWeight: 500
    }
  }, creator), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontSize: 15,
      color: 'var(--color-accent)',
      lineHeight: 1.3
    }
  }, "\u201C", note, "\u201D"), recommenderName && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 'auto',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    size: "xs",
    name: recommenderName,
    src: recommenderAvatar
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-500)',
      fontWeight: 500
    }
  }, "Recommended by ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-700)',
      fontWeight: 700
    }
  }, recommenderName)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    ariaLabel: saved ? 'Remove from shelf' : 'Save to shelf',
    variant: "ghost",
    size: "sm",
    active: saved,
    onClick: e => {
      e.stopPropagation();
      onToggleSave && onToggleSave();
    }
  }, /*#__PURE__*/React.createElement(Heart, {
    filled: saved
  }))));
}
Object.assign(__ds_scope, { MediaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/MediaCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/** Selectable filter chip — topics, genres, media filters. Toggles to filled blue. */
function Tag({
  children,
  selected = false,
  leadingIcon = null,
  onClick,
  onRemove,
  disabled = false,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, leadingIcon, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      marginLeft: 2,
      marginRight: -2,
      cursor: 'pointer',
      fontWeight: 700,
      opacity: 0.7,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input — paper field with a soft ink border, pill or rounded. */
function Input({
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
  const border = invalid ? 'var(--danger)' : focus ? 'var(--color-accent)' : 'var(--color-border-soft)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
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
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--ink-400)'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--ink-800)',
      padding: '13px 0',
      minWidth: 0
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
/**
 * Segmented control — the Books / Films toggle. Full-pill track,
 * the active segment is a filled blue pill that slides into place.
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  style = {}
}) {
  const norm = options.map(o => typeof o === 'string' ? {
    label: o,
    value: o
  } : o);
  const pad = size === 'sm' ? '6px 14px' : '10px 20px';
  const fs = size === 'sm' ? 13 : 15;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      background: 'var(--cream-200)',
      border: '2px solid var(--color-border-soft)',
      borderRadius: 'var(--radius-pill)',
      padding: 4,
      gap: 4,
      ...style
    }
  }, norm.map(o => {
    const selected = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "tab",
      "aria-selected": selected,
      onClick: () => onChange && onChange(o.value),
      style: {
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
        whiteSpace: 'nowrap'
      }
    }, o.icon, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line note field — e.g. "why you're recommending this". */
function Textarea({
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
  return /*#__PURE__*/React.createElement("textarea", _extends({
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/AddRec.jsx
try { (() => {
/* Add / send a recommendation screen */
(function () {
  const NS = window.RecommendaDesignSystem_f7975c;
  const {
    Button,
    IconButton,
    Avatar,
    Badge,
    Textarea,
    Input
  } = NS;
  const {
    Icons,
    RecoParts,
    RECO_DATA
  } = window;
  const {
    CoverTile
  } = RecoParts;
  function AddRec({
    onClose
  }) {
    const [picked, setPicked] = React.useState(null);
    const [note, setNote] = React.useState('');
    const [friends, setFriends] = React.useState({});
    const [sent, setSent] = React.useState(false);
    const fids = Object.keys(RECO_DATA.friends);
    const chosenCount = Object.values(friends).filter(Boolean).length;
    const canSend = picked && chosenCount > 0;
    if (sent) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-bg)',
          padding: 32,
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement("h1", {
        style: {
          fontSize: 30,
          fontWeight: 900,
          letterSpacing: '-0.03em',
          marginTop: 8
        }
      }, "Rec sent!"), /*#__PURE__*/React.createElement("p", {
        style: {
          color: 'var(--ink-500)',
          fontSize: 16,
          marginTop: 8,
          maxWidth: 260
        }
      }, chosenCount, " ", chosenCount === 1 ? 'friend' : 'friends', " just got a great taste recommendation."), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 22
        }
      }, /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        onClick: onClose
      }, "Back to feed")));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-bg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '52px 16px 6px'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      ariaLabel: "Close",
      variant: "ghost",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(Icons.X, {
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 18
      }
    }, "Recommend"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 20px 0'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      n: "1",
      text: "What are you recommending?"
    }), !picked && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(Input, {
      shape: "pill",
      placeholder: "Search a title\u2026",
      leadingIcon: /*#__PURE__*/React.createElement(Icons.Search, {
        size: 18
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        overflowX: 'auto',
        padding: '12px 0 4px',
        scrollbarWidth: 'none'
      }
    }, (picked ? [RECO_DATA.recs.find(r => r.id === picked)] : RECO_DATA.recs.slice(0, 5)).map(r => /*#__PURE__*/React.createElement("div", {
      key: r.id,
      onClick: () => setPicked(r.id),
      style: {
        width: picked ? 96 : 92,
        height: picked ? 130 : 124,
        flex: 'none',
        cursor: 'pointer',
        outline: picked === r.id ? '3px solid var(--color-accent)' : 'none',
        outlineOffset: 2,
        borderRadius: 'var(--radius-lg)'
      }
    }, /*#__PURE__*/React.createElement(CoverTile, {
      rec: r,
      radius: "var(--radius-lg)"
    })))), picked && /*#__PURE__*/React.createElement("button", {
      onClick: () => setPicked(null),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--color-accent)',
        fontWeight: 700,
        fontSize: 13,
        cursor: 'pointer',
        padding: '4px 0'
      }
    }, "Change"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Label, {
      n: "2",
      text: "Add a note"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(Textarea, {
      rows: 3,
      value: note,
      onChange: e => setNote(e.target.value),
      placeholder: "Tell them why they'll love it\u2026"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        paddingBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Label, {
      n: "3",
      text: "Send to"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 12
      }
    }, fids.map(id => {
      const f = RECO_DATA.friends[id];
      const on = !!friends[id];
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onClick: () => setFriends(s => ({
          ...s,
          [id]: !s[id]
        })),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 14px 6px 6px',
          borderRadius: '999px',
          cursor: 'pointer',
          background: on ? 'var(--color-accent)' : 'var(--cream-50)',
          color: on ? 'var(--cream-100)' : 'var(--ink-700)',
          border: `2px solid ${on ? 'var(--color-accent)' : 'var(--color-border-soft)'}`,
          fontWeight: 700,
          fontSize: 14
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        size: "sm",
        name: f.name
      }), f.name);
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 20px 30px',
        background: 'var(--cream-50)',
        borderTop: '2px solid var(--color-border-soft)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      disabled: !canSend,
      onClick: () => setSent(true),
      trailingIcon: /*#__PURE__*/React.createElement(Icons.Send, {
        size: 20
      })
    }, chosenCount > 0 ? `Send to ${chosenCount}` : 'Send recommendation')));
  }
  function Label({
    n,
    text
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '999px',
        background: 'var(--color-accent)',
        color: 'var(--cream-100)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 800,
        flex: 'none'
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 18,
        color: 'var(--ink-700)',
        letterSpacing: '-0.01em'
      }
    }, text));
  }
  window.AddRec = AddRec;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/AddRec.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/App.jsx
try { (() => {
/* App shell — routing + shared state, wrapped in the iOS device frame */
(function () {
  const {
    RECO_DATA
  } = window;
  function App() {
    const [route, setRoute] = React.useState('splash');
    const [sel, setSel] = React.useState(null);
    const [saved, setSaved] = React.useState({
      dune: true,
      paddington: true
    });
    const toggleSave = id => setSaved(s => ({
      ...s,
      [id]: !s[id]
    }));
    const onOpen = id => {
      setSel(id);
      setRoute('detail');
    };
    const onNav = key => {
      if (key === 'add') return setRoute('add');
      if (key === 'shelf' || key === 'profile') return setRoute('profile');
      return setRoute('home');
    };
    const rec = RECO_DATA.recs.find(r => r.id === sel);
    let screen;
    if (route === 'splash') screen = /*#__PURE__*/React.createElement(window.Splash, {
      onStart: () => setRoute('home')
    });else if (route === 'home') screen = /*#__PURE__*/React.createElement(window.Feed, {
      onOpen: onOpen,
      saved: saved,
      toggleSave: toggleSave,
      onNav: onNav
    });else if (route === 'detail') screen = /*#__PURE__*/React.createElement(window.Detail, {
      rec: rec,
      saved: !!saved[sel],
      toggleSave: () => toggleSave(sel),
      onBack: () => setRoute('home')
    });else if (route === 'add') screen = /*#__PURE__*/React.createElement(window.AddRec, {
      onClose: () => setRoute('home')
    });else if (route === 'profile') screen = /*#__PURE__*/React.createElement(window.Profile, {
      onOpen: onOpen,
      saved: saved,
      toggleSave: toggleSave,
      onNav: onNav
    });
    return /*#__PURE__*/React.createElement(window.IOSDevice, null, screen);
  }
  window.RecoApp = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Detail.jsx
try { (() => {
/* Recommendation detail screen */
(function () {
  const NS = window.RecommendaDesignSystem_f7975c;
  const {
    Button,
    IconButton,
    Badge,
    Avatar,
    Tag
  } = NS;
  const {
    Icons,
    RecoParts,
    RECO_DATA
  } = window;
  const {
    CoverTile
  } = RecoParts;
  function Heart({
    filled
  }) {
    return /*#__PURE__*/React.createElement(Icons.Heart, {
      size: 20,
      fill: filled ? 'var(--color-accent)' : 'none'
    });
  }
  function Detail({
    rec,
    saved,
    toggleSave,
    onBack
  }) {
    if (!rec) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-bg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '52px 16px 4px',
        position: 'sticky',
        top: 0
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      ariaLabel: "Back",
      variant: "outline",
      onClick: onBack,
      style: {
        background: 'var(--cream-50)'
      }
    }, /*#__PURE__*/React.createElement(Icons.Back, {
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      ariaLabel: "Share",
      variant: "outline",
      style: {
        background: 'var(--cream-50)'
      }
    }, /*#__PURE__*/React.createElement(Icons.Share, {
      size: 18
    })), /*#__PURE__*/React.createElement(IconButton, {
      ariaLabel: "Save",
      variant: "outline",
      active: saved,
      onClick: toggleSave,
      style: {
        background: 'var(--cream-50)'
      }
    }, /*#__PURE__*/React.createElement(Heart, {
      filled: saved
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: '14px 0 6px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 176,
        height: 240,
        filter: 'drop-shadow(var(--shadow-photo))'
      }
    }, /*#__PURE__*/React.createElement(CoverTile, {
      rec: rec,
      radius: "var(--radius-lg)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 22px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "accent",
      uppercase: true
    }, rec.type)), /*#__PURE__*/React.createElement("h1", {
      style: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 900,
        letterSpacing: '-0.03em',
        lineHeight: 1.02
      }
    }, rec.title), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        color: 'var(--ink-500)',
        fontWeight: 600,
        marginTop: 6,
        fontSize: 15
      }
    }, rec.creator), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "neutral",
      size: "sm"
    }, rec.year), /*#__PURE__*/React.createElement(Badge, {
      variant: "neutral",
      size: "sm"
    }, rec.meta), rec.genres.map(g => /*#__PURE__*/React.createElement(Badge, {
      key: g,
      variant: "outline",
      size: "sm"
    }, g))), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 18,
        color: 'var(--ink-700)',
        fontSize: 16,
        lineHeight: 1.55,
        textAlign: 'center'
      }
    }, rec.blurb), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: '.07em',
        textTransform: 'uppercase',
        color: 'var(--ink-700)',
        marginBottom: 12
      }
    }, "Recommended by ", rec.by.length, " ", rec.by.length === 1 ? 'friend' : 'friends'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, rec.by.map(b => {
      const f = RECO_DATA.friends[b.who];
      return /*#__PURE__*/React.createElement("div", {
        key: b.who,
        style: {
          display: 'flex',
          gap: 12,
          background: 'var(--cream-50)',
          border: '2px solid var(--color-border-soft)',
          borderRadius: 'var(--radius-lg)',
          padding: 14
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: f.name
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 700,
          color: 'var(--ink-700)',
          fontSize: 15
        }
      }, f.name), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-hand)',
          color: 'var(--color-accent)',
          fontSize: 16,
          lineHeight: 1.3,
          marginTop: 3
        }
      }, "\u201C", b.note, "\u201D")));
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 20px 30px',
        background: 'var(--cream-50)',
        borderTop: '2px solid var(--color-border-soft)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: saved ? 'secondary' : 'primary',
      size: "lg",
      fullWidth: true,
      onClick: toggleSave,
      leadingIcon: saved ? /*#__PURE__*/React.createElement(Icons.Check, {
        size: 20
      }) : null
    }, saved ? 'On your shelf' : 'Add to your shelf')));
  }
  window.Detail = Detail;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Feed.jsx
try { (() => {
/* Feed (home) screen */
(function () {
  const NS = window.RecommendaDesignSystem_f7975c;
  const {
    Avatar,
    Badge,
    MediaCard,
    SegmentedControl,
    Input
  } = NS;
  const {
    Icons,
    RecoParts,
    RECO_DATA
  } = window;
  const {
    CoverTile,
    TabBar
  } = RecoParts;
  function Feed({
    onOpen,
    saved,
    toggleSave,
    onNav
  }) {
    const [tab, setTab] = React.useState('all');
    const recs = RECO_DATA.recs.filter(r => tab === 'all' || (tab === 'books' ? r.type === 'Book' : r.type === 'Film'));
    const popular = RECO_DATA.recs.slice(0, 5);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-bg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '54px 20px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-500)',
        fontWeight: 600
      }
    }, "Tuesday evening"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 26,
        letterSpacing: '-0.02em',
        color: 'var(--ink-700)',
        lineHeight: 1.05,
        marginTop: 2
      }
    }, "What your", /*#__PURE__*/React.createElement("br", null), "friends love")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "Notifications",
      style: {
        width: 44,
        height: 44,
        borderRadius: '999px',
        border: '2px solid var(--color-border-soft)',
        background: 'var(--cream-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--ink-700)'
      }
    }, /*#__PURE__*/React.createElement(Icons.Bell, {
      size: 20
    })), /*#__PURE__*/React.createElement(Avatar, {
      name: "You",
      ring: true
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Input, {
      shape: "pill",
      placeholder: "Search books & films",
      leadingIcon: /*#__PURE__*/React.createElement(Icons.Search, {
        size: 18
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      fullWidth: true,
      value: tab,
      onChange: setTab,
      options: [{
        label: 'All',
        value: 'all'
      }, {
        label: 'Books',
        value: 'books'
      }, {
        label: 'Films',
        value: 'films'
      }]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(SectionEyebrow, {
      icon: /*#__PURE__*/React.createElement(Icons.Sparkle, {
        size: 15
      }),
      text: "Popular this week",
      pad: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        overflowX: 'auto',
        padding: '12px 20px 4px',
        scrollbarWidth: 'none'
      }
    }, popular.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.id,
      onClick: () => onOpen(r.id),
      style: {
        width: 116,
        height: 156,
        flex: 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(CoverTile, {
      rec: r,
      radius: "var(--radius-lg)"
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        padding: '0 20px 24px'
      }
    }, /*#__PURE__*/React.createElement(SectionEyebrow, {
      text: "Recommended for you"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 12
      }
    }, recs.map(r => /*#__PURE__*/React.createElement(MediaCard, {
      key: r.id,
      title: r.title,
      creator: r.creator,
      type: r.type,
      coverColor: r.cover,
      recommenderName: RECO_DATA.friends[r.by[0].who].name,
      note: r.by[0].note,
      saved: !!saved[r.id],
      onToggleSave: () => toggleSave(r.id),
      onClick: () => onOpen(r.id)
    }))))), /*#__PURE__*/React.createElement(TabBar, {
      active: "home",
      onNav: onNav
    }));
  }
  function SectionEyebrow({
    text,
    icon,
    pad
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        color: 'var(--ink-700)',
        padding: pad ? '0 20px' : 0
      }
    }, icon && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-accent)',
        display: 'flex'
      }
    }, icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: '.07em',
        textTransform: 'uppercase'
      }
    }, text));
  }
  window.Feed = Feed;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Feed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Profile.jsx
try { (() => {
/* Profile screen */
(function () {
  const NS = window.RecommendaDesignSystem_f7975c;
  const {
    Avatar,
    Badge,
    MediaCard,
    SegmentedControl,
    IconButton
  } = NS;
  const {
    Icons,
    RecoParts,
    RECO_DATA
  } = window;
  const {
    CoverTile,
    TabBar
  } = RecoParts;
  function Profile({
    onOpen,
    saved,
    toggleSave,
    onNav
  }) {
    const [tab, setTab] = React.useState('shelf');
    const shelf = RECO_DATA.recs.filter(r => saved[r.id]);
    const given = RECO_DATA.recs.slice(2, 5);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-bg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-accent)',
        padding: '56px 20px 22px',
        color: 'var(--cream-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      ariaLabel: "Settings",
      variant: "ghost",
      style: {
        color: 'var(--cream-100)'
      }
    }, /*#__PURE__*/React.createElement(Icons.Chevron, {
      size: 22
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginTop: -8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "You",
      size: "lg",
      style: {
        background: 'var(--cream-100)',
        color: 'var(--color-accent)',
        boxShadow: '0 0 0 3px var(--blue-600)'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 26,
        letterSpacing: '-0.02em'
      }
    }, "You"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--blue-200)',
        fontWeight: 600,
        fontSize: 14
      }
    }, "@you \xB7 taste curator"))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-hand)',
        fontSize: 16,
        color: 'var(--cream-100)',
        marginTop: 12,
        opacity: .95
      }
    }, "come for the rec, stay for the taste."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 18
      }
    }, [['24', 'given'], [String(shelf.length), 'on shelf'], ['38', 'friends']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        flex: 1,
        background: 'var(--blue-600)',
        borderRadius: 'var(--radius-lg)',
        padding: '12px 10px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 22
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--blue-200)',
        textTransform: 'uppercase',
        letterSpacing: '.06em'
      }
    }, l))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 20px 24px'
      }
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      fullWidth: true,
      value: tab,
      onChange: setTab,
      options: [{
        label: 'Shelf',
        value: 'shelf'
      }, {
        label: 'Given',
        value: 'given'
      }]
    }), tab === 'shelf' && (shelf.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12,
        marginTop: 16
      }
    }, shelf.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.id,
      onClick: () => onOpen(r.id),
      style: {
        height: 150,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(CoverTile, {
      rec: r,
      radius: "var(--radius-md)"
    })))) : /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '30px 20px',
        color: 'var(--ink-500)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 18,
        color: 'var(--ink-700)',
        marginTop: 4
      }
    }, "Your shelf is empty"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        marginTop: 4
      }
    }, "Tap the heart on a rec to save it here."))), tab === 'given' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 16
      }
    }, given.map(r => /*#__PURE__*/React.createElement(MediaCard, {
      key: r.id,
      title: r.title,
      creator: r.creator,
      type: r.type,
      coverColor: r.cover,
      recommenderName: "You",
      note: r.by[0].note,
      saved: !!saved[r.id],
      onToggleSave: () => toggleSave(r.id),
      onClick: () => onOpen(r.id)
    }))))), /*#__PURE__*/React.createElement(TabBar, {
      active: "profile",
      onNav: onNav
    }));
  }
  window.Profile = Profile;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Splash.jsx
try { (() => {
/* Splash / onboarding entry — mirrors the brand splash */
(function () {
  function Splash({
    onStart
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        background: 'var(--color-accent)',
        color: 'var(--cream-100)',
        display: 'flex',
        flexDirection: 'column',
        padding: '64px 28px 36px',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "./../../assets/logo/recommenda-mark-inverse.svg",
      style: {
        width: 30
      },
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '.18em',
        color: 'var(--blue-200)'
      }
    }, "RECOMMENDA")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "'Caveat Brush', cursive",
        fontWeight: 400,
        fontSize: 62,
        lineHeight: 1,
        letterSpacing: '0.01em',
        textTransform: 'uppercase',
        color: 'var(--cream-100)',
        whiteSpace: 'nowrap'
      }
    }, "Recommenda"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-hand)',
        fontWeight: 600,
        fontSize: 26,
        lineHeight: 1.15,
        marginTop: 24,
        color: 'var(--cream-100)'
      }
    }, "come for the rec,", /*#__PURE__*/React.createElement("br", null), "stay for the taste."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--blue-200)',
        fontSize: 15,
        marginTop: 12,
        maxWidth: 280
      }
    }, "Books and films your friends actually loved \u2014 no algorithms, just good taste.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onStart,
      style: {
        height: 56,
        borderRadius: '999px',
        border: 'none',
        background: 'var(--cream-100)',
        color: 'var(--color-accent)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 800,
        fontSize: 17,
        cursor: 'pointer'
      }
    }, "Get started"), /*#__PURE__*/React.createElement("button", {
      onClick: onStart,
      style: {
        height: 52,
        borderRadius: '999px',
        background: 'transparent',
        border: '2px solid var(--blue-500)',
        color: 'var(--cream-100)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 16,
        cursor: 'pointer'
      }
    }, "I already have an account")));
  }
  window.Splash = Splash;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Splash.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/data.js
try { (() => {
/* Recommenda UI kit — fake content. window.RECO_DATA */
(function () {
  const friends = {
    mia: {
      name: 'Mia Rose',
      handle: '@miareads'
    },
    ed: {
      name: 'Sir Edward',
      handle: '@edthethird'
    },
    jon: {
      name: 'Jon Park',
      handle: '@jonp'
    },
    ava: {
      name: 'Ava Lim',
      handle: '@avawatches'
    },
    theo: {
      name: 'Theo M.',
      handle: '@theo'
    }
  };

  // Cover palette — minimalist colour-block covers (no stock art).
  const C = {
    blue: 'var(--blue-700)',
    ink: 'var(--ink-900)',
    deep: 'var(--blue-900)',
    cream: 'var(--cream-300)',
    mid: 'var(--blue-600)'
  };
  const recs = [{
    id: 'dune',
    type: 'Book',
    title: 'Dune',
    creator: 'Frank Herbert',
    cover: C.deep,
    coverText: 'cream',
    genres: ['Sci-fi', 'Epic'],
    year: 2021,
    meta: '688 pages',
    by: [{
      who: 'mia',
      note: 'The desert chapters live in my head rent-free.'
    }, {
      who: 'theo',
      note: 'Read it before the films. Trust me.'
    }],
    blurb: 'A desert planet, a noble house, and the most coveted substance in the universe.'
  }, {
    id: 'past-lives',
    type: 'Film',
    title: 'Past Lives',
    creator: 'Celine Song',
    cover: C.blue,
    coverText: 'cream',
    genres: ['Drama', 'Romance'],
    year: 2023,
    meta: '1h 45m',
    by: [{
      who: 'ava',
      note: 'I cried on the subway afterwards. Worth it.'
    }],
    blurb: 'Two childhood friends reconnect over two decades and one fateful week in New York.'
  }, {
    id: 'klara',
    type: 'Book',
    title: 'Klara and the Sun',
    creator: 'Kazuo Ishiguro',
    cover: C.mid,
    coverText: 'cream',
    genres: ['Sci-fi', 'Literary'],
    year: 2021,
    meta: '320 pages',
    by: [{
      who: 'ed',
      note: 'Chosen carefully. Quietly devastating.'
    }],
    blurb: 'An artificial friend observes the strange, tender world of the humans she serves.'
  }, {
    id: 'paddington',
    type: 'Film',
    title: 'Paddington 2',
    creator: 'Paul King',
    cover: C.cream,
    coverText: 'ink',
    genres: ['Comedy', 'Family'],
    year: 2017,
    meta: '1h 43m',
    by: [{
      who: 'jon',
      note: 'The single nicest film ever made. Fight me.'
    }, {
      who: 'mia',
      note: 'Pure serotonin.'
    }],
    blurb: 'A polite bear clears his name and reminds a city to be kind.'
  }, {
    id: 'pachinko',
    type: 'Book',
    title: 'Pachinko',
    creator: 'Min Jin Lee',
    cover: C.ink,
    coverText: 'cream',
    genres: ['Historical', 'Family'],
    year: 2017,
    meta: '496 pages',
    by: [{
      who: 'ava',
      note: 'Four generations. I was wrecked and grateful.'
    }],
    blurb: 'A sweeping saga of a Korean family making a life in 20th-century Japan.'
  }, {
    id: 'aftersun',
    type: 'Film',
    title: 'Aftersun',
    creator: 'Charlotte Wells',
    cover: C.deep,
    coverText: 'cream',
    genres: ['Drama'],
    year: 2022,
    meta: '1h 41m',
    by: [{
      who: 'theo',
      note: 'Watch it, then call your dad.'
    }],
    blurb: 'A daughter remembers a holiday with her young father, twenty years on.'
  }];
  window.RECO_DATA = {
    friends,
    recs
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/data.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile/icons.jsx
try { (() => {
/* Recommenda UI kit — shared icon set.
   Lucide-style 2.2px stroke, round caps — matches the brand's bold line aesthetic.
   For production, swap for lucide-react (identical visual language). */
(function () {
  const S = ({
    d,
    size = 22,
    sw = 2.2,
    fill = 'none',
    children
  }) => React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill,
    stroke: 'currentColor',
    strokeWidth: sw,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, d ? React.createElement('path', {
    d
  }) : children);
  const Icons = {
    Search: p => S({
      ...p,
      children: [React.createElement('circle', {
        key: 'c',
        cx: 11,
        cy: 11,
        r: 7
      }), React.createElement('path', {
        key: 'l',
        d: 'm20 20-3.4-3.4'
      })]
    }),
    Heart: p => S({
      ...p,
      fill: p && p.fill,
      d: 'M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1Z'
    }),
    Plus: p => S({
      ...p,
      d: 'M12 5v14M5 12h14'
    }),
    Home: p => S({
      ...p,
      children: [React.createElement('path', {
        key: '1',
        d: 'M4 10.5 12 4l8 6.5'
      }), React.createElement('path', {
        key: '2',
        d: 'M6 9.5V20h12V9.5'
      })]
    }),
    Shelf: p => S({
      ...p,
      children: [React.createElement('rect', {
        key: '1',
        x: 4,
        y: 4,
        width: 5,
        height: 16,
        rx: 1.2
      }), React.createElement('rect', {
        key: '2',
        x: 11,
        y: 4,
        width: 5,
        height: 16,
        rx: 1.2
      }), React.createElement('path', {
        key: '3',
        d: 'M18.2 6.4 21 7.1 18.6 20l-2.8-.7'
      })]
    }),
    User: p => S({
      ...p,
      children: [React.createElement('circle', {
        key: '1',
        cx: 12,
        cy: 8,
        r: 4
      }), React.createElement('path', {
        key: '2',
        d: 'M4.5 20a7.5 7.5 0 0 1 15 0'
      })]
    }),
    Book: p => S({
      ...p,
      children: [React.createElement('path', {
        key: '1',
        d: 'M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5Z'
      }), React.createElement('path', {
        key: '2',
        d: 'M5 19.5A1.5 1.5 0 0 0 6.5 21H19'
      })]
    }),
    Film: p => S({
      ...p,
      children: [React.createElement('rect', {
        key: '1',
        x: 3,
        y: 4,
        width: 18,
        height: 16,
        rx: 2
      }), React.createElement('path', {
        key: '2',
        d: 'M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4'
      })]
    }),
    Back: p => S({
      ...p,
      d: 'M19 12H5M11 6l-6 6 6 6'
    }),
    Bell: p => S({
      ...p,
      children: [React.createElement('path', {
        key: '1',
        d: 'M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8'
      }), React.createElement('path', {
        key: '2',
        d: 'M13.7 21a2 2 0 0 1-3.4 0'
      })]
    }),
    Share: p => S({
      ...p,
      children: [React.createElement('circle', {
        key: '1',
        cx: 18,
        cy: 5,
        r: 2.5
      }), React.createElement('circle', {
        key: '2',
        cx: 6,
        cy: 12,
        r: 2.5
      }), React.createElement('circle', {
        key: '3',
        cx: 18,
        cy: 19,
        r: 2.5
      }), React.createElement('path', {
        key: '4',
        d: 'm8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6'
      })]
    }),
    Star: p => S({
      ...p,
      fill: p && p.fill,
      d: 'M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 17l-5.3 2.8 1-5.8-4.2-4.1 5.9-.9z'
    }),
    Check: p => S({
      ...p,
      d: 'M5 12.5 10 17 19 6'
    }),
    Chevron: p => S({
      ...p,
      d: 'm9 6 6 6-6 6'
    }),
    Send: p => S({
      ...p,
      children: [React.createElement('path', {
        key: '1',
        d: 'M21 4 3 11l7 3 3 7 8-17Z'
      }), React.createElement('path', {
        key: '2',
        d: 'm10 14 4-4'
      })]
    }),
    X: p => S({
      ...p,
      d: 'M6 6l12 12M18 6 6 18'
    }),
    Sparkle: p => S({
      ...p,
      d: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z'
    })
  };
  window.Icons = Icons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/parts.jsx
try { (() => {
/* Recommenda UI kit — shared layout parts. window.RecoParts */
(function () {
  const {
    Icons
  } = window;
  function CoverTile({
    rec,
    radius = 'var(--radius-md)',
    style = {}
  }) {
    const onCream = rec.coverText === 'cream';
    const fg = onCream ? 'var(--cream-100)' : 'var(--ink-900)';
    const TypeIcon = rec.type === 'Film' ? Icons.Film : Icons.Book;
    return React.createElement('div', {
      style: {
        position: 'relative',
        background: rec.cover,
        color: fg,
        borderRadius: radius,
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        border: '1.5px solid var(--color-border-soft)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 12,
        boxSizing: 'border-box',
        ...style
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        top: 10,
        left: 10,
        opacity: .9
      }
    }, React.createElement(TypeIcon, {
      size: 16,
      sw: 2.4
    })), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        lineHeight: .98,
        letterSpacing: '-0.03em',
        fontSize: 'clamp(15px, 3.4vw, 22px)',
        textTransform: 'uppercase',
        textWrap: 'balance'
      }
    }, rec.title), React.createElement('div', {
      style: {
        fontSize: 11,
        fontWeight: 600,
        opacity: .75,
        marginTop: 4
      }
    }, rec.creator));
  }
  function TabBar({
    active,
    onNav
  }) {
    const item = (key, Icon, label) => {
      const on = active === key;
      return React.createElement('button', {
        key,
        onClick: () => onNav(key),
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '6px 0',
          color: on ? 'var(--color-accent)' : 'var(--ink-400)'
        }
      }, React.createElement(Icon, {
        size: 23,
        sw: on ? 2.6 : 2.1,
        fill: on && key === 'home' ? 'none' : 'none'
      }), React.createElement('span', {
        style: {
          fontSize: 10.5,
          fontWeight: on ? 800 : 600,
          letterSpacing: '.01em'
        }
      }, label));
    };
    return React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 14px 26px',
        background: 'var(--cream-50)',
        borderTop: '2px solid var(--color-border-soft)',
        gap: 4
      }
    }, item('home', Icons.Home, 'Home'), item('search', Icons.Search, 'Browse'), React.createElement('div', {
      style: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
      }
    }, React.createElement('button', {
      onClick: () => onNav('add'),
      'aria-label': 'Recommend',
      style: {
        width: 54,
        height: 54,
        marginTop: -22,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--color-accent)',
        color: 'var(--cream-100)',
        border: '3px solid var(--cream-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)'
      }
    }, React.createElement(Icons.Plus, {
      size: 26,
      sw: 2.6
    }))), item('shelf', Icons.Shelf, 'Shelf'), item('profile', Icons.User, 'You'));
  }
  window.RecoParts = {
    CoverTile,
    TabBar
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MediaCard = __ds_scope.MediaCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
