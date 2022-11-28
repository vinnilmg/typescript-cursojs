function addOrCon(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrCon(10, 5));
console.log(addOrCon('a', 'b'));
console.log(addOrCon(1, 'b'));
console.log(addOrCon('a', 2));
