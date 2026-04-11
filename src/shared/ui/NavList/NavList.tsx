import type { NavListProps } from '@shared/ui/NavList/types.ts';
import { type JSX, memo, useMemo } from 'react';

import styles from './NavList.module.scss';

export const NavList = memo((props: NavListProps): JSX.Element => {
  const { links, isIconMode, isOpen } = props;

  const preparedLinks = useMemo(() => {
    return links.map((link) => ({ ...link, icon: link.icon ?? link.title[0].toUpperCase() }));
  }, [links]);

  return (
    <nav className={styles['nav-list']}>
      {preparedLinks.map((link) => (
        <a href={link.href} className={styles['nav-list_item']} title={link.title} key={link.title}>
          <span className={styles.icon}>{link.icon}</span>{' '}
          {isIconMode ? (
            isOpen ? (
              <p className={styles.title}>{link.title}</p>
            ) : (
              ''
            )
          ) : (
            <p className={styles.title}>{link.title}</p>
          )}
        </a>
      ))}
    </nav>
  );
});
