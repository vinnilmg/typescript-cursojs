export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

export class Empresa {
  readonly nome: string;
  private readonly cnpj: string;
  protected readonly colaboradores: Colaborador[] = [];

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

export class Unibem extends Empresa {
  constructor() {
    super('Unibem', '11.111.111/0001-11');
  }

  demiteColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    return colaborador || null;
  }
}

const unibem = new Unibem();
unibem.novoColaborador({ nome: 'Vinicius', sobrenome: 'Lima' });
console.log(unibem);
console.log(unibem.demiteColaborador());
console.log(unibem.demiteColaborador());
