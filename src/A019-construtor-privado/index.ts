// padrão de projeto SINGLETON - GOF

export class Database {
  private static database: Database;

  private constructor(private host: string, private username: string, private password: string) {}

  connect(): void {
    console.log(`Conectado ao ${this.host}, ${this.username}, ${this.password}`);
  }

  // cria a conexao apenas 1 vez, nas próximas só retorna a mesma conexão.
  static getDatabase(host: string, username: string, password: string): Database {
    if (!Database.database) {
      console.log('Criando uma nova conexão.');
      Database.database = new Database(host, username, password);
    } else {
      console.log('Retornando a conexão já criada.');
    }

    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
console.log(db1);

const db2 = Database.getDatabase('localhost2', 'root2', '111111');
console.log(db2);

const db3 = Database.getDatabase('localhost3', 'root3', '111111');
console.log(db3);

console.log(db1 === db2);
