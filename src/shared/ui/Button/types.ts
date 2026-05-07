import * as React from 'react';

export type ButtonProps = React.ComponentProps<'button'> & {
  children?: React.ReactNode;
  isIconButton?: boolean;
};
