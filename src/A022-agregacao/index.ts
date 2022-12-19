export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  adicionarProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotalProdutos(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta HxH', 69.9);
const produto2 = new Produto('Caneca Naruto', 30.99);
const produto3 = new Produto('Adesivo colorido', 3.0);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.adicionarProdutos(produto1, produto2, produto3);

console.log(carrinhoDeCompras);
console.log('Qtd de produtos no carrinho:', carrinhoDeCompras.quantidadeProdutos());
console.log('Vlr total dos produtos no carrinho:', carrinhoDeCompras.valorTotalProdutos());
