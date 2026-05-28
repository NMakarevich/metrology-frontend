import { Modal } from '@shared/ui/Modal/Modal.tsx';
import { type JSX, type ReactNode, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from './ModalContext.ts';

export const ModalProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState<ReactNode | null>(null);

  const openModal = useCallback((content: ReactNode) => {
    setComponent(content);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setComponent(null);
  }, []);

  return (
    <ModalContext value={{ openModal, closeModal }}>
      {children}
      {isOpen && createPortal(<Modal component={component} />, document.body)}
    </ModalContext>
  );
};
