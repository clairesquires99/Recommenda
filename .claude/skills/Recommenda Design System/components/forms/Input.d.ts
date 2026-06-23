import * as React from 'react';

export interface InputProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  /** Red border + error affordance. @default false */
  invalid?: boolean;
  /** @default "rounded" */
  shape?: 'rounded' | 'pill';
  /** Icon node shown at the start of the field. */
  leadingIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Single-line text field on warm paper with a soft ink border. */
export function Input(props: InputProps): JSX.Element;
