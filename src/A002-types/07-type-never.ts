// não retorna nada nunca
function criaErro(): never {
  throw new Error('Errooooo');
}

criaErro();
