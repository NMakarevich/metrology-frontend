import { UserSchema } from '@entities/User';
import type { LoginForm } from '@pages/LoginPage/ui/types.ts';
import { z } from 'zod';

export const schema = z.object<LoginForm>({
  login: z.string().nonempty({ error: 'Введите логин' }),
  password: z.string().nonempty({ error: 'Введите пароль' }),
});

export const responseSchema = z.object({
  access_token: z.string(),
  user: UserSchema,
});

export type LoginResponseSchema = z.infer<typeof responseSchema>;
