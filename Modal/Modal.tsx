// Modal.context.ts
import { createContext, useContext } from 'react';

export interface ModalContextValue {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal sub-components must be used within a <Modal> provider.');
  }
  return context;
};
