document.getElementById("btnAviso1").addEventListener ("click", function() {

    let aviso = document.getElementsByClassName("aviso1") [0]. textContent;

    document.getElementById("resultado1").value = aviso;

});

document.getElementById("btnAviso2").addEventListener ("click", function () {

    let aviso = document.getElementsByClassName("aviso2") [0].textContent;

    document.getElementById("resultado2").value = aviso;

});