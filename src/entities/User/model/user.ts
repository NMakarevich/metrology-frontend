import type { EditPassword, EditUser } from '@entities/User/ui/User/types.ts';
import { z } from 'zod';

export const UserSchema = z.object({
  id: z.uuidv4(),
  firstName: z.string(),
  lastName: z.string(),
  login: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  role: z.enum(['ADMIN', 'ENGINEER']),
  updatedBy: z.union([z.string(), z.uuidv4()]),
  version: z.number(),
});

export type User = z.infer<typeof UserSchema>;

export const EditUserSchema = z.object<EditUser>({
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
});

const EditPasswordBaseSchema = z.object<EditPassword>({
  oldPassword: z.string(),
  newPassword: z
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

export const EditPasswordSchema = EditPasswordBaseSchema.superRefine((data, ctx) => {
  if (data.oldPassword === data.newPassword) {
    ctx.addIssue({
      code: 'custom',
      path: ['newPassword'],
      message: 'Старый и новый пароли должны отличаться',
    });
  }

  if (data.newPassword !== data.confirmPassword) {
    ctx.addIssue({
      code: 'custom',
      path: ['confirmPassword'],
      message: 'Пароли не совпадают',
    });
  }
});
