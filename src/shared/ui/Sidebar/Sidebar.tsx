import type { SidebarProps } from '@shared/ui/Sidebar/types.ts';
import { concatClasses } from '@shared/utils';
import { type JSX, memo } from 'react';

import styles from './Sidebar.module.scss';

export const Sidebar = memo((props: SidebarProps): JSX.Element => {
  const { mode, isOpen, style, children } = props;

  return (
    <aside
      style={style}
      className={concatClasses(styles.sidebar, styles[mode], isOpen ? styles.open : '')}
    >
      {children}
    </aside>
  );
});
