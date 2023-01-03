// Type predicate

// Quando a funcao retornar boleano, posso indicar o tipo da funcao assim: value is number
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function somar<T>(...args: T[]): number {
  return args.reduce((soma, valor) => {
    if (isNumber(valor)) {
      return soma + valor;
    }
    return soma;
  }, 0);
}

console.log(somar(1, 2, 3));
console.log(somar('a', 'b', 'c'));
console.log(somar(...[1, 2, 'a', 3, 'b']));
