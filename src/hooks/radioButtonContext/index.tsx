import React, { createContext, useContext, useState, ReactNode } from 'react';

// Type for the options state
interface OptionsState {
  [key: string]: string;
}

// Initial state
const defaultOptionsState: OptionsState = {};

// Context setup with default state, updater function, and clear function
const RadioButtonContext = createContext<{
  options: OptionsState;
  setOption: (key: string, value: string) => void;
  clearOptions: () => void;  // Add clearOptions to the context
}>({
  options: defaultOptionsState,
  setOption: () => {},
  clearOptions: () => {}  // Default implementation does nothing
});

export const useRadioButton = () => useContext(RadioButtonContext);

interface RadioButtonProviderProps {
  children: ReactNode;
}

export const RadioButtonProvider: React.FC<RadioButtonProviderProps> = ({ children }) => {
  const [options, setOptions] = useState<OptionsState>(defaultOptionsState);

  // Function to update the value for a given key
  const setOption = (key: string, value: string) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  // Function to clear all options back to their initial state
  const clearOptions = () => {
    setOptions({...defaultOptionsState});  // Reset to initial empty state
  };

  return (
    <RadioButtonContext.Provider value={{ options, setOption, clearOptions }}>
      {children}
    </RadioButtonContext.Provider>
  );
};
