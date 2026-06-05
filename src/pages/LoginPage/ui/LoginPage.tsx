import { Form } from '@features/Form';
import { useLogin } from '@pages/LoginPage/api/useLogin.tsx';
import { schema } from '@pages/LoginPage/model/schema.ts';
import type { LoginForm } from '@pages/LoginPage/ui/types.ts';
import { type InputProps } from '@shared/ui/Input';
import { type JSX, memo } from 'react';

const LoginPage = (): JSX.Element => {
  const { isPending, error, setData } = useLogin();

  const formInputs: InputProps<LoginForm>[] = [
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
    setData(data);
  };

  return (
    <Form
      title={'Авторизация'}
      submitText={'Войти'}
      inputs={formInputs}
      schema={schema}
      onSubmit={onSubmit}
      isPending={isPending}
      error={error}
    />
  );
};

export default memo(LoginPage);
