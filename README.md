[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/wEcAEX3Y)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=21048137&assignment_repo_type=AssignmentRepo)
# CP5 - Calculadora Científica

## Objetivo
Desenvolver uma **Calculadora Científica** utilizando **React Native**, aplicando os conceitos de componentes, estado, estilização e lógica de programação aprendidos em aula.

---

## Descrição do Projeto

Você deverá criar uma calculadora científica funcional que permita ao usuário realizar operações matemáticas básicas e científicas. O projeto deve seguir boas práticas de desenvolvimento, com código organizado, comentado e de fácil compreensão.

---

##  Requisitos Técnicos

### **Tecnologias Obrigatórias:**
- React Native
- Expo (recomendado para facilitar o desenvolvimento)
- Hooks do React (useState, useEffect se necessário)

### **O que deve ser entregue:**
- Código-fonte completo do projeto
- Arquivo README.md explicando como executar o projeto
- Prints ou vídeo curto demonstrando o funcionamento

---

##  Funcionalidades Obrigatórias

### **1. Interface do Usuário**
- Display para mostrar a operação atual e o resultado
- Botões numéricos de 0 a 9
- Botões para operações básicas: adição (+), subtração (-), multiplicação (×) e divisão (÷)
- Botão de igual (=) para executar o cálculo
- Botão para limpar tudo (C ou AC)
- Botão para apagar o último dígito (DEL ou ⌫)
- Layout organizado e responsivo

### **2. Operações Básicas**
Sua calculadora deve realizar corretamente:
- Adição
- Subtração
- Multiplicação
- Divisão
- Cálculos sequenciais (ex: 5 + 3 - 2 = 6)

### **3. Operações Científicas**
Implemente as seguintes funções científicas:
- **Potência**: x² (elevar ao quadrado)
- **Raiz Quadrada**: √ (raiz quadrada)
- **Trigonometria**: sin, cos, tan
- **Porcentagem**: % (calcular porcentagem)
- **Constantes**: π (número Pi)
- **Decimais**: permitir números com vírgula/ponto

### **4. Tratamento de Erros**
- Divisão por zero deve exibir mensagem de erro
- Operações inválidas devem ser tratadas adequadamente
- Não permitir múltiplas operações consecutivas sem números

---

## Funcionalidades Bônus (Opcional)

### **Bônus 1: Histórico de Cálculos** (+10 pontos)
- Armazenar os últimos 5 cálculos realizados
- Exibir o histórico em uma lista visível ou em modal
- Botão para limpar o histórico

### **Bônus 2: Tema Claro/Escuro** (+10 pontos)
- Implementar alternância entre modo claro e escuro
- Botão de toggle para trocar entre os temas
- Cores e estilos diferentes para cada modo
- Transição suave entre os temas

---

## Critérios de Avaliação

### **1. Estrutura e Organização do Projeto (15 pontos)**
| Critério | Pontos |
|----------|--------|
| Componentes separados em arquivos diferentes | 5 pts |
| Código comentado explicando cada parte | 5 pts |
| Nomenclatura clara de variáveis e funções | 5 pts |

** Dica:** Crie arquivos separados para o Display, Botões e Tela principal. Comente explicando o que cada função faz e por quê!

---

### **2. Interface do Usuário (20 pontos)**
| Critério | Pontos |
|----------|--------|
| Layout responsivo e bem organizado | 8 pts |
| Display mostrando operação e resultado | 7 pts |
| Botões numéricos e de operações básicas | 5 pts |

** Dica:** Use StyleSheet do React Native. Pense na experiência do usuário - botões grandes e fáceis de clicar!

---

### **3. Funcionalidades Básicas (25 pontos)**
| Critério | Pontos |
|----------|--------|
| Operações básicas (+, -, ×, ÷) funcionando | 8 pts |
| Botão de limpar (C ou AC) | 5 pts |
| Botão de apagar último dígito (DEL) | 5 pts |
| Botão de igual (=) calculando corretamente | 4 pts |
| Tratamento de erros (divisão por zero, etc.) | 3 pts |

** Dica:** Teste cada operação várias vezes! Tente quebrar sua calculadora para encontrar bugs.

---

### **4. Funcionalidades Científicas (25 pontos)**
| Critério | Pontos |
|----------|--------|
| Operação de potência (x²) | 5 pts |
| Raiz quadrada (√) | 5 pts |
| Funções trigonométricas (sin, cos, tan) | 5 pts |
| Porcentagem (%) | 5 pts |
| Número Pi (π) e números decimais | 5 pts |

** Dica:** Use Math.pow(), Math.sqrt(), Math.sin(), etc. do JavaScript. Lembre-se que as funções trigonométricas trabalham com radianos!

---

### **5. Lógica e Estado (15 pontos)**
| Critério | Pontos |
|----------|--------|
| Gerenciamento correto do estado com useState | 8 pts |
| Lógica de cálculo funcionando sequencialmente | 7 pts |

** Dica:** Planeje seu estado antes de começar a codificar. O que precisa ser armazenado? Número atual? Operação selecionada? Resultado anterior?

---

### **6. Funcionalidades Bônus (Opcional)**

#### **Bônus 1: Histórico de Cálculos (+10 pontos)**
| Critério | Pontos |
|----------|--------|
| Armazenar últimos 5 cálculos | 4 pts |
| Exibir histórico em lista rolável | 3 pts |
| Permitir limpar o histórico | 3 pts |

#### **Bônus 2: Modo Claro/Escuro (+10 pontos)**
| Critério | Pontos |
|----------|--------|
| Botão de alternância entre temas | 4 pts |
| Cores diferentes para cada modo | 4 pts |
| Transição suave entre temas | 2 pts |

---

## Pontuação Final

| Categoria | Pontos Possíveis |
|-----------|------------------|
| **Total Base** | 100 pontos |
| **Bônus 1** | +10 pontos |
| **Bônus 2** | +10 pontos |
| **MÁXIMO** | 120 pontos |
---

## Estrutura de Pastas Sugerida

```
calculadora-cientifica/
├── App.js
├── src/
│   ├── components/
│   │   ├── Display.js          // Exibe o resultado
│   │   ├── Button.js           // Botão individual
│   │   ├── ButtonGrid.js       // Grade de botões
│   │   └── HistoryList.js      // (Bônus 1)
│   ├── screens/
│   │   └── CalculatorScreen.js // Tela principal
│   └── utils/
│       └── calculations.js     // Funções de cálculo
└── README.md
```

---

## Boas Práticas Obrigatórias

### **1. Comentários no Código**
```javascript
// ERRADO - Sem comentários
const [num, setNum] = useState(0);

// CORRETO - Com explicação
// Estado que armazena o número atual digitado pelo usuário
const [currentNumber, setCurrentNumber] = useState('0');
```

### **2. Separação de Componentes**
```javascript
// ERRADO - Tudo em um arquivo só
// ... 500 linhas de código ...

// CORRETO - Componentes separados
// Display.js - apenas o display
// Button.js - apenas o botão
// CalculatorScreen.js - lógica principal
```

### **3. Nomenclatura Clara**
```javascript
// ERRADO - Nomes confusos
const x = () => { ... }
const btn = () => { ... }

// CORRETO - Nomes descritivos
const calculateResult = () => { ... }
const handleButtonPress = () => { ... }
```

---

## Prazo de Entrega

**Data de Entrega:** 20/10/2025 12h09min

**Formato de Entrega:**
- Link do repositório GitHub (preferencial)
- OU arquivo .zip com o projeto completo
- Incluir README.md com instruções de como executar

---

## Atenção!

### **Será descontado pontos se:**
- Código sem comentários explicativos
- Tudo em um único arquivo
- Funções não funcionarem corretamente
- Código copiado sem entendimento (plágio será penalizado)
- Não seguir a estrutura de pastas sugerida

### **Pontos extras por:**
- Código muito bem organizado e comentado
- Criatividade no design (sem perder funcionalidade)
- README.md bem escrito e detalhado
- Commits organizados no GitHub

---

## Dúvidas?

- Tire suas dúvidas **antes** do prazo de entrega
- Consulte a documentação oficial do React Native
- Revise os conceitos vistos em aula
- Use console.log() para debugar seu código

---

## Objetivo de Aprendizado

Esta atividade avalia sua capacidade de:
- Criar interfaces com React Native
- Gerenciar estado com Hooks
- Implementar lógica de programação
- Organizar e documentar código
- Resolver problemas de forma independente

---

**Boa sorte e bom código! 🚀**

*Lembre-se: código limpo e bem comentado vale mais que código complexo e confuso!*
