const socket = io();

socket.on("sendProducts", (data) => {
    render(data);
});

// socket.on("renderProds", (data) => {
//     render(data);
// });

const addMessages = () => {
    const prod = {
        id: crypto.randomUUID(),
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
        stock: document.getElementById("stock").value,
        code: document.getElementById("code").value,
    };
    if (
        prod.name === "" ||
        prod.description === "" ||
        prod.price === "" ||
        prod.stock === "" ||
        prod.code == ""
    ) {
        alert("Falta campos por completar");
        return false;
    }
    socket.emit("addProd", prod);
    return false;
};

const deleteMessages = (data, id) => {
    const prodIndex = data.findIndex((prod) => prod.id === id);
    data.splice(prodIndex, 1);
    socket.emit("updateProducts", prodIndex);
    render(data);
};

const render = (data) => {
    let html = data.map((prod) => {
        return `<div style="display: flex; align-items: center; gap: 10px;">
        <strong>${prod.name}</strong>
        <em>${prod.description}</em>
        <p>${prod.price}</p>
        <p>${prod.stock}</p>
        <p>${prod.code}</p>
        <button id="deleteButton-${prod.id}">Borrar producto</button>
        </div>`;
    });
    document.getElementById("caja").innerHTML = html;

    setButtonEventListener(data);
};

const setButtonEventListener = (data) => {
    data.forEach((prod) => {
        document
            .getElementById(`deleteButton-${prod.id}`)
            .addEventListener("click", () => deleteMessages(data, prod.id));
    });
};
