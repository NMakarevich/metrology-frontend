import type { HeaderProps } from '@shared/ui/Header/types.ts';
import { type JSX } from 'react';

import styles from './Header.module.scss';

export const Header = ({ children, ref }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.container}>{children}</div>
    </header>
  );
};
