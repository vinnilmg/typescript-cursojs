// métodos e funções que não retornam nada, "retornam" o tipo void

function semRetorno(...args: string[]): void {
  console.log(args.join('-'));
}

semRetorno('a', 'b');

const pessoa = {
  nome: 'Vinicius',
  sobrenome: 'Gomes',

  exibeNomeCompleto(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibeNomeCompleto();

export { pessoa };
