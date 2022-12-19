export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (!this._ferramenta) {
      console.log('Sem ferramenta!');
      return;
    }

    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`Escrevendo com uma ${this.nome}`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`Digitando com uma ${this.nome}`);
  }
}

const caneta = new Caneta('Caneta BIC');
const maquina = new MaquinaEscrever('Maquina XT001');
const escritor = new Escritor('Vinicius de Moraes');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquina.nome);

escritor.ferramenta = caneta;
escritor.escrever();
