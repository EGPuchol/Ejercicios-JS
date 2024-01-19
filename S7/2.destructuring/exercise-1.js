const game = { title: "The last us 2", gender: ["action", "zombie", "survival"], year: 2020 };

// const nombre = game.title;
// console.log(nombre);

// const {gender, year} = game;

// console.log(gender, year);

//NO ENTIENDO MUY BIEN QUÉ TENGO QUE HACER

const gameData = ({gender, year, ...restElements}) => {
    console.log(gender, year, restElements);
}
gameData(game);
