import { routes } from '@app/routes';
import { TOKEN } from '@shared/constants/localStorageKeys.ts';
import { AuthContext } from '@shared/ui/AuthControls';
import { type JSX, type ReactNode, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string | null>(() => localStorage.getItem(TOKEN));
  const [isAuth, setIsAuth] = useState(!!accessToken);
  const navigate = useNavigate();

  const login = useCallback((token: string) => {
    setAccessToken(token);
    setIsAuth(true);
    localStorage.setItem(TOKEN, token);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN);
    setIsAuth(false);
    setAccessToken(null);
    navigate(routes.main.getLink());
  }, [navigate]);

  return <AuthContext value={{ isAuth, accessToken, login, logout }}>{children}</AuthContext>;
};
