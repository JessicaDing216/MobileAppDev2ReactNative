import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const initialColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(initialColorScheme);

  const toggleTheme = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
  };

  const theme = {
    colorScheme,
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colorScheme === 'dark' ? '#55423d' : '#ecf0f1',
    },
    text: {
      color: colorScheme === 'dark' ? '#fff3ec' : '#33272a',
      textAlign: 'center',

    },
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
