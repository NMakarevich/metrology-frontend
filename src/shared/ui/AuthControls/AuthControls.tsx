import { AuthContext } from '@app/contextAPI/Auth';
import { routes } from '@app/routes';
import { Button } from '@shared/ui/Button';
import { Login, Logout, Profile } from '@shared/ui/Icons';
import { type JSX, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router';

import styles from './AuthControls.module.scss';

export const AuthControls = (): JSX.Element => {
  const { logout, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const goToProfile = useCallback(() => {
    navigate(routes.profile.getLink());
  }, [navigate]);

  const goToLogin = useCallback(() => {
    navigate(routes.login.getLink());
  }, [navigate]);

  return (
    <div className={styles.auth}>
      {isAuth ? (
        <>
          <Button isIconButton={true} onClick={goToProfile} title={'Профиль'}>
            <Profile size={32} />
          </Button>
          <Button isIconButton={true} onClick={logout} title={'Выйти'}>
            <Logout size={32} />
          </Button>
        </>
      ) : (
        <Button isIconButton={true} onClick={goToLogin} title={'Войти'}>
          <Login size={32} />
        </Button>
      )}
    </div>
  );
};
