import type { InputProps } from '@shared/ui/Input';
import type { DefaultValues, FieldValues } from 'react-hook-form';
import type { ZodObject } from 'zod';

export type FormProps<T extends FieldValues> = {
  title: string;
  submitText: string;
  inputs: InputProps<T>[];
  schema: ZodObject<T>;
  onSubmit: (data: T) => void;
  isPending: boolean;
  error: string | null;
  formValues?: DefaultValues<T>;
};
