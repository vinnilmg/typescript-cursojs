// Para bibliotecas externas, instalar a dependencia e depois o types da dependencia (para ter documentacao, autocomplete e etc)

import validator from 'validator';
import _ from 'lodash';

console.log(validator.isEmail('vini@mail.com'));
console.log(_.clone([1, 2, 3]));
