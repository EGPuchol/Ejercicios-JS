// const div1$$ = document.querySelector(".div1");
// const div2$$ = document.querySelector(".div2");
// const p$$ = document.createElement("p");
// p$$.textContent="¡Voy en medio!";
// document.body.appendChild(p$$);

// div1$$.insertBefore(p$$, div2$$)

// PENDIENTE: NO CONSIGO QUE LA P SE QUEDE EN MEDIO

const div$$ = document.querySelectorAll('div')[1];
const p$$ = document.createElement("p");
p$$.textContent="¡Voy en medio!";
document.body.insertBefore(p$$, div$$);