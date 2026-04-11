import type { HeaderProps } from '@shared/ui/Header/types.ts';
import { type JSX, memo } from 'react';

import styles from './Header.module.scss';

export const Header = memo(({ children, ref }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.container}>{children}</div>
    </header>
  );
});
