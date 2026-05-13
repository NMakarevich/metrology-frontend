import { routes } from '@app/routes';
import { ErrorBoundary } from '@shared/ui/ErrorBoundary';
import { Header } from '@shared/ui/Header';
import { Spinner } from '@shared/ui/Spinner';
import { type JSX, memo, Suspense, useEffect, useMemo } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router';

import styles from './AuthLayout.module.scss';

const AuthLayout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const title = useMemo(() => {
    if (location.pathname === routes.login.path) {
      return routes.login.title;
    } else {
      return routes.registry.title;
    }
  }, [location]);

  const authFooter = useMemo(() => {
    if (location.pathname === routes.registry.path) {
      return (
        <>
          Уже есть учетная запись? <NavLink to={routes.login.getLink()}>Войти.</NavLink>
        </>
      );
    } else {
      return (
        <>
          Нет учетной записи? <NavLink to={routes.registry.getLink()}>Зарегистрироваться.</NavLink>
        </>
      );
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === routes.auth.path) {
      navigate(routes.login.path);
    }
  }, [location, navigate]);

  return (
    <ErrorBoundary>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles['form-container']}>
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
            <p className={styles.navigate}>{authFooter}</p>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default memo(AuthLayout);
