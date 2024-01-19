const p$$ = document.querySelectorAll(".fn-remove-me");

// for (let index = 0; index < 4; index++) {
//     document.body.removeChild(p$$);
// }
// PENDIENTE: NO CONSIGO BORRAR TODOS LOS ELEMENTOS

p$$.forEach(element => {
    element.remove();
})

