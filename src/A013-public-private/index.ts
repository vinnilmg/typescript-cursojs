// public: acessível dentro da classe, fora da classe e por sub-classes (se eu nao falar qual o modificador de acesso, automaticamente ele é publico)
// private: só é acessível dentro da classe que foi criado (encapsulamento)

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {} // aqui já define as variaveis, recebe no construtor e inicializa
}

export class Empresa {
  public readonly nome: string; // public nao é necessário
  protected readonly cnpj: string; // só pode ser acessado dentro da classe
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

  public getNome(): string {
    return this.nome;
  }
}

const empresa1 = new Empresa('Unibem', '11.111.111/1000-11');
const colaborador1 = new Colaborador('Vinicius', 'Lima');
empresa1.novoColaborador(colaborador1);

console.log(empresa1.nome, empresa1.getNome()); // acessando fora da classe
