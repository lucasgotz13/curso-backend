const fs = require("fs");

const date = new Date().toLocaleDateString("es-ar");

fs.writeFile("./fechaActual.txt", `La fecha de hoy es ${date}`, (err) => {
    if (err) return console.log("No se pudo crear el archivo");
    fs.readFile("./fechaActual.txt", "utf-8", (err, res) => {
        if (err) return console.log("No se pudo leer el archivo");
        console.log(res);
        fs.unlink("./fechaActual.txt", (err) => {
            if (err) return console.log("No se pudo eliminar el archivo");
        });
    });
});
