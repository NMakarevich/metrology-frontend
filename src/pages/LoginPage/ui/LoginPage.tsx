import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '@pages/LoginPage/model/schema.ts';
import type { LoginForm } from '@pages/LoginPage/ui/types.ts';
import { Button } from '@shared/ui/Button';
import { Input, type InputProps } from '@shared/ui/Input';
import { type JSX, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from './LoginPage.module.scss';

const LoginPage = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
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

  const onSubmit = (data: LoginForm) => {
    console.log(data);
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
      <Button className={styles['form-submit']} type={'submit'} disabled={!isValid}>
        Войти
      </Button>
    </form>
  );
};

export default memo(LoginPage);
