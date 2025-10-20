import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

/**
 * Componente HistoryList - Exibe o histórico dos últimos 5 cálculos
 * @param {Array} history - Array com o histórico de cálculos
 * @param {function} onClearHistory - Função para limpar o histórico
 * @param {function} onSelectHistory - Função para selecionar um item do histórico
 * @param {boolean} isDarkTheme - Se está usando tema escuro
 */
const HistoryList = ({ history, onClearHistory, onSelectHistory, isDarkTheme = true }) => {
  if (history.length === 0) {
    return (
      <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
        <Text style={[styles.emptyText, isDarkTheme ? styles.darkText : styles.lightText]}>
          Nenhum cálculo realizado
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.header}>
        <Text style={[styles.title, isDarkTheme ? styles.darkText : styles.lightText]}>
          Histórico
        </Text>
        <TouchableOpacity onPress={onClearHistory} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {history.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.historyItem, isDarkTheme ? styles.darkHistoryItem : styles.lightHistoryItem]}
            onPress={() => onSelectHistory(item)}
          >
            <Text style={[styles.expression, isDarkTheme ? styles.darkSecondaryText : styles.lightSecondaryText]}>
              {item.expression}
            </Text>
            <Text style={[styles.result, isDarkTheme ? styles.darkText : styles.lightText]}>
              = {item.result}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  darkContainer: {
    backgroundColor: '#1e1e1e',
    borderColor: '#333',
    borderWidth: 1,
  },
  lightContainer: {
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  historyItem: {
    padding: 8,
    marginBottom: 5,
    borderRadius: 6,
  },
  darkHistoryItem: {
    backgroundColor: '#333',
  },
  lightHistoryItem: {
    backgroundColor: '#fff',
  },
  expression: {
    fontSize: 12,
    marginBottom: 2,
  },
  result: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'italic',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
  darkSecondaryText: {
    color: '#888',
  },
  lightSecondaryText: {
    color: '#666',
  },
});

export default HistoryList;
