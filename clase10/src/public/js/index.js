const socket = io();

const addMessages = () => {
    const msj = {
        nombre: document.getElementById("nombre").value,
        text: document.getElementById("mensaje").value,
    };
    socket.emit("msj", msj);
    return false;
};

socket.on("mensajeDelChat", (data) => {
    console.log(data);
    render(data);
});

const render = (data) => {
    let html = data.map((elem) => {
        return `<div>
                <strong>${elem.nombre}</strong> 
                <em>${elem.text}</em>
            </div>
            `;
    });
    document.getElementById("caja").innerHTML = html;
};
