import * as React from 'react';

export interface AvatarProps {
  /** Image URL. Falls back to initials from `name` when absent. */
  src?: string;
  name?: string;
  /** @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Blue ring around the avatar. @default false */
  ring?: boolean;
  style?: React.CSSProperties;
}

/** Round friend avatar — photo or initials, optional blue ring. */
export function Avatar(props: AvatarProps): JSX.Element;
