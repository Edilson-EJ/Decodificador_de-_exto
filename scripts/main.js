

function criptografar_texto() {

    console.log("olá ")
    var texto_digitado = document.getElementById("text_area").value
    var imprimir_texto = document.getElementById("texto_criptografado")

    console.log(texto_digitado)

    //resultado = texto_digitado.replace(/e/, "enter")
    //resultado = texto_digitado.replace(/i/, "imes")
    resultado = texto_digitado.replace(/a/, "ai")
    //resultado = texto_digitado.replace(/o/, "ober")
    //resultado = texto_digitado.replace(/u/, "ufat")
    

    imprimir_texto.innerText = resultado

}