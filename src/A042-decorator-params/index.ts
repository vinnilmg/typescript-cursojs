function decorador(classPrototype: any, nomeMetodo: string | symbol, index: number): any {
  console.log('\nBati no decorator...');
  console.log('classPrototype:', classPrototype);
  console.log('nomeMetodo:', nomeMetodo);
  console.log('index:', index);
}

export default class OutraPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  // decorando os parametros
  constructor(@decorador nome: string, @decorador sobrenome: string, @decorador idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  // decorando o parametro
  fala(@decorador msg: string): string {
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
console.log(pessoa.fala('Ola'));
