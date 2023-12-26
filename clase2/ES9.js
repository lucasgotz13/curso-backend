let numbers = [1, 2, 3];
let evenNumbers = [2, 4, 6];

const newNumbers = [...numbers, ...evenNumbers]; // El spread operator nos permite unir dos arreglos en uno solo, por ejemplo
console.log(newNumbers);

// Ejemplo con objetos
let empleados = {
    empl1: "Juli",
    empl2: "Maria",
    empl3: "Andrea",
};

console.log({ ...empleados });

// REST
const { empl1, ...rest } = empleados; // El rest operator nos permite extraer una propiedad de un objeto y guardar el resto en una variable
console.log(rest);
