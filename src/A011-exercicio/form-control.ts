import isEmail from 'validator/lib/isEmail';

console.log('Iniciando validações...');

const ERR_CLASS = 'show-error-message';
const form = document.querySelector('.form') as HTMLFormElement;

form.addEventListener('submit', (event: Event): void => {
  event.preventDefault();
  const usuario = document.querySelector('.username') as HTMLInputElement;
  const email = document.querySelector('.email') as HTMLInputElement;
  const senha = document.querySelector('.senha') as HTMLInputElement;
  const senha2 = document.querySelector('.senha2') as HTMLInputElement;

  if (!usuario.value || usuario.value.length <= 6) {
    exibeErro(usuario, 'Usuário inválido!');
  } else {
    removeErro(usuario);
  }

  if (!isEmail(email.value)) {
    exibeErro(email, 'Email inválido!');
  } else {
    removeErro(email);
  }

  if (!senha.value || senha.value.length <= 6) {
    exibeErro(senha, 'Senha inválida!');
  } else {
    removeErro(senha);
  }

  if (!senha2.value || senha2.value !== senha.value) {
    exibeErro(senha2, 'Senhas diferentes!');
  } else {
    removeErro(senha2);
  }

  if (enviarFormulario(form)) form.submit();
});

function exibeErro(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const erro = formFields.querySelector('.error-message') as HTMLSpanElement;
  erro.innerText = msg;
  erro.classList.add(ERR_CLASS);
}

function removeErro(input: HTMLInputElement): void {
  const formFields = input.parentElement as HTMLDivElement;
  const erro = formFields.querySelector('.error-message') as HTMLSpanElement;
  erro.classList.remove(ERR_CLASS);
}

function enviarFormulario(form: HTMLFormElement): boolean {
  let enviarForm = true;

  form.querySelectorAll('.form-fields').forEach((formField) => {
    const temErro = formField.querySelector('.' + ERR_CLASS);

    if (temErro) enviarForm = false;
  });

  return enviarForm;
}
