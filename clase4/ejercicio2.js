const fs = require("fs/promises");

async function ejercicio2() {
    try {
        const resultado = await fs.readFile("./package.json", "utf-8");
        console.log(resultado);
        await fs.writeFile("./info.json", JSON.stringify(resultado));
        const resultado2 = await fs.readFile("./info.json", "utf-8");
        console.log("-----------------------------------");
        console.log(JSON.parse(resultado2));
        await fs.unlink("./info.json");
    } catch (err) {
        console.log("Error al realizar la operacion");
    }
}

ejercicio2();
