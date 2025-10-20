import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Componente Display - Exibe a operação atual e o resultado
 * @param {string} expression - A expressão matemática atual
 * @param {string} result - O resultado do cálculo
 * @param {Object} theme - Objeto com as cores do tema atual
 */
const Display = ({ expression, result, theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme?.displayBackground || '#1e1e1e' }]}>
      {/* Linha superior: mostra a expressão/operação atual */}
      <Text style={[styles.expression, { color: theme?.secondaryText || '#888' }]} numberOfLines={1} adjustsFontSizeToFit>
        {expression || '0'}
      </Text>

      {/* Linha inferior: mostra o resultado */}
      <Text style={[styles.result, { color: theme?.text || '#fff' }]} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60, // Espaço para status bar
    minHeight: 160,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  expression: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'right',
  },
  result: {
    fontSize: 48,
    fontWeight: '300',
    textAlign: 'right',
  },
});

export default Display;
