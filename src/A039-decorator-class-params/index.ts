// Passando parametros para o decorator

@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

// Função que recebe os parametros e retorna a funcao decoradora
function inverteNomeECor(param1: string, param2: string) {
  // Closure

  console.log(`Argumentos: ${param1} | ${param2}`);

  return function <T extends new (...args: any) => any>(target: T) {
    console.log('Bateu no decorator recebendo: ', target);

    return class extends target {
      nome: string;
      cor: string;

      constructor(...args: any) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(texto: string): string {
        return texto.split('').reverse().join('') + param1 + param2;
      }
    };
  };
}

const animal = new Animal('macaco', 'branco');
console.log(animal);
