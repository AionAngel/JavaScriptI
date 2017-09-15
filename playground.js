
var linhas = document.querySelectorAll(".numero");


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





