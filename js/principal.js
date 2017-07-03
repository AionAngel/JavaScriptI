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



    var pesoEhvalido = true;
    var alturaEhvalido = true;

    if(peso <= 0 || peso>1000){
        console.log("Peso Invalido");
        tdImc.textContent = "Peso Invalido";
        pesoEhvalido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(altura<=0 || altura>=3){
        console.log("Altura Invalida");
        tdImc.textContent="Altura Invalida"
        alturaEhvalido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhvalido && alturaEhvalido){

        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }

}




