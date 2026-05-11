import { Button } from '@shared/ui/Button';
import { Visibility, VisibilityOff } from '@shared/ui/Icons';
import type { InputProps } from '@shared/ui/Input/types.ts';
import { ValidationError } from '@shared/ui/ValidationError';
import { concatClasses } from '@shared/utils';
import { memo, useCallback, useState } from 'react';

import styles from './Input.module.scss';

export const Input = memo((inputProps: InputProps) => {
  const { label, type, errorMessage, ...props } = inputProps;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <div className={styles['input-container']}>
      {label && (
        <label className={styles.label} htmlFor={props.id}>
          {label}
        </label>
      )}
      {type === 'password' ? (
        <div className={styles['input-wrapper']}>
          <input
            className={concatClasses(styles.input, errorMessage ? styles.error : '')}
            type={showPassword ? 'text' : 'password'}
            {...props}
          />
          <Button
            isIconButton={true}
            type={'button'}
            className={styles['password-toggle']}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </Button>
        </div>
      ) : (
        <input
          className={concatClasses(styles.input, errorMessage ? styles.error : '')}
          {...props}
        />
      )}
      <ValidationError>{errorMessage}</ValidationError>
    </div>
  );
});
