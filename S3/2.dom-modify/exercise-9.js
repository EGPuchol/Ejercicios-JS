// const p$$ = document.createElement("p");
// p$$.textContent = "¡Voy dentro!";
// document.body.appendChild(p$$);
const div$$ = document.querySelectorAll(".fn-insert-here");

// div$$.appendChild(p$$)

// PENDIENTE: NO CONSIGO AÑADIR LOS DOS P, SOLO UNO, EL PRIMERO

div$$.forEach(element => {
    const p$$ = document.createElement("p");
    p$$.textContent = "¡Voy dentro!";
    element.appendChild(p$$)
});

// Ó

// for (const div of div) {
//     const p$$ = document.createElement("p");
//     p$$.textContent = "¡Voy dentro!";
//     div.appendChild(p$$)
// }
