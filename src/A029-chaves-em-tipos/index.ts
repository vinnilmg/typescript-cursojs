// pegando o valor das chaves de outros tipos (espelhando)

type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2006,
  name: 'Focus',
};

console.log(carro);
