import type { ModalContextType } from '@shared/ui/Modal/types.ts';
import { createContext } from 'react';

export const ModalContext = createContext<ModalContextType | null>(null);
