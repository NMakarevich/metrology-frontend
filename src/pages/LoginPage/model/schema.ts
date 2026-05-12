import { z } from 'zod';

export const schema = z.object({
  login: z.string().nonempty({ error: 'Введите логин' }),
  password: z.string().nonempty({ error: 'Введите пароль' }),
});

export const responseSchema = z.object({
  access_token: z.string(),
});
