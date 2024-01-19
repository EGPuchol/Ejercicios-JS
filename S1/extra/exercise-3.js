const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

for (let index = 0; index < movies.length; index++) {
  const duracion = movies[index];
  if (duracion.durationInMinutes < 100) {
    console.log(duracion.name, "es una película pequeña");
  }

  if (duracion.durationInMinutes >= 100 && duracion.durationInMinutes <200) {
    console.log(duracion.name, "es una película mediana");
  }

  if (duracion.durationInMinutes >= 200) {
    console.log(duracion.name, "es una película grande");
  }
}
