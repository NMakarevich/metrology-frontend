import type { ReactNode, RefObject } from 'react';

export type HeaderProps = {
  title: string;
  control?: ReactNode;
  logo?: ReactNode;
  auth?: ReactNode;
  ref?: RefObject<HTMLElement | null>;
};
