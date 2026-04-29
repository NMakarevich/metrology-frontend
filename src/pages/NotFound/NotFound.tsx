import { routes } from '@app/routes/routes.ts';
import { NavLink } from 'react-router';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <p className={styles.title}>Page not found</p>
      <NavLink className={styles['back-button']} to={routes['main'].getLink()}>
        Back to home page
      </NavLink>
    </div>
  );
};
