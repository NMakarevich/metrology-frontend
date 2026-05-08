import * as React from 'react';

export type InputProps = React.ComponentProps<'input'> & {
  label?: string;
  errorMessage?: string | null;
};
