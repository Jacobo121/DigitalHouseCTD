/* 1 */
function convertirPulgadas(centimetro) {
  return centimetro / 2.54;
}
console.log(convertirPulgadas(2));

/* 2 */
function convertirString(string) {
  return "http://www." + string + ".com";
}

console.log(convertirString("hola"));

/* 3 */
function convertirAdmiracion(string) {
  return "¡" + string + "!";
}
console.log(convertirAdmiracion("Hola"));

/* 4 */
function edadPerros(edad) {
  return edad * 7;
}
console.log(edadPerros(3));

/* 5 */
function horaTrabajo(sueldo) {
  return sueldo / 40;
}
console.log(horaTrabajo(30000));

/* 6 */
function calculadorIMC(altura, peso) {
  return peso / (altura * altura);
}
console.log(calculadorIMC(1.75, 57));




function convertirMayus(string) {
    return string.toUpperCase()
}
console.log(convertirMayus("hola"));


function tipoDeDato(dato) {
    return typeof dato;
}
console.log(tipoDeDato("hola"));


function circunferencia(radio) {
    return 2 * Math.PI * radio;
}
console.log(circunferencia(1))

console.log("sssssssssssssssss" + 5 ** 2);