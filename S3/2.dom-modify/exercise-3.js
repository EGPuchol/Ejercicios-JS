const div$$ = document.createElement ("div");
document.body.appendChild(div$$)

for (let index = 0; index <= 6 ; index++) {
    let p$$ = document.createElement("p");
    p$$.textContent = "esto es un texto repetido 6 veces"; 
    div$$.appendChild(p$$); 
}



