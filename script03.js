document.getElementById("btnTitulo").addEventListener
("click", function(){
    let primeiro = document.querySelector("li").textContent;
    document.getElementById("resposta").value = primeiro;
});