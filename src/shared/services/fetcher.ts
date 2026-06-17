import { routes } from '@app/routes';
import { TOKEN, USER } from '@shared/constants/localStorageKeys.ts';
import { BASE_URL } from '@shared/services/constants.ts';
import type { ErrorType, RequestOptions } from '@shared/services/types.ts';

export const fetcher = async <T>(
  requestOptions: RequestOptions,
): Promise<{ data: T } | ErrorType> => {
  const { url, headers, ...options } = requestOptions;
  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(headers && headers),
    },
  });
  if (response.ok) {
    const data = (await response.json()) as T;
    return { data };
  } else if (response.status === 401) {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
    if (window.location.pathname === routes.login.path) {
      return { statusCode: 401, message: '' };
    } else {
      window.location.href = routes.login.path;
      return { statusCode: 401, message: '' };
    }
  } else {
    return (await response.json()) as ErrorType;
  }
};
