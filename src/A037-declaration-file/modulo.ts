import _ from 'lodash';

_.mul = (array: number[]): number => {
  return array.reduce((total, valorAtual) => total * valorAtual, 1);
};

global.MINHAGLOBAL = 'MINHA GLOBAL CRIADA';

export default _;
