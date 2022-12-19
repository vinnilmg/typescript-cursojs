export class Motor {
  ligar(): void {
    console.log('Ligando o carro...');
  }

  acelerar(): void {
    console.log('Acelerando o carro...Vrummmm');
  }

  parar(): void {
    console.log('Parando o carro.');
  }
}

export class Cambio {
  trocarMarchar(marcha: string): void {
    console.log(`Trocando marcha para ${marcha}`);
  }
}

export class Carro {
  private readonly motor = new Motor();
  private readonly cambio = new Cambio();

  ligar(): void {
    this.motor.ligar();
    this.cambio.trocarMarchar('P');
    console.log('\n');
  }

  acelerar(): void {
    this.cambio.trocarMarchar('D');
    this.motor.acelerar();
    console.log('\n');
  }

  parar(): void {
    this.motor.parar();
    this.cambio.trocarMarchar('P');
    console.log('\n');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
