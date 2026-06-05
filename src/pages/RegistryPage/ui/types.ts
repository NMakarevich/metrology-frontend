import { type ZodString } from 'zod';

export type RegistryForm = {
  login: ZodString;
  firstName: ZodString;
  lastName: ZodString;
  password: ZodString;
  confirmPassword: ZodString;
};
