const lista = document.getElementById("lista");
const botao = document.getElementById("btnRemover");

botao.addEventListener("click", () => {
  
  if (lista.children.length > 0) {
    const ultimoItem = lista.lastElementChild;
    lista.removeChild(ultimoItem);
  } else {
    alert("Não há mais itens para remover!");
  }
});