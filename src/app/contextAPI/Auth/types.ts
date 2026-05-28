import type { User } from '@entities/user';
import type { LoginResponseSchema } from '@pages/LoginPage';

export type AuthContextType = {
  isAuth: boolean;
  accessToken: string | null;
  user: User | null;
  loginUser: (response: LoginResponseSchema) => void;
  logout: () => void;
};
