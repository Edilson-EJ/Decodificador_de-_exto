

function criptografar_texto() {

    console.log("olá ")
    var texto_digitado = document.getElementById("text_area").value
    var imprimir_texto = document.getElementById("texto_criptografado")
    

    console.log(texto_digitado)

    resultado = texto_digitado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
    
    imprimir_texto.innerText = resultado

    
}

function descriptografar_texto() {

    console.log("olá ")
    var texto_digitado = document.getElementById("text_area").value
    var imprimir_texto = document.getElementById("texto_criptografado")
    

    console.log(texto_digitado)

    resultado = texto_digitado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")  

    imprimir_texto.innerText = resultado

}

function copy_text(){

    var textoCopiado = document.getElementById("texto_criptografado");

    console.log("texto: ", textoCopiado.value)

  // Select the text field
    //textoCopiado.select();

   // Copy the text inside the text field
    navigator.clipboard.writeText(textoCopiado.value);

  // Alert the copied text
    alert("Copied the text: " + textoCopiado.value);
}