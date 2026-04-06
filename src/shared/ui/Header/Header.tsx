import { Burger, type BurgerProps } from '@shared/ui/Burger';
import { type JSX } from 'react';

import styles from './Header.module.scss';

export const Header = ({ isOpen, toggleBurger }: BurgerProps): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Burger isOpen={isOpen} toggleBurger={toggleBurger} />
        <h1 className={styles.title}>Метрология</h1>
      </div>
    </header>
  );
};
