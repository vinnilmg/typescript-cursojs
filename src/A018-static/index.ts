export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(public nome: string, public sobrenome: string, public idade: number, public cpf: string) {}

  static tiposDePessoas(): void {
    console.log('FISICA', 'JURIDICA');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

Pessoa.tiposDePessoas();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);

const pessoa = new Pessoa('Maria', 'Helena', 20, '111.111.111-17');
const pessoa2 = Pessoa.criaPessoa('Vinicius', 'Lima');

console.log(pessoa);
console.log(pessoa2);
