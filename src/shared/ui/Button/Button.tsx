import type { ButtonProps } from '@shared/ui/Button/types.ts';
import { concatClasses } from '@shared/utils';
import { memo } from 'react';

import styles from './Button.module.scss';

export const Button = memo((buttonProps: ButtonProps) => {
  const { children, isIconButton, className, ...props } = buttonProps;

  return (
    <>
      <button
        className={concatClasses(styles.button, className ?? '', isIconButton ? styles.icon : '')}
        {...props}
      >
        {children}
      </button>
    </>
  );
});
