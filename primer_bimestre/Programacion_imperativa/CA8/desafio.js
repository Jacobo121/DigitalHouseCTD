/* let edad = 20;
let operacion = edad % 2;

if(operacion == 1) {
    console.log("sabias que tu edad es impar?");
} 
 */

function totalAPagar(vehiculo, litrosConsumidos) {
    let litros = litrosConsumidos;

    if(vehiculo == "coche") {
        litrosConsumidos *= 86;
    } else if(vehiculo == "moto") {
        litrosConsumidos *= 70
    } else if(vehiculo == "autobus") {
        litrosConsumidos *= 55
    } else {
        console.log("No existe ese vehiculo")
    }
    
    if(litrosConsumidos > 0 && litrosConsumidos < 25) {
        litros += 50
    } else if(litrosConsumidos > 25) {
        litros += 25
    }

    console.log(litrosConsumidos)
    
}

console.log(totalAPagar("coche", 3));