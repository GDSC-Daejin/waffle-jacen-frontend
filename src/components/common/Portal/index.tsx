import React, {ReactElement} from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: ReactElement;
  selector: string;
}

const Portal: React.FC<IPortalProps> = ({ children, selector }) => {
  const rootElement = document.querySelector(selector);

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
}

export default Portal;
