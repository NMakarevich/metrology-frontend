import { AuthContext } from '@app/contextAPI/Auth';
import type { ModalContextType } from '@app/contextAPI/Modal';
import { ModalContext } from '@app/contextAPI/Modal/ModalContext.ts';
import { useEditUser } from '@entities/User/api/useEditUser.tsx';
import { EditPasswordSchema, EditUserSchema } from '@entities/User/model/user.ts';
import type { EditPassword, EditUser } from '@entities/User/ui/User/types.ts';
import { Form } from '@features/Form';
import { Button } from '@shared/ui/Button';
import type { InputProps } from '@shared/ui/Input';
import { concatClasses } from '@shared/utils';
import { type JSX, useContext, useMemo } from 'react';

import styles from './User.module.scss';

export const User = (): JSX.Element => {
  const authContext = useContext(AuthContext);
  const user = authContext.user!;
  const { openModal } = useContext(ModalContext) as ModalContextType;
  const { setEditPassword, setEditUser, isPending, error } = useEditUser();

  const role = useMemo(() => {
    switch (user.role) {
      case 'ADMIN': {
        return 'Администратор';
      }
      case 'ENGINEER': {
        return 'Инженер';
      }
    }
  }, [user]);

  const isChanged = useMemo(() => {
    return user.createdAt !== user.updatedAt;
  }, [user]);

  const editUserFields: InputProps<EditUser>[] = [
    {
      name: 'login',
      id: 'login',
      type: 'text',
      label: 'Логин',
    },
    {
      name: 'firstName',
      id: 'firstName',
      type: 'text',
      label: 'Имя',
    },
    {
      name: 'lastName',
      id: 'lastName',
      type: 'text',
      label: 'Фамилия',
    },
  ];

  const editPasswordFields: InputProps<EditPassword>[] = [
    {
      name: 'oldPassword',
      id: 'oldPassword',
      type: 'password',
      label: 'Старый пароль',
    },
    {
      name: 'newPassword',
      id: 'newPassword',
      type: 'password',
      label: 'Новый пароль',
    },
    {
      name: 'confirmPassword',
      id: 'confirmPassword',
      type: 'password',
      label: 'Подтвердить пароль',
    },
  ];

  const editUser = () => {
    openModal(
      <Form
        title={'Изменить данные'}
        submitText={'Изменить'}
        inputs={editUserFields}
        schema={EditUserSchema}
        onSubmit={(data) => setEditUser(data)}
        isPending={isPending}
        error={error}
        formValues={{ ...user }}
      />,
    );
  };

  const changePassword = () => {
    openModal(
      <Form
        title={'Изменить пароль'}
        submitText={'Изменить'}
        inputs={editPasswordFields}
        schema={EditPasswordSchema}
        onSubmit={(data) => setEditPassword(data)}
        isPending={isPending}
        error={error}
      />,
    );
  };

  return (
    <section className={styles.user}>
      <h2 className={styles.title}>Профиль пользователя</h2>
      <ul className={styles['user-data']}>
        <li className={styles['user-data_item']}>
          <span className={styles['item-title']}>Имя</span>
          <span className={styles['item-value']}>{user.firstName}</span>
        </li>
        <li className={styles['user-data_item']}>
          <span className={styles['item-title']}>Фамилия</span>
          <span className={styles['item-value']}>{user.lastName}</span>
        </li>
        <li className={styles['user-data_item']}>
          <span className={styles['item-title']}>Логин</span>
          <span className={styles['item-value']}>{user.login}</span>
        </li>
        <li className={styles['user-data_item']}>
          <span className={styles['item-title']}>Роль</span>
          <span className={styles['item-value']}>{role}</span>
        </li>
        {isChanged && (
          <li className={concatClasses(styles['user-data_item'], styles['user-data_changed'])}>
            <span className={styles['item-title']}>Данные изменены</span>
            <span className={styles['item-value']}>
              {new Date(user.updatedAt).toLocaleDateString()}
            </span>
          </li>
        )}
      </ul>
      <div className={styles['user-edit']}>
        <Button type={'button'} onClick={editUser}>
          Редактировать данные
        </Button>
        <Button type={'button'} onClick={changePassword}>
          Изменить пароль
        </Button>
      </div>
    </section>
  );
};
