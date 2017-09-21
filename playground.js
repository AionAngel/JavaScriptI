var titulo = document.querySelector(".titulo");
var linhas = document.querySelectorAll(".numero");

titulo.addEventListener("click", () => {
    console.log("Oi fui clicado por uma arrow function..O que voce quer?");
});




for (var i = 0; i < linhas.length; i ++) {

    var num1EhValido = true;
    var num2EhValido = true;

    var linhaAtual = linhas[i];
 
    var num1 = linhaAtual.querySelector(".primeiro").textContent;
    var num2 = linhaAtual.querySelector(".segundo").textContent;
    var res = linhaAtual.querySelector(".resultado");

    if (num1 > 10 || num1 < 0) {
        console.log("Numero 1 Invalido");
        res.textContent = "Numero 1 Invalido";
        num1EhValido = false;
        linhaAtual.classList.add("numero-invalido");
    }
    
    if (num2 > 10 || num2 < 0) {
        console.log("Numero 2 Invalido");
        res.textContent = "Numero 2 Invalido";
        num2EhValido = false;
        linhaAtual.classList.add("numero-invalido");
    }
    
    if (num1EhValido && num2EhValido) {
        res.textContent = (+num1 + +num2).toFixed(2);
    }
    
}

var botao = document.querySelector("#botao");
botao.addEventListener('click', function(event){
    event.preventDefault();

    var formulario = document.querySelector('#formulario');
    var form1 = formulario.primeiro.value;
    var form2 = formulario.segundo.value;

    var elementoTr = document.createElement('tr');
    var elementoTd1 = document.createElement('td');
    var elementoTd2 = document.createElement('td');

    elementoTd1.textContent = form1;
    elementoTd2.textContent = form2;

    console.log(elementoTd1);
    });





