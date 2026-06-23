import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** @default "bordered" */
  variant?: 'bordered' | 'strong' | 'filled' | 'inverse';
  /** Padding in px (or any CSS value). @default 20 */
  padding?: number | string;
  /** Corner radius. @default var(--radius-card) */
  radius?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Generic surface container — bordered paper, filled, or inverse blue. */
export function Card(props: CardProps): JSX.Element;
