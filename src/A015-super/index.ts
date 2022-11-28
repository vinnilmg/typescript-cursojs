// SUPERCLASSE (BASE CLASS, PARENT CLASS)
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

// SUBCLASSES Aluno e Cliente
export class Aluno extends Pessoa {
  // sobrescrevendo o construtor da superclasse -> recebendo e repassando os valores e criando um novo campo 'sala'
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto() {
    console.log('Fazendo algo antes - ALUNO');
    return super.getNomeCompleto(); // chama o método da super classe
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto() {
    console.log('Fazendo algo antes - CLIENTE');
    const result = super.getNomeCompleto(); // chama o método da superclasse
    return result + 'YYYYYYYYY'; // aqui alterei o retorno do método da superclasse
  }
}

const aluno = new Aluno('Vini', 'Lima', 23, '123.123.123.17', '01-B');
const cliente = new Cliente('Vini', 'Lima', 23, '123.123.123.17');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
