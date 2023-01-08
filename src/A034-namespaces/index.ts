/* eslint-disable @typescript-eslint/triple-slash-reference */

// Importando o arquivo inteiro (arquivo com o namespace)
/// <reference path="modulo.ts" />

console.log(MeuNamespace.nomeDoNamespace);

// Para gerar o arquivo bundle: npx tsc {nomeArquivoOriginal}.ts --outFile {nomeArquivoCompilado}.js
