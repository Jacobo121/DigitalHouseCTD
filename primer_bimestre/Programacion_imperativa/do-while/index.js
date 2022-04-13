function tablaDeMultiplicar(numero) {
    let i = 0
    do{
        return `${numero} * ${i} = ${numero + i}`
    } while (i >= 10)
}
console.log(tablaDeMultiplicar(2))