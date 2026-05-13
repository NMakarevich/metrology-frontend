import { routes } from '@app/routes';
import type { ErrorBoundaryFallbackProps } from '@shared/ui/ErrorBoundaryFallback/types.ts';
import type { JSX } from 'react';
import { NavLink } from 'react-router';

import styles from './ErrorBoundaryFallback.module.scss';

const ErrorBoundaryFallback = (props: ErrorBoundaryFallbackProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.fallback}>
        <h2 className={styles['fallback-title']}>Что-то пошло не так</h2>
        <p className={styles['fallback-message']}>{props.message}</p>
        <NavLink
          onClick={props.onReset}
          className={styles['fallback-link']}
          to={routes.main.getLink()}
        >
          Вернуться на главную страницу
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
