// Overload: Fazer a função se comportar diferente de acordo com os parâmetros recebidos

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((soma, valorAtual) => soma + valorAtual, 0) + x + (y || 0);
  return x + (y || 0);
};

// consigo usar a funcao das 3 formas
console.log(adder(10));
console.log(adder(10, 20));
console.log(adder(10, 20, 1, 2, 3, 4));
