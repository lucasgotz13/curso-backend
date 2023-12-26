const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2,
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4,
    },
];

let array1 = Object.keys(objetos[0]);
let array2 = Object.keys(objetos[1]);

let arrayCompleto = [...array1, ...array2];

let arrayValues = Object.values(objetos[0]);
let arrayValues2 = Object.values(objetos[1]);

let arrayCompletoValues = [...arrayValues, ...arrayValues2];
console.log(arrayCompletoValues);

let res = arrayCompletoValues.reduce((acc, el) => acc + el, 0);
console.log(`El total de cantidades es ${res}`);
