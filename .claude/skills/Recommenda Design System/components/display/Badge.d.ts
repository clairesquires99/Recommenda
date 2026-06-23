import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "accent" */
  variant?: 'accent' | 'solid' | 'neutral' | 'outline' | 'success' | 'warning' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Caps + letter-spacing for eyebrow labels. @default false */
  uppercase?: boolean;
  style?: React.CSSProperties;
}

/** Compact pill label for categories, media types and statuses. */
export function Badge(props: BadgeProps): JSX.Element;
