import type { UseSidebarProps } from '@shared/ui/Sidebar/types.ts';
import { useLayoutEffect, useMemo, useState } from 'react';

import styles from './Sidebar.module.scss';

export const useSidebar = (props: UseSidebarProps) => {
  const [stylesForSidebar, setStylesForSidebar] = useState({});
  // const [stylesForMain, setStylesForMain] = useState({});
  const { mode, isOpen, headerRef } = props;

  useLayoutEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setStylesForSidebar({
        top: `${headerHeight}px`,
        height: `calc(100% - ${headerHeight}px)`,
      });
    }
  }, [headerRef]);

  const stylesForMain = useMemo(() => {
    const sidebarWidth = styles.sidebarWidth;

    switch (mode) {
      case 'static': {
        return {
          marginLeft: sidebarWidth,
          width: `calc(100% - ${sidebarWidth})`,
          transition: 'none',
        };
      }
      case 'side': {
        if (isOpen) {
          return {
            marginLeft: sidebarWidth,
          };
        } else {
          return {
            marginLeft: 0,
          };
        }
      }
      case 'icons': {
        if (isOpen) {
          return {
            marginLeft: sidebarWidth,
            width: `calc(100% - ${sidebarWidth})`,
            transition: 'width 0.4s, margin-left 0.4s',
          };
        } else {
          return {
            marginLeft: styles.iconWidth,
            width: `calc(100% - ${styles.iconWidth})`,
          };
        }
      }
    }
  }, [isOpen, mode]);

  return { mode, stylesForMain, stylesForSidebar };
};
