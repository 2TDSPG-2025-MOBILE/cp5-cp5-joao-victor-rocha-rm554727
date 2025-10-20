import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

/**
 * Componente ButtonGrid - Grade de botões da calculadora
 * @param {function} onButtonPress - Função para lidar com pressionar botões
 * @param {Object} theme - Objeto com as cores do tema atual
 */
const ButtonGrid = ({ onButtonPress, theme }) => {
  // Configuração dos botões da calculadora
  // Cada linha é um array de objetos com as propriedades do botão
  const buttonRows = [
    // Primeira linha: funções científicas e ações
    [
      { title: 'C', type: 'action' },
      { title: 'DEL', type: 'action' },
      { title: '√', type: 'function' },
      { title: '÷', type: 'operator' },
    ],
    // Segunda linha: funções científicas e números
    [
      { title: 'sin', type: 'function' },
      { title: 'cos', type: 'function' },
      { title: 'tan', type: 'function' },
      { title: '×', type: 'operator' },
    ],
    // Terceira linha: mais funções e números
    [
      { title: 'x²', type: 'function' },
      { title: 'π', type: 'function' },
      { title: '%', type: 'function' },
      { title: '-', type: 'operator' },
    ],
    // Linhas numéricas
    [
      { title: '7', type: 'number' },
      { title: '8', type: 'number' },
      { title: '9', type: 'number' },
      { title: '+', type: 'operator' },
    ],
    [
      { title: '4', type: 'number' },
      { title: '5', type: 'number' },
      { title: '6', type: 'number' },
      { title: '=', type: 'operator' },
    ],
    [
      { title: '1', type: 'number' },
      { title: '2', type: 'number' },
      { title: '3', type: 'number' },
    ],
    [
      { title: '0', type: 'number', isWide: true },
      { title: '.', type: 'number' },
    ],
  ];

  return (
    <View style={styles.container}>
      {buttonRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button, buttonIndex) => (
            <Button
              key={`${rowIndex}-${buttonIndex}`}
              title={button.title}
              type={button.type}
              isWide={button.isWide}
              onPress={onButtonPress}
              theme={theme}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default ButtonGrid;
