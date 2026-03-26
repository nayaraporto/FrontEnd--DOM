const botao = document.getElementById("btnPrimeiro");

botao.addEventListener("click", function () {

    const cursos = document.querySelectorAll("ul li");

 
    const total = cursos.length;

    document.getElementById("inputPrimeiro").value = total;
});