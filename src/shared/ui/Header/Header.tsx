import { Burger } from '@shared/ui/Burger';
import type { HeaderProps } from '@shared/ui/Header/types.ts';
import { type JSX } from 'react';

import styles from './Header.module.scss';

export const Header = ({ isOpen, toggleBurger, ref }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.container}>
        <Burger isOpen={isOpen} toggleBurger={toggleBurger} />
        <h1 className={styles.title}>Метрология</h1>
      </div>
    </header>
  );
};
