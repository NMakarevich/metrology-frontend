import type { NavListProps } from '@shared/ui/NavList/types.ts';
import { type JSX, memo, useMemo } from 'react';

import styles from './NavList.module.scss';

export const NavList = memo((props: NavListProps): JSX.Element => {
  const { links, isIconMode, isOpen } = props;

  const preparedLinks = useMemo(() => {
    return links.map((link) => ({
      ...link,
      icon: isIconMode
        ? (link.icon ?? link.title.substring(0, 1).toUpperCase())
        : (link.icon ?? null),
    }));
  }, [isIconMode, links]);

  return (
    <nav className={styles['nav-list']}>
      {preparedLinks.map((link) => (
        <a href={link.href} className={styles['nav-list_item']} title={link.title} key={link.title}>
          {isIconMode ? (
            isOpen ? (
              <>
                <span className={styles.icon}>{link.icon}</span>
                <p className={styles.title}>{link.title}</p>
              </>
            ) : (
              <span className={styles.icon}>{link.icon}</span>
            )
          ) : (
            <>
              {link.icon && <span className={styles.icon}>{link.icon}</span>}
              <p className={styles.title}>{link.title}</p>
            </>
          )}
        </a>
      ))}
    </nav>
  );
});
