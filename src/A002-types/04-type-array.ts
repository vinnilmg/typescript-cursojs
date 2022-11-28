// Array<T> - T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplicaArgs(2, 5, 1));
console.log(concatenaStrings('vi', 'ni'));
console.log(toUpperCase('vi', 'ni', 'ab'));
