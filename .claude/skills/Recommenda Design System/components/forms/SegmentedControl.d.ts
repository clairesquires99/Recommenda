import * as React from 'react';

export interface SegmentedOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface SegmentedControlProps {
  /** Options as strings or {label,value,icon}. */
  options: (string | SegmentedOption)[];
  /** Currently selected value. */
  value?: string;
  onChange?: (value: string) => void;
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Stretch segments to fill width. @default false */
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

/**
 * Pill segmented toggle — the Books / Films switch and similar 2–3 option choices.
 *
 * @startingPoint section="Forms" subtitle="Books / Films pill toggle" viewport="700x120"
 */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
