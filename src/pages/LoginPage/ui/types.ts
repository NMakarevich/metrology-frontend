import type { ZodString } from 'zod';

export type LoginForm = {
  login: ZodString;
  password: ZodString;
};
