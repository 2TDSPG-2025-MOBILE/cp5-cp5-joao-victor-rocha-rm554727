/**
 * Utilitários para cálculos matemáticos da calculadora científica
 */

/**
 * Avalia uma expressão matemática de forma segura
 * @param {string} expression - Expressão matemática
 * @returns {number} - Resultado do cálculo
 */
export const evaluateExpression = (expression) => {
  try {
    // Remove espaços e substitui símbolos por operadores JavaScript
    let cleanExpression = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π/g, Math.PI.toString())
      .trim();

    // Verifica se a expressão é válida (apenas números, operadores e parênteses)
    if (!/^[0-9+\-*/.() ]+$/.test(cleanExpression)) {
      throw new Error('Expressão inválida');
    }

    // Avalia a expressão usando Function constructor (mais seguro que eval)
    const result = new Function('return ' + cleanExpression)();

    // Verifica se o resultado é um número válido
    if (!isFinite(result)) {
      throw new Error('Resultado inválido');
    }

    return result;
  } catch (error) {
    throw new Error('Erro no cálculo');
  }
};

/**
 * Calcula funções científicas
 * @param {string} func - Nome da função (sin, cos, tan, sqrt, square)
 * @param {number} value - Valor para aplicar a função
 * @returns {number} - Resultado da função
 */
export const calculateScientificFunction = (func, value) => {
  const num = parseFloat(value);

  if (isNaN(num)) {
    throw new Error('Valor inválido');
  }

  switch (func) {
  case 'sin':
    return Math.sin(num);
  case 'cos':
    return Math.cos(num);
  case 'tan':
    return Math.tan(num);
  case 'sqrt':
  case '√':
    if (num < 0) {
      throw new Error('Raiz de número negativo');
    }
    return Math.sqrt(num);
  case 'square':
  case 'x²':
    return Math.pow(num, 2);
  case 'percent':
  case '%':
    return num / 100;
  default:
    throw new Error('Função não reconhecida');
  }
};

/**
 * Formata o resultado para exibição
 * @param {number} result - Resultado numérico
 * @returns {string} - Resultado formatado
 */
export const formatResult = (result) => {
  if (!isFinite(result)) {
    return 'Erro';
  }

  // Se o número é muito grande ou muito pequeno, usa notação científica
  if (Math.abs(result) >= 1e10 || (Math.abs(result) < 1e-6 && result !== 0)) {
    return result.toExponential(6);
  }

  // Remove zeros desnecessários no final
  const formatted = parseFloat(result.toPrecision(12)).toString();

  // Limita o número de casas decimais para caber no display
  if (formatted.length > 12) {
    return parseFloat(result.toPrecision(8)).toString();
  }

  return formatted;
};

/**
 * Verifica se um caractere é um operador
 * @param {string} char - Caractere para verificar
 * @returns {boolean} - True se for operador
 */
export const isOperator = (char) => {
  return ['+', '-', '×', '÷', '*', '/'].includes(char);
};

/**
 * Verifica se um caractere é um número
 * @param {string} char - Caractere para verificar
 * @returns {boolean} - True se for número
 */
export const isNumber = (char) => {
  return /^[0-9.]$/.test(char);
};

/**
 * Obtém o último número da expressão
 * @param {string} expression - Expressão matemática
 * @returns {string} - Último número da expressão
 */
export const getLastNumber = (expression) => {
  const matches = expression.match(/[0-9.]+$/);
  return matches ? matches[0] : '';
};

/**
 * Remove o último número da expressão
 * @param {string} expression - Expressão matemática
 * @returns {string} - Expressão sem o último número
 */
export const removeLastNumber = (expression) => {
  return expression.replace(/[0-9.]+$/, '');
};
