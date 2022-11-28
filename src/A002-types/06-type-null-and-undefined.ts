let x;
if (typeof x === 'undefined') x = 10;
console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function multiplicaPor2(x: any) {
  if (typeof x === 'number') return x * 2;
  return null;
}

const multiplicaComNum = multiplicaPor2(10);
const multiplicaComStr = multiplicaPor2('10');

if (multiplicaComNum === null) {
  console.log('Variavel é null 1!');
}

if (multiplicaComStr === null) {
  console.log('Variavel é null 2!');
}
