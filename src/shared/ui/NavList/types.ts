import type { ReactNode } from 'react';

export type NavListProps = {
  links: NavLink[];
  isIconMode: boolean;
  isOpen: boolean;
};

export type NavLink = {
  title: string;
  href: string;
  icon?: ReactNode;
};
