import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/utils/ThemeContext';
import CalculatorScreen from './src/screens/CalculatorScreen';

/**
 * Componente principal da aplicação
 * Renderiza a tela da calculadora científica com suporte a temas
 */
export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <CalculatorScreen />
    </ThemeProvider>
  );
}
