import { createContext } from 'react';

import type { AuthContextType } from './types.ts';

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  accessToken: null,
  user: null,
  loginUser: () => {},
  logout: () => {},
});
