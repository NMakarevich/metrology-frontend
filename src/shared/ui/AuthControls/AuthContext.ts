import type { AuthContextType } from '@shared/ui/AuthControls/types.ts';
import { createContext } from 'react';

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  accessToken: null,
  login: () => {},
  logout: () => {},
});
