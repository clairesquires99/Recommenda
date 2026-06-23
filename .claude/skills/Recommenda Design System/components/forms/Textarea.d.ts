import * as React from 'react';

export interface TextareaProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

/** Multi-line note field with the larger card radius — for recommendation notes. */
export function Textarea(props: TextareaProps): JSX.Element;
