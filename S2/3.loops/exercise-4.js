const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

let z = 0

for (const juguete of toys) {
    if(juguete.name.includes("gato")){
        delete(toys[z])
    }
    z++
}
console.log(toys);