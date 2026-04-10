import type { ReactNode, RefObject } from 'react';

export type SidebarMode = 'over' | 'side' | 'static' | 'icons';

type Styles = { [p: string]: string | number } | undefined;

export type SidebarProps = {
  mode: SidebarMode;
  isOpen: boolean;
  style: Styles;
  children: ReactNode;
};

export type UseSidebarProps = {
  mode: SidebarMode;
  isOpen: boolean;
  headerRef: RefObject<HTMLElement | null>;
};
