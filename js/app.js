let valorTotal = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").innerHTML = "";

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  let preco = quantidade * valorUnitario;
  let carrinho = document.getElementById("lista-produtos");

  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$ ${preco}</span>
        </section>
      </section>`;
  valorTotal = valorTotal + preco;
  let valorAcumulado = document.getElementById("valor-total");
  valorAcumulado.innerHTML = `R$ ${valorTotal}`;
  document.getElementById("quantidade").value = "";
}

function limpar() {
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "";
  document.getElementById("quantidade").value = "";
}
