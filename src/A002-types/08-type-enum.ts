// Exclusivo do TypeScript

enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

console.log(Cores);
console.log(Cores.VERMELHO); // RETORNA 0
console.log(Cores[0]); // RETORNA VERMELHO

enum Animais {
  MACACO = 100,
  BALEIA = 200,
  TIGRE = 300,
  LEAO = 'STRINGKEY',
}

console.log(Animais);
console.log(Animais.MACACO);

// merge de enums
enum Cores {
  ROSA = 5,
  BRANCO,
  PRETO,
}

console.log('Mergeado:', Cores);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.AZUL);
