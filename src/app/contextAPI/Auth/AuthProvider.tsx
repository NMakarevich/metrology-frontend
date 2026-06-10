import { routes } from '@app/routes';
import type { User } from '@entities/User';
import type { LoginResponseSchema } from '@pages/LoginPage';
import { TOKEN, USER } from '@shared/constants/localStorageKeys.ts';
import { type JSX, type ReactNode, useCallback, useState } from 'react';

import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const getAuthData = useCallback(() => {
    const token = localStorage.getItem(TOKEN);
    const userRaw = localStorage.getItem(USER);
    if (userRaw && token) {
      return { accessToken: token, user: JSON.parse(userRaw) as User };
    } else {
      return { accessToken: null, user: null };
    }
  }, []);

  const [accessToken, setAccessToken] = useState<string | null>(() => getAuthData().accessToken);
  const [user, setUser] = useState<User | null>(() => getAuthData().user);
  const [isAuth, setIsAuth] = useState(!!accessToken);

  const loginUser = useCallback((response: LoginResponseSchema) => {
    localStorage.setItem(TOKEN, response.access_token);
    localStorage.setItem(USER, JSON.stringify(response.user));
    setAccessToken(response.access_token);
    setUser(response.user);
    setIsAuth(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
    setIsAuth(false);
    setAccessToken(null);
    setUser(null);
    window.location.replace(routes.main.path);
  }, []);

  return (
    <AuthContext value={{ isAuth, accessToken, user, loginUser, logout }}>{children}</AuthContext>
  );
};
