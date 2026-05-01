import type { ReactNode, RefObject } from 'react';

export type HeaderProps = {
  control?: ReactNode;
  logo?: ReactNode;
  auth?: ReactNode;
  ref?: RefObject<HTMLElement | null>;
};
