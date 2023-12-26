let obj = {
    name: "Lucas",
    lastname: "Gotz",
    age: 18,
};

console.log(Object.entries(obj)); // nos devuelve un array de arreglos. Cada arreglo representa una propiedad y su valor

console.log(Object.keys(obj)); // Nos devuelve un array con SOLO las propiedades del objeto

console.log(Object.values(obj)); // Nos devuelve un array con SOLO los valores del objeto

// Ejemplo
let ventasObj = {
    sucursal1: 100,
    sucursal2: 300,
    sucursal3: 400,
    sucursal4: 600,
    sucursal5: 900,
    sucursal6: 1200,
};

let ventasArr = Object.values(ventasObj);
// ahora podemos usar ventasArr para calcular el promedio de las ventas
const ventasTotal = ventasArr.reduce((acc, el) => acc + el, 0);
const ventasPromedio = ventasTotal / ventasArr.length;
console.log(ventasPromedio);
