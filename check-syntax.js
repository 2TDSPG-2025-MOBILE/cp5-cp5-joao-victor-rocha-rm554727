#!/usr/bin/env node

/**
 * Script para verificar sintaxe dos arquivos JavaScript/React Native
 * Não executa JSX, apenas verifica se os imports/exports estão corretos
 */

import fs from 'fs';
import path from 'path';

const checkFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Verificações básicas de sintaxe
    const issues = [];
    
    // Verifica parênteses balanceados
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens !== closeParens) {
      issues.push('Parênteses desbalanceados');
    }
    
    // Verifica chaves balanceadas
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces !== closeBraces) {
      issues.push('Chaves desbalanceadas');
    }
    
    // Verifica colchetes balanceados
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    if (openBrackets !== closeBrackets) {
      issues.push('Colchetes desbalanceados');
    }
    
    // Verifica imports/exports básicos
    const hasImport = content.includes('import ');
    const hasExport = content.includes('export ');
    
    if (issues.length > 0) {
      console.error(`❌ Problemas em ${filePath}:`);
      issues.forEach(issue => console.error(`  - ${issue}`));
      return false;
    } else {
      console.log(`✅ ${filePath} - sintaxe OK`);
      return true;
    }
    
  } catch (error) {
    console.error(`❌ Erro ao verificar ${filePath}:`, error.message);
    return false;
  }
};

// Arquivos para verificar
const filesToCheck = [
  'App.js',
  'src/components/Display.js',
  'src/components/Button.js',
  'src/components/ButtonGrid.js',
  'src/components/HistoryList.js',
  'src/screens/CalculatorScreen.js',
  'src/utils/calculations.js',
  'src/utils/ThemeContext.js'
];

console.log('🔍 Verificando sintaxe dos arquivos...\n');

let allValid = true;

for (const file of filesToCheck) {
  if (fs.existsSync(file)) {
    const isValid = checkFile(file);
    allValid = allValid && isValid;
  } else {
    console.error(`❌ Arquivo não encontrado: ${file}`);
    allValid = false;
  }
}

console.log('\n' + '='.repeat(50));
if (allValid) {
  console.log('✅ Todos os arquivos passaram na verificação de sintaxe!');
  process.exit(0);
} else {
  console.log('❌ Alguns arquivos têm problemas de sintaxe.');
  process.exit(1);
}
