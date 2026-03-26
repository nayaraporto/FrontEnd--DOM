document.getElementById("btnTitulo").addEventListener
("click", function(){
    var texto = document.getElementById("titulo");
    document.getElementById("inputTitulo").value = texto.textContent;
});