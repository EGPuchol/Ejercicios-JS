const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];


for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan != true) {
    foodSchedule[i].name = fruits[i];
    foodSchedule[i].isVegan = true;
  }
}

console.log(foodSchedule);
