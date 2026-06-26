// Importa a variável browser do módulo environment que detecta se o código está rodando no navegador do usuário
import { browser } from "$app/environment";

// classe carrinho com localStorage
class Carrinho {
  // Cria um estado reativo para armazenar os itens do carrinho
  items = $state([]);

  constructor() {
    // Se o código estiver rodando no navegador, recupera os itens do carrinho do localStorage
    if (browser) {
      const items = localStorage.getItem("carrinho");
      if (items) {
        this.items = JSON.parse(items);
      }
    }
  }

  // limpa o carrinho
  limpar() {
    this.items = [];
    if (browser) {
      localStorage.removeItem("carrinho");
    }
  }

  // adiciona um item ao carrinho
  adicionar(item) {
    this.items.push(item);
    // se o código estiver rodando no navegador, salva os itens do carrinho no localStorage
    if (browser) {
      localStorage.setItem("carrinho", JSON.stringify(this.items));
    }
  }

  // retorna a quantidade de itens no carrinho
  get quantidade() {
    return this.items.length;
  }

  // getter para os itens do carrinho
  get itens() {
    return this.items;
  }
}

// cria um carrinho que será único para toda a aplicação (quando já está no navegador)
const carrinho = new Carrinho();

export default carrinho;
