import { inicializarFiltros } from "./src/filtrosCalatogo";
import { renderizarCatalago } from "./src/cartaoProduto";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderizarProdutosCarrinho,
} from "./src/menuCarrinho";

renderizarCatalago();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();