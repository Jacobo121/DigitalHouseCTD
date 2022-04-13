window.addEventListener('load', function () {
 
//Selecciono los nodos
const valor = document.querySelector("#valor")
const inicio = document.querySelector("#iniciar")
const stop = document.querySelector("#stop")
const acelerar = document.querySelector("#acelerar")

//inicializo el valor del cronometro
let n = 0

let intervalo = setInterval(() => {
    //lo incremento con setInterval
                valor.innerText = n++
}, 1000)

    //setInterval se activa con el evento de teclado
window.addEventListener("keypress", (event) => {
    // console.log(event)
    if(event.key == "Enter") {
        intervalo
    }
}  )

stop.addEventListener("mouseover", () => {
    n = 0
    valor.innerText = n
} )

//Para que resolvamos ClearInterval:

// acelerar.addEventListener("click", () => {
//     // clearInterval(intervalo)
//     setInterval(() => {
//         valor.innerText = n++
//      }, 500)
// } )






});


