// modelando uma forma
interface TipoPessoa {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}

// é possível extender interfaces (1 ou muitas)
interface TipoPessoa2 extends TipoPessoa {
  idade: number;
}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string, public idade: number) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Maria', 'Lima', 25);
console.log(pessoa.nomeCompleto());
