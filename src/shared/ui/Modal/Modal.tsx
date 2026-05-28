import type { ModalContextType } from '@app/contextAPI/Modal';
import { ModalContext } from '@app/contextAPI/Modal/ModalContext.ts';
import { Button } from '@shared/ui/Button';
import { Close } from '@shared/ui/Icons';
import type { ModalProps } from '@shared/ui/Modal/types.ts';
import { type JSX, useContext } from 'react';

import styles from './Modal.module.scss';

export const Modal = (props: ModalProps): JSX.Element => {
  const { closeModal } = useContext(ModalContext) as ModalContextType;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Button className={styles['close-button']} isIconButton={true} onClick={closeModal}>
          <Close />
        </Button>
        {props.component}
      </div>
    </div>
  );
};
