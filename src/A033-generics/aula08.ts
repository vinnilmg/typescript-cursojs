// Utility types - Generics padrão do TS

// Tipo Record: Recebe <tipo chave, tipo valor>
const objeto1: Record<string, string | number> = {
  nome: 'vini',
  sobrenome: 'lima',
  idade: 20,
};
console.log(objeto1);

// Tipo Required: Obriga todos os campos opcionais a serem obrigatórios
type PessoaNotRequired = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

type PessoaRequired = Required<PessoaNotRequired>;

const pessoaRequired: PessoaRequired = {
  nome: 'vini',
  sobrenome: 'lima',
  idade: 20,
};
console.log(pessoaRequired);

// Type Partial: Faz com que os campos obrigatórios virem opcionais
type PessoaPartial = Partial<PessoaRequired>;

const pessoaPartial: PessoaPartial = {
  nome: 'vini',
};
console.log(pessoaPartial);

// Type Readonly: Transforma tudo em readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Type Pick: Pega somente as chaves informadas do objeto, recebe o objeto e os campos
type PessoaPick = Pick<PessoaRequired, 'nome' | 'idade'>;

/* --------------------------------------------------------------------------------- */
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// Type Extract: Do tipo 1 pega apenas o que se repete no tipo 2
type LetrasExtract = Extract<ABC, CDE>; // Pega somente C

// Type Exclude: Do tipo 1 pega apenas o que não se repete no tipo 2
type LetrasExclude = Exclude<ABC, CDE>; // Pega somente A e B

// Module mode
export default 1;
