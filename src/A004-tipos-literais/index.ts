let x = 10; // eslint-disable-line
x = 256;

// isso é tipo literal, não entende como um number e sim como o valor 10 (pois é uma constante e nunca vai ser diferente disso)
// é um subtipo de "number"
const y = 10;

// com objetos
const pessoa = {
  nome: 'Vini' as const,
  sobrenome: 'Lima',
};

// funcoes, só recebe valores do *tipo* 'Vermelho', 'Amarelo' ou 'Azul (funciona basicamente como um enum)
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul'));

// module mode
export default x;
