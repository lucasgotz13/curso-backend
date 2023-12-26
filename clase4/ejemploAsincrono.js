const fs = require("fs");
fs.writeFile("./ejemploCallback.txt", "Hola desde callback", (error) => {
    if (error) return console.log("Error al escribir el archivo");
    fs.readFile("./ejemploCallback.txt", "utf-8", (err, res) => {
        if (err) return console.log("Error al leer el archivo");
        console.log(res);
        fs.appendFile("./ejemploCallback.txt", " Mas contenido", (err) => {
            if (error) return console.log("Error al actualizar el archivo");
            fs.readFile("./ejemploCallback.txt", "utf-8", (err, res) => {
                if (err) return console.log("Error al leer el archivo");
                console.log(res);
                fs.unlink("./ejemploCallback.txt", (err) => {
                    if (err)
                        return console.log("No se pudo eliminar el archivo");
                });
            });
        });
    });
});
