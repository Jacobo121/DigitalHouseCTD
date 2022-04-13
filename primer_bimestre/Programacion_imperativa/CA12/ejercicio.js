/* concurso stand-up

publico-Max = 100


*/

/* let alicia = [ 23, 82, 46 ];
let bob = [ 45, 98, 32];

function encontrarGanador(a, b) {
    let puntosA = 0;
    let puntosB = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            puntosA ++
        } else if(a[i] < b[i]) {
            puntosB ++
        } else {
            "Ninguna persona recibe puntos"
        }
    }

    return puntosA > puntosB ? `${a} es l@ ganandor@` : `${b} es l@ ganador@`
}

console.log(encontrarGanador(alicia, bob)) */



/* function digitalHouse(a,b) {
    for(let i = 1; i <= 100; i++) {
        if(i % a == 0 && i % b == 0) {
            console.log("Digital House")
        } else if(i % a == 0) {
            console.log("Digital")
        } else if(i % b == 0) {
            console.log(("House"))
        }  else {
            console.log(i)
        }
    }
}

digitalHouse(8,10)
 */

for (let index = 0; index < 10; index++) {
    console.log(index)
}