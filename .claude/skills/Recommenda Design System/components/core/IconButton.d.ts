import * as React from 'react';

export interface IconButtonProps {
  /** An icon node (SVG / glyph). */
  children?: React.ReactNode;
  /** @default "ghost" */
  variant?: 'solid' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "circle" */
  shape?: 'circle' | 'square';
  /** Toggled-on state (e.g. favourited). @default false */
  active?: boolean;
  disabled?: boolean;
  /** Accessible label — required, since there is no visible text. */
  ariaLabel: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Compact icon-only button for back arrows, favourite hearts and overflow menus. */
export function IconButton(props: IconButtonProps): JSX.Element;
