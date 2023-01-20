var criptografar = document.querySelector('.criptografar').addEventListener('click',remove_conteudo)
var descriptografar = document.querySelector('.descriptografar').addEventListener('click',remove_conteudo)

var criptografar = document.querySelector('.criptografar').addEventListener('click',remove_copy)
var descriptografar = document.querySelector('.descriptografar').addEventListener('click',remove_copy)


function remove_conteudo(){

    var text = document.querySelector('.conteudo_caixa')
    

    text.classList.toggle('remove_conteudo_caixa');
    

}

function remove_copy(){

    var copyText = document.querySelector('.copy')
    copyText.classList.toggle('copy_conteudo_caixa')
}

