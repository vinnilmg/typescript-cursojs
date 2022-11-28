type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// pode ter nome ou sobrenome ou idade ou os 3 (| - OU) -> union type
type Pessoa = TemNome | TemSobrenome | TemIdade;

// intersection type -> precisa ter os 3 (& - AND)
type PessoaCompleta = TemNome & TemSobrenome & TemIdade;

const pessoa1: Pessoa = {
  nome: 'Vinicius',
};

const pessoa2: PessoaCompleta = {
  nome: 'Bianca',
  sobrenome: 'Teste',
  idade: 18,
};

console.log(pessoa1, pessoa2);

// Também é possível utilizar pra pegar a interseção
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC; // => obtém o 'A'

export { Pessoa };
