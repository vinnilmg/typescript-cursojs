// Restrições em Generics (constraints)

// Extends é utilizado para inserir restrições em tipos

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const getKey: ObterChaveFn = (objeto, chave) => objeto[chave];

console.log(getKey({ nome: 'vini', idade: 20, raca: 'branco' }, 'raca'));
console.log(getKey({ nome: 'vini', idade: 20 }, 'idade'));
