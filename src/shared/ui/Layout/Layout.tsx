import { navList } from '@shared/constants/navList.ts';
import { AuthControls } from '@shared/ui/AuthControls';
import { Burger, useBurger } from '@shared/ui/Burger';
import { ErrorBoundary } from '@shared/ui/ErrorBoundary';
import { Header } from '@shared/ui/Header';
import { ModalProvider } from '@shared/ui/Modal';
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
    <ErrorBoundary>
      <Header
        ref={headerRef}
        control={<Burger isOpen={isOpen} toggleBurger={toggleBurger} />}
        auth={<AuthControls />}
      />
      <ModalProvider>
        <main style={stylesForMain} className={layoutStyles.main}>
          <div className={layoutStyles.container}>
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </ModalProvider>
      <Sidebar mode={mode} isOpen={isOpen} style={stylesForSidebar}>
        <NavList links={navList} isIconMode={mode === 'icons'} isOpen={isOpen} />
      </Sidebar>
    </ErrorBoundary>
  );
};
