function mostrarLista(arr) {
    if (arr.length == 0) {
        return "Lista vacía";
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
        return `Cantidad de elementos en la lista: ${arr.length}`;
    }
}

console.log(mostrarLista([]));
console.log(mostrarLista([1, 2, 3, 4, 5, 6, 7, 8, 9]));
