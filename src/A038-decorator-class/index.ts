// Decorator para classes: Um objeto que "finge" ser o objeto real

// Decorando a classe com a função decoradora
@funcDecorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

// Função decoradora
// tipando o construtor de 'T' (para indicar que vou receber uma classe de qualquer tipo)
function funcDecorator<T extends new (...args: any) => any>(target: T) {
  console.log('Bateu no decorator...');

  // Retornando uma classe anônima
  return class extends target {
    nome: string;
    cor: string;

    // pega os valores recebidos e inverte os textos
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
