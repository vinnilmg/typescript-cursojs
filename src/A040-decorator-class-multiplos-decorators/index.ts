// Multiplos decorators em numa classe

interface ConstructorType {
  new (...args: any): any;
}

@decorator2 // chama esse em 2°
@decorator1 // chama esse em 1°
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator2(target: ConstructorType) {
  console.log('Bateu no decorator2 recebendo:', target);
  return target;
}

function decorator1(target: ConstructorType) {
  console.log('Bateu no decorator1 recebendo:', target);

  return class extends target {
    nome: string;
    cor: string;

    constructor(...args: any) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(texto: string): string {
      return texto.split('').reverse().join('');
    }
  };
}

const animal = new Animal('macaco', 'branco');
console.log(animal);
