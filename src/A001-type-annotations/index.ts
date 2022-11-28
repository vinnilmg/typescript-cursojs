/* eslint-disable */

// Tipos básicos
let nome: string = 'Luiz';
let idade: number = 30; // qualquer tipo de número
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4.5];
let arrayDeNumeros2: number[] = [1, 2, 3, 4.5];

let arrayDeStrings: Array<string> = ['teste', 'abc', '12345'];
let arrayDeStrings2: string[] = ['teste', 'abc', '12345'];

// Objetos
// ? = parâmetro opcional
let pessoa: {nome: string, idade:number, adulto?: boolean} = {
  nome: 'teste', idade: 18
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const result = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;

export { nome };
