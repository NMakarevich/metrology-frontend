import type { ZodString } from 'zod';

export type EditUser = {
  login: ZodString;
  firstName: ZodString;
  lastName: ZodString;
};

export type EditPassword = {
  oldPassword: ZodString;
  newPassword: ZodString;
  confirmPassword: ZodString;
};
