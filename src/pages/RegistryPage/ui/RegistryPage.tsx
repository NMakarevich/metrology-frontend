import { zodResolver } from '@hookform/resolvers/zod';
import { useRegistry } from '@pages/RegistryPage/api/useRegistry.tsx';
import { schema } from '@pages/RegistryPage/model/schema.ts';
import type { RegistryForm } from '@pages/RegistryPage/ui/types.ts';
import { Button } from '@shared/ui/Button';
import { Input, type InputProps } from '@shared/ui/Input';
import { ValidationError } from '@shared/ui/ValidationError';
import { type JSX, memo, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from './RegistryPage.module.scss';

const RegistryPage = (): JSX.Element => {
  const { isPending, error, setData } = useRegistry();
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    setError,
  } = useForm<RegistryForm>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      login: '',
      password: '',
      confirmPassword: '',
    },
  });

  const formFields: InputProps[] = [
    {
      type: 'text',
      label: 'Имя',
      name: 'firstName',
      id: 'firstName',
    },
    {
      type: 'text',
      label: 'Фамилия',
      name: 'lastName',
      id: 'lastName',
    },
    {
      type: 'text',
      label: 'Логин',
      name: 'login',
      id: 'login',
      autoComplete: 'username',
    },
    {
      type: 'password',
      label: 'Пароль',
      name: 'password',
      id: 'password',
      autoComplete: 'password',
    },
    {
      type: 'password',
      label: 'Подтвердить пароль',
      name: 'confirmPassword',
      id: 'confirmPassword',
      autoComplete: 'password',
    },
  ];

  const onSubmit = (data: RegistryForm) => {
    setData(data);
  };

  useEffect(() => {
    if (error) {
      setError('form', { message: error });
    }
  }, [error, setError]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((formField) => {
        return (
          <Controller
            name={formField.name as keyof RegistryForm}
            control={control}
            key={formField.id}
            render={({ field, fieldState: { error } }) => {
              return <Input errorMessage={error?.message} {...field} {...formField} />;
            }}
          />
        );
      })}
      <Button className={styles['form-submit']} type={'submit'} disabled={!isValid || isPending}>
        Зарегистрироваться
      </Button>
      <ValidationError>{errors.form?.message}</ValidationError>
    </form>
  );
};

export default memo(RegistryPage);
