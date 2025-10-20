/**
 * Teste simples para verificar as funções da calculadora
 * Execute com: node test-calculator.js
 */

const {
  evaluateExpression,
  calculateScientificFunction,
  formatResult,
  isOperator,
  isNumber,
  getLastNumber,
  removeLastNumber,
} = require('./src/utils/calculations');

console.log('🧮 Testando Calculadora Científica\n');

// Teste de operações básicas
console.log('📊 Operações Básicas:');
try {
  console.log('5 + 3 =', evaluateExpression('5+3')); // 8
  console.log('10 - 4 =', evaluateExpression('10-4')); // 6
  console.log('7 × 8 =', evaluateExpression('7*8')); // 56
  console.log('15 ÷ 3 =', evaluateExpression('15/3')); // 5
  console.log('2 + 3 × 4 =', evaluateExpression('2+3*4')); // 14
} catch (error) {
  console.error('Erro nas operações básicas:', error.message);
}

console.log('\n🔬 Funções Científicas:');
try {
  console.log('5² =', calculateScientificFunction('x²', 5)); // 25
  console.log('√16 =', calculateScientificFunction('√', 16)); // 4
  console.log('sin(0) =', calculateScientificFunction('sin', 0)); // 0
  console.log('cos(0) =', calculateScientificFunction('cos', 0)); // 1
  console.log('50% =', calculateScientificFunction('%', 50)); // 0.5
} catch (error) {
  console.error('Erro nas funções científicas:', error.message);
}

console.log('\n🛡️ Tratamento de Erros:');
try {
  console.log('5 ÷ 0 =', evaluateExpression('5/0')); // Deve dar erro
} catch (error) {
  console.log('✅ Divisão por zero tratada:', error.message);
}

try {
  console.log('√(-4) =', calculateScientificFunction('√', -4)); // Deve dar erro
} catch (error) {
  console.log('✅ Raiz negativa tratada:', error.message);
}

console.log('\n🔧 Funções Utilitárias:');
console.log('isOperator("+") =', isOperator('+')); // true
console.log('isNumber("5") =', isNumber('5')); // true
console.log('getLastNumber("5+3") =', getLastNumber('5+3')); // "3"
console.log('removeLastNumber("5+3") =', removeLastNumber('5+3')); // "5+"

console.log('\n📐 Formatação de Resultados:');
console.log('formatResult(3.14159) =', formatResult(3.14159));
console.log('formatResult(1000000000000) =', formatResult(1000000000000));
console.log('formatResult(0.000001) =', formatResult(0.000001));

console.log('\n✅ Todos os testes concluídos!');
