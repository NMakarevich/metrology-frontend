import { Form } from '@features/Form';
import { useRegistry } from '@pages/RegistryPage/api/useRegistry.tsx';
import { schema } from '@pages/RegistryPage/model/schema.ts';
import type { RegistryForm } from '@pages/RegistryPage/ui/types.ts';
import { type InputProps } from '@shared/ui/Input';
import { type JSX, memo } from 'react';

const RegistryPage = (): JSX.Element => {
  const { isPending, error, setData } = useRegistry();

  const formInputs: InputProps<RegistryForm>[] = [
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

  return (
    <Form
      title={'Регистрация'}
      submitText={'Зарегистрироваться'}
      inputs={formInputs}
      schema={schema}
      onSubmit={onSubmit}
      isPending={isPending}
      error={error}
    />
    // <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    //   {formFields.map((formField) => {
    //     return (
    //       <Controller
    //         name={formField.name as keyof RegistryForm}
    //         control={control}
    //         key={formField.id}
    //         render={({ field, fieldState: { error } }) => {
    //           return <Input errorMessage={error?.message} {...field} {...formField} />;
    //         }}
    //       />
    //     );
    //   })}
    //   <Button className={styles['form-submit']} type={'submit'} disabled={!isValid || isPending}>
    //     Зарегистрироваться
    //   </Button>
    //   <ValidationError>{errors.form?.message}</ValidationError>
    // </form>
  );
};

export default memo(RegistryPage);
