import { routes } from '@app/routes';
import type { User } from '@entities/User';
import type { RegistryForm } from '@pages/RegistryPage/ui/types.ts';
import { fetcher } from '@shared/services';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

export const useRegistry = () => {
  const [data, setData] = useState<RegistryForm | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const abortControllerRef = useRef<AbortController | null>(null);

  const registry = useCallback(async () => {
    abortControllerRef.current = new AbortController();
    setIsPending(true);
    setError(null);

    try {
      const response = await fetcher<User>({
        url: 'auth/registry',
        method: 'POST',
        body: JSON.stringify(data),
        signal: abortControllerRef.current.signal,
      });

      if ('data' in response) {
        navigate(routes.login.path);
      } else {
        if (response.statusCode === 409) {
          throw new Error('Пользователь с таким логином уже существует');
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
  }, [data, navigate]);

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    if (data) {
      registry();
    }

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [data, registry]);

  return { isPending, error, setData } as const;
};
