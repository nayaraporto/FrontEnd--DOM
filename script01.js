document.getElementById("btnParagrafo").addEventListener
("click", function(){
    var texto = document.getElementById("paragrafo");
    document.getElementById("inputParagrafo").value = texto.textContent;
});