import React, { createContext, useContext, useState } from 'react';

/**
 * Context para gerenciar o tema da aplicação (claro/escuro)
 */
const ThemeContext = createContext();

/**
 * Hook para usar o contexto do tema
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};

/**
 * Provider do tema - envolve a aplicação para fornecer o tema
 */
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Inicia com tema escuro

  /**
   * Alterna entre tema claro e escuro
   */
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  /**
   * Cores do tema escuro
   */
  const darkTheme = {
    background: '#000',
    displayBackground: '#1e1e1e',
    text: '#fff',
    secondaryText: '#888',
    numberButton: '#333',
    operatorButton: '#ff9500',
    functionButton: '#a6a6a6',
    functionText: '#000',
    historyBackground: '#1e1e1e',
    historyItemBackground: '#333',
    historyBorder: '#333',
  };

  /**
   * Cores do tema claro
   */
  const lightTheme = {
    background: '#f5f5f5',
    displayBackground: '#fff',
    text: '#000',
    secondaryText: '#666',
    numberButton: '#e0e0e0',
    operatorButton: '#007aff',
    functionButton: '#d0d0d0',
    functionText: '#000',
    historyBackground: '#f5f5f5',
    historyItemBackground: '#fff',
    historyBorder: '#ddd',
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  const value = {
    isDarkTheme,
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
