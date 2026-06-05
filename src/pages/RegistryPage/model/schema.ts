import type { RegistryForm } from '@pages/RegistryPage/ui/types.ts';
import { z } from 'zod';

const baseSchema = z.object<RegistryForm>({
  firstName: z
    .string()
    .min(2, { error: 'Минимальная длина: 2 буквы' })
    .regex(/^[А-Яа-я]+$/g, { error: 'Допустимо использовать только кириллицу' })
    .regex(/^[А-Я]/g, { error: 'Имя должно начинаться с заглавной буквы' }),
  lastName: z
    .string()
    .min(2, { error: 'Минимальная длина: 2 буквы' })
    .regex(/^[А-я]+$/g, { error: 'Допустимо использовать только кириллицу' })
    .regex(/^[А-Я]/g, { error: 'Фамилия должна начинаться с заглавной буквы' }),
  login: z
    .string()
    .regex(/^[A-Za-z0-9]+$/g, { error: 'Допустимы английские буквы и цифры' })
    .min(6),
  password: z
    .string()
    .min(8, { error: 'Минимальная длина пароля 8 символов' })
    .regex(/[A-Z]/g, { error: 'Пароль должен содержать минимум одну заглавную букву' })
    .regex(/[a-z]/g, { error: 'Пароль должен содержать минимум одну строчную букву' })
    .regex(/[0-9]/g, { error: 'Пароль должен содержать минимум одну цифру' })
    .regex(/[!@#$%^&*()_+=;:,.?`"'\\/|~{}[\]]/gm, {
      error:
        'Пароль должен содержать как минимум один специальный символ: !@#$%^&*()_+=;:,.?`"\'/\\|~{}[]',
    }),
  confirmPassword: z.string(),
});

export const schema = baseSchema.refine((data) => data.password === data.confirmPassword, {
  error: 'Пароли не совпадают',
  path: ['confirmPassword'],
  when(payload) {
    return baseSchema.pick({ password: true, confirmPassword: true }).safeParse(payload.value)
      .success;
  },
});
