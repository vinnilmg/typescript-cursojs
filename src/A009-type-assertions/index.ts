// Condicional -> recomendado
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red'; // => se passar do IF, quer dizer q o body nao é nulo

// Non-null assertion (!) -> não recomendado
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion -> recomendado
const body3 = document.querySelector('body') as HTMLBodyElement; // estou dizendo com certeza q a variável não será nula
body3.style.background = 'red';

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'teste';
input.focus();
