// Generics com classe

export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa('Vini', 25);
const pessoa2 = new Pessoa('Vini', '25');
const pessoa3 = new Pessoa('Vini', { idade: 25 });
const pessoa4 = new Pessoa<string, number>('Vini', 25);
const pessoa5 = new Pessoa<string, string>('Vini', '25');

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) return;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  length(): number {
    return this.contador;
  }

  getElements(): void {
    console.log(this.elementos);
  }
}

interface Livro {
  titulo: string;
  autor: string;
}

const pilhaDeLivros = new Pilha<Livro>();

pilhaDeLivros.push({ titulo: 'Dracula', autor: 'Eu' });
pilhaDeLivros.push({ titulo: 'One Piece', autor: 'Oda' });
pilhaDeLivros.push({ titulo: 'Naruto', autor: 'Kishimoto' });

pilhaDeLivros.getElements();
console.log('Livro removido:', pilhaDeLivros.pop());
pilhaDeLivros.getElements();
