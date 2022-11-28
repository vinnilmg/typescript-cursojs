export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {} // aqui já define as variaveis, recebe no construtor e inicializa
}

export class Empresa {
  public readonly nome: string; // public nao é necessário
  protected readonly cnpj: string;
  private readonly colaboradores: Colaborador[] = [];

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  novoColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  exibeColaboradores(): void {
    console.log('Colaboradores:');

    for (const colab of this.colaboradores) console.log(colab);
  }
}

// empresa
const empresa1 = new Empresa('Unibem', '11.111.111/1000-11');
console.log(empresa1.nome); // public

// colaboradores
const colaborador1 = new Colaborador('Vinicius', 'Lima');
const colaborador2 = new Colaborador('Edvaldo', 'Galano');
const colaborador3 = new Colaborador('Maria', 'Helena');

empresa1.novoColaborador(colaborador1), empresa1.novoColaborador(colaborador2), empresa1.novoColaborador(colaborador3);

console.log(empresa1);
empresa1.exibeColaboradores();
