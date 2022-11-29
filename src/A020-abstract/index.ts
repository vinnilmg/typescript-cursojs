// classes abstratas não podem ser instanciadas diretamente (somente por classes concretas)
// atributos ou métodos abstratos devem ser implementados por quem extendeu da classe

export abstract class Personagem {
  protected abstract emoji: string; // atributo abstrato
  private emojiPerdendoVida = '\u{1F635}';
  private emojiAtaque = '\u{1F4A5}';

  constructor(protected nome: string, protected ataque: number, protected vida: number) {}

  atacar(personagem: Personagem): void {
    console.log(`${this.emojiAtaque} ${this.nome} está atacando...`);
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emojiPerdendoVida} ${this.nome} está perdendo vida e agora tem ${this.vida} de HP.\n`);
  }

  // método abstrato
  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{2694}';

  bordao(): void {
    console.log(this.emoji, 'VOCE IRÁ SENTIR A FURIA DE MINHA ESPADA!!! AAAAAAAAAAAAAA!');
  }
}

export class Arqueiro extends Personagem {
  protected emoji = '\u{1F3F9}';

  bordao(): void {
    console.log(this.emoji, 'VOCE IRÁ SENTIR MINHAS FLECHAS TE PENETRANDO!!!!!!!!!');
  }
}

const guerreira = new Guerreira('Monkey D. Luffy', 15, 250);
const arqueiro = new Arqueiro('Ussop', 18, 220);

guerreira.atacar(arqueiro);
arqueiro.atacar(guerreira);
