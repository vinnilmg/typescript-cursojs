type FunctionReturnString = (item: string) => string;

function chamaFuncao(valor: string, callbackfn: FunctionReturnString): string {
  return callbackfn(valor);
}

const teste = chamaFuncao('Teste', (item: string) => item.toUpperCase());
console.log(teste);
