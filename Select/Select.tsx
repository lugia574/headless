// Select.context.ts
import { createContext, useContext } from 'react';

export interface SelectContextValue {
  value: any;
  onChange: (value: any) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SelectContext = createContext<SelectContextValue | null>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Select sub-components must be used within a <Select> provider.');
  }
  return context;
};
