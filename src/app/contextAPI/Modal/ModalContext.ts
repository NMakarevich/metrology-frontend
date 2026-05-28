import { createContext } from 'react';

import type { ModalContextType } from './types.ts';

export const ModalContext = createContext<ModalContextType | null>(null);
