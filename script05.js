var itensLista = document.getElementsByTagName("li");

document.getElementById("btnPrimeiro").addEventListener("click", function() {
document.getElementById("inputPrimeiro").value = itensLista[0].textContent;

});

document.getElementById("btnSegundo").addEventListener("click", function() {
    document.getElementById("inputSegundo").value = itensLista[1].textContent;

});

document.getElementById("btnTerceiro").addEventListener("click", function() {
    document.getElementById("inputTerceiro").value = itensLista[2].textContent;


});

document.getElementById('btnTodas').addEventListener ('click', function() {
   
    var todosItens = document.querySelectorAll('li');
    var texto = [];
    todosItens.forEach(function(item) {
        texto.push(item.textContent);

    });

    document.getElementById('inputTodas').value = texto.join
    (', ');

});
