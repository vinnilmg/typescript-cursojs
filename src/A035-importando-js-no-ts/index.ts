// Para importar JS no TS: Ativar a opção "allowJs": true

import { soma } from './modulo';

const result = soma(5, 10) as number;
console.log(result);
