import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import { themeCreator } from './types';

export const ThemeContext = React.createContext(
  (themeName: string): void => {},
);

interface Props {
  children: React.ReactNode;
}

const ThemeProviderWrapper: React.FC<Props> = ({ children }) => {
  const curThemeName = localStorage.getItem('appTheme') || 'LightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
