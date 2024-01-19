const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const colores = [...colors.splice(2, 1)]

// colores.splice(2, 1);
console.log(colores);

// DUDA: ¿POR QUÉ SPLICE DENTRL DEL ARRAY SE QUEDA CON EL ELEMENTO SELECCIONADO, Y FUERA DEL ARRAY LO EXCLUYE?

// const colores = [...colors.slice(0, 2), ...colors.slice(3)];