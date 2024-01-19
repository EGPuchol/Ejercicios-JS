const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ul$$ = document.createElement ("ul")
// document.body.appendChild(ul$$);

const div$$ = document.querySelector('[data-function="printHere"]');
div$$.appendChild(ul$$);

for (const car of cars) {
    const car$$ = document.createElement ("li");
    car$$.textContent = car;
    ul$$.appendChild(car$$);
}
