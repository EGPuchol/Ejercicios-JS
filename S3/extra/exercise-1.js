const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement ("ul");
document.body.appendChild(ul$$);

for (const country of countries) {
    const countryLi$$ = document.createElement("li");
    countryLi$$.textContent = country;
    ul$$.appendChild(countryLi$$);
}
