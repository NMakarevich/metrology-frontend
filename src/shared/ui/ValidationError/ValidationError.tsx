import { type JSX, memo, type ReactNode } from 'react';

import styles from './ValidationError.module.scss';

export const ValidationError = memo(({ children }: { children: ReactNode }): JSX.Element => {
  return <p className={styles['error-message']}>{children}</p>;
});
