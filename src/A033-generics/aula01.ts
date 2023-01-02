// Generic <> => Usado quando nao sei o qual tipo vou receber, o tipo é inferido automaticamente de acordo com o que é recebido

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArrayFiltered = [];

  for (let i = 0; i < array.length; i++) {
    callbackfn(array[i]) ? newArrayFiltered.push(array[i]) : false;
  }

  return newArrayFiltered;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFiltradoOriginal = array.filter((value) => value < 5);
const arrayFiltrado = meuFilter(array, (value) => value < 5);

console.log(arrayFiltradoOriginal);
console.log(arrayFiltrado);
