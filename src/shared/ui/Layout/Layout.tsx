import { Burger, useBurger } from '@shared/ui/Burger';
import { Header } from '@shared/ui/Header';
import { NavList } from '@shared/ui/NavList';
import { Sidebar, useSidebar } from '@shared/ui/Sidebar';
import { Spinner } from '@shared/ui/Spinner/Spinner.tsx';
import { Suspense, useRef } from 'react';
import { Outlet } from 'react-router';

import layoutStyles from './Layout.module.scss';

export const Layout = () => {
  const { isOpen, toggleBurger } = useBurger();

  const headerRef = useRef<HTMLElement>(null);

  const { stylesForSidebar, stylesForMain, mode } = useSidebar({
    mode: 'side',
    isOpen,
    headerRef,
  });

  return (
    <>
      <Header
        title={'Метрология'}
        ref={headerRef}
        control={<Burger isOpen={isOpen} toggleBurger={toggleBurger} />}
      />
      <main style={stylesForMain} className={layoutStyles.container}>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
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
