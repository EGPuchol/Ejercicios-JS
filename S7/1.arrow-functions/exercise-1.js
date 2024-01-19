// FUNCIÓN SIN PARÁMETRO

const suma = (a = 10, b = 5) => {
    return a + b;
}
console.log(suma());

// FUNCIÓN CON UN SOLO PARÁMETRO

console.log(suma(5));

// FUNCIÓN CON DOS PARÁMETROS

console.log(suma(4, 8));

