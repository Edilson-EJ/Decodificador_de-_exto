var criptografar = document.querySelector('.criptografar').addEventListener('click',remove_conteudo)
var descriptografar = document.querySelector('.descriptografar').addEventListener('click',remove_conteudo)


function remove_conteudo(){

    var text = document.querySelector('.conteudo_caixa')

    text.classList.toggle('remove_conteudo_caixa');

}

