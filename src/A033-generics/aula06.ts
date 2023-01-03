// Generics com intersection (&)

export function unirObjetos<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return { ...obj1, ...obj2 };
}

console.log(unirObjetos({ nome: 'teste' }, { endereco: 'Rua teste' }));
