const fs = require("fs/promises");

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
    }

    async addProduct({ title, description, price, thumbnail, code, stock }) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Faltan campos por completar");
            return;
        }

        try {
            let res = await fs.readFile(this.path, "utf-8");
            let data = JSON.parse(res);
            this.products = data;
            if (!this.products.some((product) => product.code === code)) {
                let nextId = this.products[this.products.length - 1].id + 1;
                let product = {
                    id: nextId,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                };
                this.products.push(product);
                return await fs.writeFile(
                    this.path,
                    JSON.stringify(this.products)
                );
            } else {
                return console.log(
                    `Product with code: "${code}" already exists`
                );
            }
        } catch (err) {
            let product = {
                id: 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };
            this.products.push(product);
            return await fs.writeFile(this.path, JSON.stringify(this.products));
        }
    }

    async getProducts() {
        try {
            let res = await fs.readFile(this.path, "utf-8");
            let data = JSON.parse(res);
            console.log(data);
        } catch (err) {
            return console.log("No products were found");
        }
    }

    async getProductById(id) {
        let res = await fs.readFile(this.path, "utf-8");
        let data = JSON.parse(res);
        let product = data.find((element) => id === element.id);
        console.log(product ?? "No product exists with the requested id");
    }

    async deleteProducts() {
        await fs.unlink(this.path);
    }
}

const productManager = new ProductManager("./products.json");
// productManager.addProduct({
//     title: "producto prueba 4",
//     description: "Este es un producto prueba",
//     price: 200,
//     thumbnail: "Sin imagen",
//     code: "abc126",
//     stock: 25,
// });
// productManager.getProducts();
// productManager.getProductById(10);
productManager.deleteProducts();
