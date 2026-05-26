import { routes } from '@app/routes';
import { AuthContext } from '@shared/ui/AuthControls';
import type { HeaderProps } from '@shared/ui/Header/types.ts';
import { type JSX, memo, useContext } from 'react';
import { Link } from 'react-router';

import styles from './Header.module.scss';

export const Header = memo(({ control, logo, auth, ref }: HeaderProps): JSX.Element => {
  const { isAuth } = useContext(AuthContext);

  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.container}>
        {!!control && isAuth && <div className={styles['container-control']}>{control}</div>}
        <div className={styles['container-title']}>
          {!!logo && logo}
          <h1 className={styles.title}>
            <Link className={styles['header-link']} to={routes.main.getLink()}>
              Метрология
            </Link>
          </h1>
        </div>
        {!!auth && <div className={styles['container-auth']}>{auth}</div>}
      </div>
    </header>
  );
});
