export type AuthContextType = {
  isAuth: boolean;
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
};
