import * as React from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

export type InputProps<T extends FieldValues> = React.ComponentProps<'input'> & {
  label?: string;
  errorMessage?: string | null;
  name: FieldPath<T>;
};
