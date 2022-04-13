let opcionUsuario = parseInt(prompt('¿piedra(1), papel(2) o tijera(3)?'));
let random = parseInt(Math.random()*3+1);
let opcionMaquina = random;
 
console.log(opcionUsuario);
console.log(opcionMaquina);
 
let resultado = "sin calcular aún";

if (opcionUsuario == 1) {
    if (opcionMaquina == 1) {
        resultado = 'empate';
    }
    if (opcionMaquina == 2) {
        resultado = 'derrota';
    }
    if (opcionMaquina == 3) {
        resultado = 'victoria';
    }
}

if(opcionUsuario == 2) {
    if (opcionMaquina == 1) {
        resultado = 'victoria';
    }
    if (opcionMaquina == 2) {
        resultado = 'empate';
    }
    if (opcionMaquina == 3) {
        resultado = 'derrota';
    }
}

if(opcionUsuario == 3) {
    if (opcionMaquina == 1) {
        resultado = 'derrota';
    }
    if (opcionMaquina == 2) {
        resultado = 'victoria';
    }
    if (opcionMaquina == 3) {
        resultado = 'empate';
    }
}

 
alert(resultado);



