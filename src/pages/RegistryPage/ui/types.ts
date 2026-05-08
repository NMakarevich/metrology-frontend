import type { schema } from '@pages/RegistryPage/model/schema.ts';
import { z } from 'zod';

export type RegistryForm = z.infer<typeof schema>;
