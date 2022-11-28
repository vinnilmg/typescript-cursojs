// Exclusivo no TypeScript

// tupla mutável
const dadosCliente1: [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Roberto'];
const dadosCliente3: [number, string, string?] = [11, 'Vinicius']; // ultimo valor é opcional
const dadosCliente4: [number, string, ...string[]] = [11, 'Vinicius', 'teste', 'abc', 'ihu']; // utilizado rest operator

dadosCliente1[0] = 10;

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// tupla imutável
const dadosCliente5: readonly [number, string] = [1, 'Teste'];
console.log(dadosCliente5);
