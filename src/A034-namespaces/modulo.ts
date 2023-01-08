// Criar um escopo pra ser utilizado
// com a palavra 'export' posso utilizar variaveis, objetos e etc fora do namespace

/* eslint-disable @typescript-eslint/no-namespace */

namespace MeuNamespace {
  export const nomeDoNamespace = 'MeuNamespace';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('teste');
  console.log(pessoaDoNamespace);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'OutroNamespace';
  }
}

/*const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Vini2');
console.log(pessoaDoNamespace);

console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);*/
