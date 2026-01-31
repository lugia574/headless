// Modal.context.ts
import { createContext, useContext } from 'react';

export interface ModalContextValue {
  isOpen: boolean;
  onOpen: () => void; // [추가] 열기 함수
  onClose: () => void; // 닫기 함수
}

export const ModalContext = createContext<ModalContextValue | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal sub-components must be used within a <Modal> provider.');
  }
  return context;
};
