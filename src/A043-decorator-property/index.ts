function decorator(classPrototype: any, nome: string | symbol): any {
  console.log(classPrototype);
  console.log(nome);

  let valorProp: any;

  return {
    get: () => valorProp,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorProp = valor.split('').reverse().join('');
      } else {
        valorProp = valor;
      }
    },
  };
}

export default class OutraPessoa {
  // Decorando as propriedades da classe
  @decorator nome: string;
  @decorator sobrenome: string;
  @decorator idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  fala(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(value: string) {
    const palavras = value.split(/\s+/g);
    const primeiroNome = palavras.shift();

    if (!primeiroNome) return;

    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new OutraPessoa('Vinicius', 'Lima', 18);
console.log(pessoa.fala('Teste'));
