// Array e Promises são genéricos

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1 * 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
minhaPromise().then((result) => console.log(result + 1));
