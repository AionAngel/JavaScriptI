

//lendo o botão do HTML
var botao = document.querySelector("#botao");

//Lendo o evento de clique no botão e chamando uma função quando clicado
botao.addEventListener('click', function(event){

    //Previne a pagina de dar um reload apos pressionar o botão
    event.preventDefault();

    //Lendo o formulario e os inputs do HTML
    var formulario = document.querySelector('#formulario');
    var form1 = formulario.primeiro.value;
    var form2 = formulario.segundo.value;

    //Criando elementos TR e TD para inserir na tabela
    var elementoTr = document.createElement('tr');
    var elementoTd1 = document.createElement('td');
    var elementoTd2 = document.createElement('td');
    var elementoTd3 = document.createElement('td');

    //Adiciona as classes aos elementos criados
    elementoTr.classList.add('numero');
    elementoTd1.classList.add('primeiro');
    elementoTd2.classList.add('segundo');
    elementoTd3.classList.add('resultado');

    //Insere o conteudo nas TDs
    elementoTd1.textContent = form1;
    elementoTd2.textContent = form2;
    elementoTd3.textContent = somaDoisNumeros(form1,form2);

    //Insere as TDs dentro da TR criada
    elementoTr.appendChild(elementoTd1);
    elementoTr.appendChild(elementoTd2);
    elementoTr.appendChild(elementoTd3);

    //Lê a TBODY do HTML
    var tabela = document.querySelector('#tabela-pacientes');

    //Insere o TR dentro do TBODY
    tabela.appendChild(elementoTr);
    });