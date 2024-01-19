const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

/////////////////////////


let isApproved = false;
for (let i = 0; i < alumns.length; i++) {
    let trimestre = 0;    
    if (alumns[i].T1 === true) {
      trimestre +=1;
    }
    if (alumns[i].T2 === true) {
      trimestre +=1;
    }
    if (alumns[i].T3 === true) {
      trimestre +=1;
    }
    if (trimestre >=2){
      isApproved = true;
      console.log(`${alumns[i].name} has approved with ${trimestre} quarters passed. ${isApproved}`);
    }
    
    }











