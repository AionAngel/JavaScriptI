var tabelaDados = document.querySelector('#tabela-pacientes');

tabelaDados.addEventListener('dblclick', function(event){
    console.log(event.target);
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(()=>{event.target.parentNode.remove();}, 500);
    
});