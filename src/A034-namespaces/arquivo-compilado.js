// Criar um escopo pra ser utilizado
// com a palavra 'export' posso utilizar variaveis, objetos e etc fora do namespace
/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'MeuNamespace';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace('teste');
    console.log(pessoaDoNamespace);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'OutroNamespace';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
/*const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Vini2');
console.log(pessoaDoNamespace);

console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);*/
/* eslint-disable @typescript-eslint/triple-slash-reference */
// Importando o modulo com o namespace
/// <reference path="modulo.ts" />
console.log(MeuNamespace.nomeDoNamespace);
