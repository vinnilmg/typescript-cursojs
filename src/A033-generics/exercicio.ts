// Exercício votação

export class Opcao {
  public qtdVotos = 0;

  constructor(public nome: string) {}

  votar(): void {
    this.qtdVotos++;
  }
}

export class Votacao {
  private pergunta = '';
  private opcoes: Opcao[] = [];
  private qtdVotosTotais = 0;

  adicionarQuestao(pergunta: string): void {
    this.pergunta = pergunta;
  }

  adicionarOpcoes(...opcoes: string[]): void {
    for (const op of opcoes) {
      const opcao = new Opcao(op);
      this.opcoes.push(opcao);
    }
  }

  votar(voto: string): void {
    for (const opcao of this.opcoes) {
      if (opcao.nome === voto) {
        opcao.votar();
        this.qtdVotosTotais++;
      }
    }
  }

  totalizacaoDeVotos(): void {
    console.log(`Pergunta: ${this.pergunta}`);
    console.log(`Qtd de votos totais: ${this.qtdVotosTotais}`);
    for (const i in this.opcoes) {
      console.log(` - Opção: ${this.opcoes[i].nome} | Votos: ${this.opcoes[i].qtdVotos}`);
    }
  }
}

const votacao: Votacao = new Votacao();
votacao.adicionarQuestao('Qual seu herói favorito?');
votacao.adicionarOpcoes('Batman', 'Flash', 'Homem-Aranha');

// Votacao
votacao.votar('Batman');
votacao.votar('Flash');
votacao.votar('Homem-Aranha');
votacao.votar('Batman');
votacao.votar('Flash');
votacao.votar('Batman');

votacao.totalizacaoDeVotos();
