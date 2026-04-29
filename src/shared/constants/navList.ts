import { routes } from '@app/routes';
import type { NavLink } from '@shared/ui/NavList';

export const navList: NavLink[] = [
  {
    title: routes.clinics.title,
    href: routes.clinics.getLink(),
  },
  {
    title: routes.categories.title,
    href: routes.categories.getLink(),
  },
  {
    title: routes.instruments.title,
    href: routes.instruments.getLink(),
  },
  {
    title: routes.verifications.title,
    href: routes.verifications.getLink(),
  },
  {
    title: routes.plannings.title,
    href: routes.plannings.getLink(),
  },
  {
    title: routes.notes.title,
    href: routes.notes.getLink(),
  },
];
