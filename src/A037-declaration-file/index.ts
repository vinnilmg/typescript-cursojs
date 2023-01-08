import _ from './modulo';

const array = [2, 3];

console.log(_.sum(array));
console.log(_.max(array));
console.log(_.min(array));
console.log(_.mean(array));

// reconheceu a função criada no 'modulo' pois foi feito o declaration merging com o namespace criado no declaration file
console.log(_.mul(array));

console.log(global.MINHAGLOBAL);
