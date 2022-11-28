// "meus tipos" -> iniciar sempre com letra maiúscula
type Nome = string;
type Idade = number;
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;
type Pessoa = {
  nome: Nome;
  idade: Idade;
  salario: number | undefined;
  corPreferida?: CorPreferida;
};

const pessoa: Pessoa = {
  nome: 'Vinicius',
  idade: 18,
  salario: 2_500,
  corPreferida: 'Ciano',
};

console.log(pessoa);

function criaPessoa(nome: Nome, idade: Idade, salario: number, corPreferida: CorPreferida): Pessoa {
  return { nome, idade, salario, corPreferida };
}

console.log(criaPessoa('Maria', 18, 3_000, 'Magenta'));
