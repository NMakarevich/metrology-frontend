import type { BurgerProps } from '@shared/ui/Burger/types.ts';
import { concatClasses } from '@shared/utils';
import { type JSX } from 'react';

import styles from './Burger.module.scss';

export const Burger = ({ isOpen, toggleBurger }: BurgerProps): JSX.Element => {
  return (
    <div className={styles.burger} onClick={toggleBurger}>
      <span className={concatClasses(styles.open, isOpen ? styles['burger-inner'] : '')}></span>
    </div>
  );
};
