import React, { ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styled.css';
import { Container, Dim, Overlay } from './styled';

import Portal from '../Portal';

interface IModalProps {
  children: ReactElement;
  isOpen?: boolean;
  onClose?: () => void;
  selector?: string;
}

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  onClose,
  selector = '#modal-root',
}) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <Portal selector={selector}>
        <Overlay>
          <Dim onClick={onClose} />
          <Container>{children}</Container>
        </Overlay>
      </Portal>
    </CSSTransition>
  );
};

export default Modal;