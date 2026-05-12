import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '@pages/LoginPage/api/useLogin.tsx';
import { schema } from '@pages/LoginPage/model/schema.ts';
import type { LoginForm } from '@pages/LoginPage/ui/types.ts';
import { Button } from '@shared/ui/Button';
import { Input, type InputProps } from '@shared/ui/Input';
import { ValidationError } from '@shared/ui/ValidationError';
import { type JSX, memo, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from './LoginPage.module.scss';

const LoginPage = (): JSX.Element => {
  const { isPending, error, setData } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    setError,
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const formFields: InputProps[] = [
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
  ];

  useEffect(() => {
    if (error) {
      setError('form', { message: error });
    }
  }, [error, setError]);

  const onSubmit = async (data: LoginForm) => {
    setData(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((formField) => {
        return (
          <Controller
            control={control}
            name={formField.name as keyof LoginForm}
            render={({ field, fieldState: { error } }) => {
              return <Input {...formField} {...field} errorMessage={error?.message} />;
            }}
            key={formField.id}
          />
        );
      })}
      <Button className={styles['form-submit']} type={'submit'} disabled={!isValid || isPending}>
        Войти
      </Button>
      <ValidationError>{errors.form?.message}</ValidationError>
    </form>
  );
};

export default memo(LoginPage);
