// Tipo "any" = qualquer coisa.
// JS não reclama deste tipo (sempre realizar o type annotation nesse caso)

function showMessage(msg: string) {
  return msg;
}

const result = showMessage('teste');
console.log(result);

export { result };
