import type { HeaderProps } from '@shared/ui/Header/types.ts';
import { type JSX, memo } from 'react';

import styles from './Header.module.scss';

export const Header = memo(({ title, control, logo, auth, ref }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.container}>
        {!!control && <div className={styles['container-control']}>{control}</div>}
        <div className={styles['container-title']}>
          {!!logo && logo}
          <h1 className={styles.title}>{title}</h1>
        </div>
        {!!auth && <div className={styles['container-auth']}>{auth}</div>}
      </div>
    </header>
  );
});
