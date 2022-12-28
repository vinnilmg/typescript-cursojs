/*type CoresObj = {
  vermelho: string;
  verde: string;
  azul: string;
  amarelo: string;
};*/

type CoresObj = typeof colors; // pega o tipo
type CoresKeys = keyof CoresObj; // pega as chaves

const colors = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  amarelo: 'yellow',
};

function traduzirCor(cor: CoresKeys, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', colors));
console.log(traduzirCor('azul', colors));
