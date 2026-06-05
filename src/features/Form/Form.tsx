import type { FormProps } from '@features/Form/types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { ValidationError } from '@shared/ui/ValidationError';
import { type JSX, useEffect, useMemo } from 'react';
import {
  Controller,
  type DefaultValues,
  type FieldValues,
  type Resolver,
  useForm,
} from 'react-hook-form';

import styles from './Form.module.scss';

export const Form = <T extends FieldValues>(props: FormProps<T>): JSX.Element => {
  const { inputs, schema, submitText, error, isPending, onSubmit, formValues } = props;

  const defaultValues = useMemo(() => {
    if (!formValues)
      return inputs.reduce(
        (defaults, input) => {
          defaults[input.name] = '';
          return defaults;
        },
        {} as { [key: string]: string },
      );
    else return formValues;
  }, [formValues, inputs]);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<T>({
    resolver: zodResolver(schema) as unknown as Resolver<T, unknown, T>,
    mode: 'onChange',
    defaultValues: defaultValues as DefaultValues<T>,
  });

  useEffect(() => {
    if (error) {
      setError('form', { message: error });
    }
  }, [error, setError]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <Controller
          control={control}
          render={({ field, fieldState: { error } }) => {
            return <Input {...field} {...input} errorMessage={error?.message} />;
          }}
          name={input.name}
          key={input.id}
        />
      ))}
      <Button className={styles['form-submit']} type={'submit'} disabled={!isValid || isPending}>
        {submitText}
      </Button>
      <ValidationError>{errors.form?.message}</ValidationError>
    </form>
  );
};
