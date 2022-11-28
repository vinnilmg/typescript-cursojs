export class Pessoa {
  constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string) {}

  getIdade(): number {
    return this.idade;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome} - PESSOA`;
  }

  getCpf(): string {
    return this.cpf;
  }
}

// herdando de uma classe concreta -> Pessoa
// sobrescrevendo método getNomeCompleto -> polimorfismo
export class Aluno extends Pessoa {
  getNomeCompleto() {
    return `${this.nome} ${this.sobrenome} - ALUNO`;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto() {
    return `${this.nome} ${this.sobrenome} - CLIENTE`;
  }
}

const aluno = new Aluno('Vini', 'Lima', 23, '123.123.123.17');
const cliente = new Cliente('Vini', 'Lima', 23, '123.123.123.17');
const pessoa = new Pessoa('Vini', 'Lima', 23, '123.123.123.17');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
