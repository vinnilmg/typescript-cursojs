// Generics com Interface e Type Alias

// utilizando tipo padrao caso nao seja enviado
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

// funciona como a interface (também aceita valores padrao)
type PessoaProtocolo2<T, U> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

// enviando o tipo, nao vai usar o padrao
const aluno: PessoaProtocolo<string, string> = {
  nome: 'maria',
  sobrenome: 'lima',
  idade: '18',
};

// usando o tipo padrao
const aluno2: PessoaProtocolo = {
  nome: 'vini',
  sobrenome: 'lima',
  idade: 18,
};

console.log(aluno);
console.log(aluno2);

// usando o type
const aluno3: PessoaProtocolo2<string, number> = {
  nome: 'vini2',
  sobrenome: 'lima',
  idade: 20,
};

console.log(aluno3);
