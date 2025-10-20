import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * Componente Button - Botão individual da calculadora
 * @param {string} title - Texto do botão
 * @param {function} onPress - Função executada ao pressionar o botão
 * @param {string} type - Tipo do botão (number, operator, function, action)
 * @param {boolean} isWide - Se o botão deve ocupar duas colunas
 * @param {Object} theme - Objeto com as cores do tema atual
 */
const Button = ({ title, onPress, type = 'number', isWide = false, theme }) => {
  // Determina o estilo baseado no tipo do botão
  const getButtonStyle = () => {
    const baseStyle = [styles.button];

    if (isWide) {
      baseStyle.push(styles.wideButton);
    }

    let backgroundColor;
    switch (type) {
    case 'operator':
      backgroundColor = theme?.operatorButton || '#ff9500';
      break;
    case 'function':
    case 'action':
      backgroundColor = theme?.functionButton || '#a6a6a6';
      break;
    default:
      backgroundColor = theme?.numberButton || '#333';
      break;
    }

    return [...baseStyle, { backgroundColor }];
  };

  // Determina o estilo do texto baseado no tipo
  const getTextStyle = () => {
    let color;
    switch (type) {
    case 'operator':
    case 'action':
      color = '#fff';
      break;
    case 'function':
      color = theme?.functionText || '#000';
      break;
    default:
      color = theme?.text || '#fff';
      break;
    }

    return [styles.buttonText, { color }];
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={() => onPress(title)}
      activeOpacity={0.7}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 70,
    margin: 2,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  wideButton: {
    flex: 2,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '400',
  },
});

export default Button;
