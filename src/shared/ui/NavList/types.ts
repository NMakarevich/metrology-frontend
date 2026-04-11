import type { ReactNode } from 'react';

export type NavListProps = {
  links: NavLink[];
  isIconMode: boolean;
  isOpen: boolean;
};

export type NavLink = {
  title: string;
  icon?: ReactNode;
  href?: string;
};
