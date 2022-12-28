// usar o "this" como tipo (retorna a própria instancia do objeto, é utilizado no padrao Builder)

export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this; // retornando a propria instancia da classe
  }

  sub(n: number): this {
    this.numero -= n;
    return this; // retornando a propria instancia da classe
  }

  div(n: number): this {
    this.numero /= n;
    return this; // retornando a propria instancia da classe
  }

  mul(n: number): this {
    this.numero *= n;
    return this; // retornando a propria instancia da classe
  }
}

const calc1 = new Calculadora(10);
const calc2 = new Calculadora(30);

// usando o this para aplicar chamadas em cadeia
console.log(calc1.add(10).sub(5).mul(10).div(2));
console.log(calc2.add(10).sub(5).mul(10).div(2).numero);

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this; // retornando a propria instancia da classe
  }
}

const calc3 = new SubCalculadora(10);
console.log(calc3.add(5).mul(2).div(2).sub(5).pow(2));

// Padrao Builder - GoF (utilizado para objetos muito grandes)

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} na url ${this.url}`);
  }
}

new RequestBuilder().setMethod('get').setUrl('http://localhost:8080').send();
