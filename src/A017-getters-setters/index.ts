export class Pessoa {
  constructor(private nome: string, private sobrenome: string, private idade: number, private _cpf: string) {
    this.cpf = _cpf; // chamando setter
  }

  // se comporta como um atributo
  get cpf(): string {
    console.log('GET CHAMADO');
    return this._cpf.replace(/\D/g, ''); // remove o que nao for numero
  }

  set cpf(cpf: string) {
    console.log('SET CHAMADO');
    this._cpf = cpf;
  }
}

const pessoa = new Pessoa('Maria', 'Helena', 20, '111.111.111-17');

// Chamando Setter
pessoa.cpf = '222.222.222-15';

// Chamando Getter
console.log(pessoa.cpf);
