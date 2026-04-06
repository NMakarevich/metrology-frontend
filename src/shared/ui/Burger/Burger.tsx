import type { BurgerProps } from '@shared/ui/Burger/types.ts';
import { type JSX } from 'react';

import styles from './Burger.module.scss';

export const Burger = ({ isOpen, toggleBurger }: BurgerProps): JSX.Element => {
  return (
    <div className={styles.burger} onClick={toggleBurger}>
      <span
        className={isOpen ? `${styles.open} ${styles['burger-inner']}` : styles['burger-inner']}
      ></span>
    </div>
  );
};
