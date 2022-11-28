const objetoA: {
  chaveA: string;
  readonly chaveB: string; // somente leitura
  chaveC?: string; // parâmetro opcional
  [key: string]: unknown; // permitir a criação de novas chaves
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'outro valor';
objetoA.chaveC = 'Valor novo';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);
