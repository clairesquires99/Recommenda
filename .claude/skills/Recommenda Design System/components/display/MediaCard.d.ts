import * as React from 'react';

export interface MediaCardProps {
  title: string;
  /** Author, director, etc. */
  creator?: string;
  /** Media type label. @default "Book" */
  type?: 'Book' | 'Film' | string;
  /** Cover artwork URL. */
  coverSrc?: string;
  /** Fallback cover background when no image. @default var(--blue-100) */
  coverColor?: string;
  recommenderName?: string;
  recommenderAvatar?: string;
  /** Short handwritten-style note from the recommender. */
  note?: string;
  saved?: boolean;
  onToggleSave?: () => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * The core recommendation feed unit — cover, media-type badge, title + creator,
 * recommender attribution, and a save (heart) toggle.
 *
 * @startingPoint section="Product" subtitle="Recommendation feed card" viewport="420x180"
 */
export function MediaCard(props: MediaCardProps): JSX.Element;
