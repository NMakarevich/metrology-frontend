import type { BurgerProps } from '@shared/ui/Burger';
import type { RefObject } from 'react';

export type HeaderProps = BurgerProps & { ref?: RefObject<HTMLElement | null> };
