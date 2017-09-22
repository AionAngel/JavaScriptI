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

    elementoTr.appendChild(elementoTd1);
    elementoTr.appendChild(elementoTd2);

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(elementoTr);

    });