// Como era antes
console.log(Math.pow(2, 3));

// Como es ahora
console.log(2 ** 3); // Mas simple y entendible

// arr.prototype.includes
// Nos facilita mucho el encontrar elementos en un arreglo

let arr = [5, 4, 1, 3, 2];
// como era antes
arr.forEach((e) => {
    if (e === 5) {
        console.log(true);
    }
});
// como es ahora
console.log(arr.includes("5")); // Mas sencillo
