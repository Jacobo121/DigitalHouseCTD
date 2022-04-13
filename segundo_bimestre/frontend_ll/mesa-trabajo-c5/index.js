

let item = document.querySelectorAll('.item');
let body = document.querySelector("body");
let titulos = document.querySelector('h1');
let texto = document.querySelectorAll('h2, p');

function oscuro() {
    body.classList.toggle("fondo")

    titulos.classList.toggle("titulo")
    
    item.forEach(atributo => {
        atributo.classList.toggle("items")
    });

    texto.forEach(texto => {
        texto.classList.toggle("textos")
    });
}








