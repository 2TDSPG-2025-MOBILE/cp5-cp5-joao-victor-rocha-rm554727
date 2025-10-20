import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Display from '../components/Display';
import ButtonGrid from '../components/ButtonGrid';
import HistoryList from '../components/HistoryList';
import { useTheme } from '../utils/ThemeContext';
import {
  evaluateExpression,
  calculateScientificFunction,
  formatResult,
  isOperator,
  isNumber,
  getLastNumber,
  removeLastNumber,
} from '../utils/calculations';

/**
 * Tela principal da calculadora científica
 * Gerencia o estado e a lógica de cálculo
 */
const CalculatorScreen = () => {
  // Hook do tema
  const { isDarkTheme, theme, toggleTheme } = useTheme();

  // Estados da calculadora
  const [expression, setExpression] = useState(''); // Expressão matemática atual
  const [result, setResult] = useState('0'); // Resultado exibido
  const [waitingForNewNumber, setWaitingForNewNumber] = useState(false); // Flag para novo número após operação
  const [history, setHistory] = useState([]); // Histórico de cálculos (últimos 5)
  const [showHistory, setShowHistory] = useState(false); // Controla exibição do histórico

  /**
   * Limpa toda a calculadora (botão C)
   */
  const clearAll = () => {
    setExpression('');
    setResult('0');
    setWaitingForNewNumber(false);
  };

  /**
   * Apaga o último dígito (botão DEL)
   */
  const deleteLastDigit = () => {
    if (waitingForNewNumber) {
      clearAll();
      return;
    }

    if (expression.length <= 1) {
      clearAll();
      return;
    }

    const newExpression = expression.slice(0, -1);
    setExpression(newExpression);

    // Recalcula o resultado se ainda há expressão
    if (newExpression) {
      try {
        const newResult = evaluateExpression(newExpression);
        setResult(formatResult(newResult));
      } catch {
        setResult('0');
      }
    } else {
      setResult('0');
    }
  };

  /**
   * Adiciona um número à expressão
   * @param {string} number - Número a ser adicionado
   */
  const addNumber = (number) => {
    // Se estamos esperando um novo número, limpa a expressão
    if (waitingForNewNumber) {
      setExpression(number);
      setResult(number);
      setWaitingForNewNumber(false);
      return;
    }

    // Previne múltiplos pontos decimais no mesmo número
    if (number === '.') {
      const lastNumber = getLastNumber(expression);
      if (lastNumber.includes('.')) {
        return;
      }
      // Se não há número antes do ponto, adiciona 0
      if (!lastNumber) {
        const newExpression = expression + '0.';
        setExpression(newExpression);
        setResult(newExpression);
        return;
      }
    }

    const newExpression = expression + number;
    setExpression(newExpression);

    // Atualiza o resultado em tempo real
    try {
      const newResult = evaluateExpression(newExpression);
      setResult(formatResult(newResult));
    } catch {
      // Se não conseguir calcular, mostra a expressão
      setResult(newExpression);
    }
  };

  /**
   * Adiciona um operador à expressão
   * @param {string} operator - Operador a ser adicionado
   */
  const addOperator = (operator) => {
    if (!expression) {
      // Se não há expressão, não adiciona operador (exceto -)
      if (operator === '-') {
        setExpression('-');
        setResult('-');
      }
      return;
    }

    setWaitingForNewNumber(false);

    // Se o último caractere já é um operador, substitui
    const lastChar = expression[expression.length - 1];
    if (isOperator(lastChar)) {
      const newExpression = expression.slice(0, -1) + operator;
      setExpression(newExpression);
      return;
    }

    const newExpression = expression + operator;
    setExpression(newExpression);
  };

  /**
   * Adiciona um cálculo ao histórico
   * @param {string} expr - Expressão calculada
   * @param {string} res - Resultado do cálculo
   */
  const addToHistory = (expr, res) => {
    const newHistoryItem = { expression: expr, result: res };
    setHistory(prevHistory => {
      const newHistory = [newHistoryItem, ...prevHistory];
      // Mantém apenas os últimos 5 cálculos
      return newHistory.slice(0, 5);
    });
  };

  /**
   * Limpa o histórico de cálculos
   */
  const clearHistory = () => {
    setHistory([]);
  };

  /**
   * Seleciona um item do histórico
   * @param {Object} historyItem - Item do histórico selecionado
   */
  const selectHistoryItem = (historyItem) => {
    setExpression(historyItem.result);
    setResult(historyItem.result);
    setWaitingForNewNumber(true);
    setShowHistory(false);
  };

  /**
   * Calcula o resultado final (botão =)
   */
  const calculateResult = () => {
    if (!expression) return;

    try {
      const finalResult = evaluateExpression(expression);
      const formattedResult = formatResult(finalResult);

      // Adiciona ao histórico apenas se for um cálculo válido
      if (expression !== formattedResult) {
        addToHistory(expression, formattedResult);
      }

      setResult(formattedResult);
      setExpression(formattedResult);
      setWaitingForNewNumber(true);
    } catch (error) {
      setResult('Erro');
      setWaitingForNewNumber(true);
    }
  };

  /**
   * Aplica uma função científica
   * @param {string} func - Nome da função científica
   */
  const applyScientificFunction = (func) => {
    // Para π, simplesmente adiciona à expressão
    if (func === 'π') {
      if (waitingForNewNumber) {
        setExpression('π');
        setResult(formatResult(Math.PI));
        setWaitingForNewNumber(false);
      } else {
        const newExpression = expression + 'π';
        setExpression(newExpression);
        try {
          const newResult = evaluateExpression(newExpression);
          setResult(formatResult(newResult));
        } catch {
          setResult(newExpression);
        }
      }
      return;
    }

    // Para outras funções, aplica ao último número ou resultado atual
    let valueToUse;

    if (waitingForNewNumber || !expression) {
      // Usa o resultado atual
      valueToUse = parseFloat(result);
    } else {
      // Usa o último número da expressão
      const lastNumber = getLastNumber(expression);
      if (lastNumber) {
        valueToUse = parseFloat(lastNumber);
      } else {
        valueToUse = parseFloat(result);
      }
    }

    try {
      const functionResult = calculateScientificFunction(func, valueToUse);
      const formattedResult = formatResult(functionResult);

      if (waitingForNewNumber || !expression) {
        // Substitui tudo pelo resultado da função
        setExpression(formattedResult);
        setResult(formattedResult);
        setWaitingForNewNumber(true);
      } else {
        // Substitui o último número pelo resultado da função
        const newExpression = removeLastNumber(expression) + formattedResult;
        setExpression(newExpression);

        // Recalcula a expressão completa
        try {
          const newResult = evaluateExpression(newExpression);
          setResult(formatResult(newResult));
        } catch {
          setResult(formattedResult);
        }
      }
    } catch (error) {
      setResult('Erro');
      setWaitingForNewNumber(true);
    }
  };

  /**
   * Manipula o pressionamento de botões
   * @param {string} buttonTitle - Título do botão pressionado
   */
  const handleButtonPress = (buttonTitle) => {
    switch (buttonTitle) {
    case 'C':
      clearAll();
      break;
    case 'DEL':
      deleteLastDigit();
      break;
    case '=':
      calculateResult();
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
      addOperator(buttonTitle);
      break;
    case 'sin':
    case 'cos':
    case 'tan':
    case '√':
    case 'x²':
    case '%':
    case 'π':
      applyScientificFunction(buttonTitle);
      break;
    default:
      // Números e ponto decimal
      if (isNumber(buttonTitle)) {
        addNumber(buttonTitle);
      }
      break;
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Controles do tema e histórico */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.controlButton, { backgroundColor: theme.functionButton }]}
          onPress={() => setShowHistory(!showHistory)}
        >
          <Text style={[styles.controlButtonText, { color: theme.functionText }]}>
            {showHistory ? 'Ocultar' : 'Histórico'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, { backgroundColor: theme.functionButton }]}
          onPress={toggleTheme}
        >
          <Text style={[styles.controlButtonText, { color: theme.functionText }]}>
            {isDarkTheme ? '☀️' : '🌙'}
          </Text>
        </TouchableOpacity>
      </View>

      <Display expression={expression} result={result} theme={theme} />

      {/* Histórico de cálculos */}
      {showHistory && (
        <HistoryList
          history={history}
          onClearHistory={clearHistory}
          onSelectHistory={selectHistoryItem}
          isDarkTheme={isDarkTheme}
        />
      )}

      <ButtonGrid onButtonPress={handleButtonPress} theme={theme} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  controlButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    minWidth: 80,
    alignItems: 'center',
  },
  controlButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CalculatorScreen;
