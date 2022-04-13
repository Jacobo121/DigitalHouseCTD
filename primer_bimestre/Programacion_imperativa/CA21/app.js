let jsonHelper = require('./lecturaEscritura');

let arrayDepartamentos = jsonHelper.leerJson("departamentos");


let inmobiliaria = {
    departamentos: arrayDepartamentos,
    buscarPorId: number => this.departamentos.find(objeto => objeto.id == number ? objeto : undefined)
}



console.log(inmobiliaria.buscarPorId(16))

