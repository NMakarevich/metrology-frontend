import { routes } from '@app/routes';
import { Header } from '@shared/ui/Header';
import { Spinner } from '@shared/ui/Spinner';
import { type JSX, memo, Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import styles from './AuthLayout.module.scss';

const AuthLayout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/auth') {
      navigate(routes.login.path);
    }
  }, [location, navigate]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default memo(AuthLayout);
