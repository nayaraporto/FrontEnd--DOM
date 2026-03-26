const lista = document.getElementById("lista");
const input = document.getElementById("inputCurso");
const botao = document.getElementById("btnAdicionar");

botao.addEventListener("click", () => {
  const valor = input.value;

  if (valor.trim() === "") {
    alert("Digite um curso!");
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.textContent = valor;

  lista.appendChild(novoItem);

  input.value = "";
});