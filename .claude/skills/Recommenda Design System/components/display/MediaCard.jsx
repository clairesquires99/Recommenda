import React from 'react';
import { Badge } from './Badge.jsx';
import { Avatar } from './Avatar.jsx';
import { IconButton } from '../core/IconButton.jsx';

function Heart({ filled }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? 'var(--color-accent)' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1Z" />
    </svg>
  );
}

/**
 * Recommendation card — the core feed unit. Cover thumbnail, media-type badge,
 * title + creator, and who recommended it. Horizontal row layout.
 */
export function MediaCard({
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
  style = {},
}) {
  const isFilm = String(type).toLowerCase().startsWith('film');
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        gap: 16,
        background: 'var(--color-surface)',
        border: '1px solid var(--ink-500)',
        borderRadius: 'var(--radius-card)',
        padding: 8,
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      <div
        style={{
          width: 72,
          height: 96,
          flex: 'none',
          borderRadius: 'var(--radius-sm)',
          background: coverColor,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {coverSrc && <img src={coverSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      </div>

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6, paddingRight: 32 }}>
        <Badge variant="accent" size="sm" uppercase>{isFilm ? 'Film' : type}</Badge>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, lineHeight: 1.15, color: 'var(--ink-700)', letterSpacing: '-0.015em' }}>
          {title}
        </div>
        {creator && (
          <div style={{ fontSize: 14, color: 'var(--ink-500)', fontWeight: 500 }}>{creator}</div>
        )}
        {note && (
          <div style={{ fontFamily: 'var(--font-hand)', fontSize: 15, color: 'var(--color-accent)', lineHeight: 1.3 }}>
            “{note}”
          </div>
        )}
        {recommenderName && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 4 }}>
            <Avatar size="xs" name={recommenderName} src={recommenderAvatar} />
            <span style={{ fontSize: 13, color: 'var(--ink-500)', fontWeight: 500 }}>
              Recommended by <strong style={{ color: 'var(--ink-700)', fontWeight: 700 }}>{recommenderName}</strong>
            </span>
          </div>
        )}
      </div>

      <div style={{ position: 'absolute', top: 12, right: 12 }}>
        <IconButton
          ariaLabel={saved ? 'Remove from shelf' : 'Save to shelf'}
          variant="ghost"
          size="sm"
          active={saved}
          onClick={(e) => { e.stopPropagation(); onToggleSave && onToggleSave(); }}
        >
          <Heart filled={saved} />
        </IconButton>
      </div>
    </div>
  );
}
