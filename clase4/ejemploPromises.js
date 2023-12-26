const fs = require("fs/promises");

const operacionesAsincronas = async () => {
    await fs.writeFile("./ejemploPromesa.txt", "Hola desde promesa!");
    let resultado = await fs.readFile("./ejemploPromesa.txt", "utf-8");
    console.log(resultado);
    await fs.unlink("./ejemploPromesa.txt");
};

operacionesAsincronas();
