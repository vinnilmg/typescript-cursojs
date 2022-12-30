// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
  autor?: string;
};

const documento: Documento = {
  titulo: 'Teste',
  texto: 'Texto teste',
  //data: new Date(),
};

// ? => encadeamento opcional, caso seja undefined, o método não é chamado
// ?? => coalescência nula , checa "não valores" => null e undefined
console.log(documento.autor?.toString());
console.log(documento.data?.toDateString() ?? 'Não existe data!!');

console.log(undefined ?? 'Teste123');
console.log(null ?? 'Teste456');
console.log(false ?? 'Teste789'); // aqui retorna o valor pois é falso
