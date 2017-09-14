console.log("Hello World!");

var linhas = document.querySelectorAll(".numero");

//var tdNum1 = linha1.querySelector(".primeiro");
//var tdNum2 = linha1.querySelector(".segundo");
//var res = linha1.querySelector(".resultado");

var num1 = tdNum1.textContent;
var num2 = tdNum2.textContent;

for(var i = 0; i < linhas.length; i ++) {

    console.log(linhas[i])
}
var num1EhValido = true;
var num2EhValido = true;

if (num1 > 2 || num1 < 0) {
    console.log("Numero 1 Invalido");
    res.textContent = "Numero 1 Invalido";
    num1EhValido = false;
}

if (num2 > 2 || num2 < 0) {
    console.log("Numero 1 Invalido");
    res.textContent = "Numero 2 Invalido";
    num2EhValido = false;
}

if (num1EhValido && num2EhValido) {
    res.textContent = +num1 + +num2;
}


