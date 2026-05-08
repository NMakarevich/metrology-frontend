import { Button } from '@shared/ui/Button';
import { Input, type InputProps } from '@shared/ui/Input';
import { type JSX, memo } from 'react';

import styles from './LoginPage.module.scss';

const LoginPage = (): JSX.Element => {
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

  return (
    <form className={styles.form}>
      {formFields.map((formField) => {
        return <Input {...formField} key={formField.id} />;
      })}
      <Button className={styles['form-submit']} type={'submit'}>
        Войти
      </Button>
    </form>
  );
};

export default memo(LoginPage);
