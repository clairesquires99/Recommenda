import * as React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Filled-blue selected state. @default false */
  selected?: boolean;
  leadingIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  /** Show an × and call this when removed. */
  onRemove?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Selectable filter chip for genres, topics and media filters. */
export function Tag(props: TagProps): JSX.Element;
