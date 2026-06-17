import { AuthContext } from '@app/contextAPI/Auth';
import { routes } from '@app/routes';
import { type LoginResponseSchema } from '@pages/LoginPage/model/schema.ts';
import type { LoginForm } from '@pages/LoginPage/ui/types.ts';
import { fetcher } from '@shared/services';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

export const useLogin = () => {
  const [data, setData] = useState<LoginForm | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const abortControllerRef = useRef<AbortController | null>(null);
  const { loginUser } = useContext(AuthContext);

  const login = useCallback(async () => {
    abortControllerRef.current = new AbortController();
    setIsPending(true);
    setError(null);
    try {
      const response = await fetcher<LoginResponseSchema>({
        url: 'auth/login',
        method: 'POST',
        body: JSON.stringify(data),
        signal: abortControllerRef.current.signal,
      });
      if ('data' in response) {
        loginUser(response.data);
        navigate(routes.main.path);
      } else {
        if (response.statusCode === 401) {
          throw new Error('Неверное имя пользователя или пароль');
        }
      }
      setIsPending(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Что-то пошло не так');
      }
      setIsPending(false);
    }
  }, [data, loginUser, navigate]);

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    if (data) {
      login();
    }

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [data, login]);

  return { isPending, error, setData } as const;
};
