function criptografar() {

    var imagem = document.getElementById("img");
    imagem.style.display = "none";

    let inpTexto = document.getElementById("inpTexto");
    let texto = inpTexto.value;

    texto = texto.replaceAll('e', 'enter');
    texto = texto.replaceAll('i', 'imes');
    texto = texto.replaceAll('a', 'ai');
    texto = texto.replaceAll('o', 'ober');
    texto = texto.replaceAll('u', 'ufat');

    let pTexto = document.getElementById("pTexto");
    pTexto.textContent = texto;

}

function descriptografar() {

    var imagem = document.getElementById("img");
    imagem.style.display = "none";

    let inpTexto = document.getElementById("inpTexto");
    let texto = inpTexto.value;
    texto = texto.replaceAll('ufat', 'u');
    texto = texto.replaceAll('ober', 'o');
    texto = texto.replaceAll('ai', 'a');
    texto = texto.replaceAll('imes', 'i');
    texto = texto.replaceAll('enter', 'e');

    let pTexto = document.getElementById("pTexto");
    pTexto.textContent = texto;
}

function readText() {
    let pTexto = document.getElementById("pTexto");
    navigator.clipboard.writeText(pTexto.textContent);
}

