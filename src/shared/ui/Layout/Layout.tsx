import { Burger, useBurger } from '@shared/ui/Burger';
import { Header } from '@shared/ui/Header';
import styles from '@shared/ui/Header/Header.module.scss';
import { NavList } from '@shared/ui/NavList';
import { Sidebar, useSidebar } from '@shared/ui/Sidebar';
import { useRef } from 'react';
import { Outlet } from 'react-router';

import layoutStyles from './Layout.module.scss';

export const Layout = () => {
  const { isOpen, toggleBurger } = useBurger();

  const headerRef = useRef<HTMLElement>(null);

  const { stylesForSidebar, stylesForMain, mode } = useSidebar({
    mode: 'static',
    isOpen,
    headerRef,
  });

  return (
    <>
      <Header ref={headerRef}>
        {mode !== 'static' && <Burger isOpen={isOpen} toggleBurger={toggleBurger} />}
        <h1 className={styles.title}>Метрология</h1>
      </Header>
      <main style={stylesForMain} className={layoutStyles.container}>
        <Outlet />
      </main>
      <Sidebar mode={mode} isOpen={isOpen} style={stylesForSidebar}>
        <NavList
          links={[{ title: 'Клиники' }, { title: 'Категории' }, { title: 'Приборы' }]}
          isIconMode={mode === 'icons'}
          isOpen={isOpen}
        />
      </Sidebar>
    </>
  );
};
