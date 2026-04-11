import type { BurgerProps } from '@shared/ui/Burger/types.ts';
import { concatClasses } from '@shared/utils';
import { type JSX, memo } from 'react';

import styles from './Burger.module.scss';

export const Burger = memo(({ isOpen, toggleBurger }: BurgerProps): JSX.Element => {
  return (
    <div className={styles.burger} onClick={toggleBurger}>
      <span className={concatClasses(styles['burger-inner'], isOpen ? styles.open : '')}></span>
    </div>
  );
});
