import type { schema } from '@pages/LoginPage/model/schema.ts';
import { z } from 'zod';

export type LoginForm = z.infer<typeof schema>;
