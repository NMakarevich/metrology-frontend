import type { ReactNode, RefObject } from 'react';

export type HeaderProps = {
  children: ReactNode;
  ref?: RefObject<HTMLElement | null>;
};
