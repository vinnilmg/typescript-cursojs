// Decorador de método
export function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log('Bati no decorator...');
  console.log('classPrototype:', classPrototype);
  console.log('methodName:', methodName);
  console.log('descriptor:', descriptor);

  return {
    value: (...args: string[]) => {
      return args[0].toUpperCase();
    },
  };
}
