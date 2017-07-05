var titulo = document.querySelector(".titulo");

titulo.textContent = "Lucas Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    console.log(paciente);

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;



    var tdImc = paciente.querySelector(".info-imc");



    var pesoEhvalido = validaPeso(peso);
    var alturaEhvalida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso Invalido");
        tdImc.textContent = "Peso Invalido";
        pesoEhvalido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        console.log("Altura Invalida");
        tdImc.textContent="Altura Invalida"
        alturaEhvalido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhvalido && alturaEhvalida){

        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}


