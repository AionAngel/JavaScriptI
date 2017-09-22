

//lendo o botão do HTML
var botao = document.querySelector("#botao");

//Lendo o evento de clique no botão e chamando uma função quando clicado
botao.addEventListener('click', function(event){

    //Previne a pagina de dar um reload apos pressionar o botão
    event.preventDefault();

    //Lendo o formulario e os inputs do HTML
    var formulario = document.querySelector('#formulario');
    var dados = obtemNumerosForm(formulario);

    //Cria TR
    var pacienteTr = criaTr(dados);
    
     //Lê a TBODY do HTML
     var tabela = document.querySelector('#tabela-pacientes');

     //Insere o TR dentro do TBODY
     tabela.appendChild(pacienteTr);
     formulario.reset();
    
    });

    function obtemNumerosForm(formulario) {
        var dados = {
            num1: formulario.primeiro.value,
            num2: formulario.segundo.value,
            soma: somaDoisNumeros(formulario.primeiro.value,formulario.segundo.value)
        }
        return dados;
    }

    function criaTr(dados) {

        //Criando elementos TR e TD para inserir na tabela
        var elementoTr = document.createElement('tr');
        elementoTr.classList.add('numero');
        //Insere as TDs dentro da TR criada
        elementoTr.appendChild(criaTd(dados.num1,"primeiro"));
        elementoTr.appendChild(criaTd(dados.num2,"segundo"));
        elementoTr.appendChild(criaTd(dados.soma,"resultado"));

        return elementoTr;
       
    }

    function criaTd (dado,classe){
        var td = document.createElement('td');
        td.textContent = dado;
        td.classList.add(classe);

        return td;
    }