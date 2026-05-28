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
