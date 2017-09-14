
var linhas = document.querySelectorAll(".numero");


var num1EhValido = true;
var num2EhValido = true;

for (var i = 0; i < linhas.length; i ++) {

    var linhaAtual = linhas[i];
    //var trAtual = linhaAtual.querySelector(".numero");
    var tdNum1 = linhaAtual.querySelector(".primeiro");
    var tdNum2 = linhaAtual.querySelector(".segundo");
    var res = linhaAtual.querySelector(".resultado");

    var num1 = tdNum1.textContent;
    var num2 = tdNum2.textContent;

    if (num1 > 10 || num1 < 0) {
        console.log("Numero 1 Invalido");
        res.textContent = "Numero 1 Invalido";
        num1EhValido = false;
    }
    
    if (num2 > 10 || num2 < 0) {
        console.log("Numero 1 Invalido");
        res.textContent = "Numero 2 Invalido";
        num2EhValido = false;
    }
    
    if (num1EhValido && num2EhValido) {
        res.textContent = +num1 + +num2;
    }
    
}





