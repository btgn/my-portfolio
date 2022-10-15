import { ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { ChildrenProps } from 'types/types';
import { themeCreator } from './types';
import { StylesProvider } from '@mui/styles';

export const ThemeContext = React.createContext(
  (themeName: string): void => {},
);

const ThemeProviderWrapper: React.FC<ChildrenProps> = ({ children }) => {
  const curThemeName = localStorage.getItem('appTheme') || 'LightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  return (
    <StylesProvider>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
