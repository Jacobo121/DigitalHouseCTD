function coro(animal, sonido) {
    const texto = 
        `Oh mc donaldo, sarasta tenía un ${animal}
        que hace ${sonido}, ${sonido}, ${sonido} `;
    
    return texto;
};

console.log(coro("pato", "rrr"));