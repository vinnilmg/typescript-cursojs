// funciona como um "any" mais "seguro" (força a fazer a checagem de tipo antes de utiliza-lo)
// utilizar ele ao invés de any caso tenha que receber algo que não saiba o tipo

let x: unknown;

x = 100;
x = 'teste';
x = 150;
x = 10;

const y = 15;

if (typeof x === 'number') console.log(x * y);
