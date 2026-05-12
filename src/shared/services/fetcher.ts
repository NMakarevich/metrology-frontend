import { BASE_URL } from '@shared/services/constants.ts';
import type { RequestOptions } from '@shared/services/types.ts';

export const fetcher = (requestOptions: RequestOptions) => {
  const { url, headers, ...options } = requestOptions;
  return fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(headers && headers),
    },
  });
};
