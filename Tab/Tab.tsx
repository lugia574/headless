// Tab.context.ts
import { createContext, useContext } from 'react';

export interface TabContextValue {
  value: string; // 현재 선택된 탭 ID
  onChange: (value: string) => void;
}

export const TabContext = createContext<TabContextValue | null>(null);

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('Tab sub-components must be used within a <Tab> provider.');
  }
  return context;
};
