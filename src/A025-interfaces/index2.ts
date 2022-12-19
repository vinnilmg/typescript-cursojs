// aqui é realizado o "Declaration merging" de interface (junta as interfaces com o mesmo nome em um objeto maior)

interface NewPessoa {
  nome: string;
}

interface NewPessoa {
  readonly sobrenome: string;
}

interface NewPessoa {
  readonly enderecos: readonly string[]; // nao poderá incluir um novo endereço no array
}

interface NewPessoa {
  readonly idade?: number; // pode existir ou não
}

const newPessoa: NewPessoa = {
  nome: 'Vinicius',
  sobrenome: 'Lima',
  enderecos: ['Av. Brasil'],
};

console.log(newPessoa);
