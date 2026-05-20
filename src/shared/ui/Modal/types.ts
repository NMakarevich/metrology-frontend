import type { ReactNode } from 'react';

export type ModalProps = {
  component?: ReactNode;
};

export type ModalContextType = {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};
