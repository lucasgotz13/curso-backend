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
            console.log(this.products);
            return;
        }
    }

    async getProductById(id) {
        try {
            let res = await fs.readFile(this.path, "utf-8");
            let data = JSON.parse(res);
            let product = data.find((element) => id === element.id);
            console.log(product ?? "No product exists with the requested id");
        } catch (err) {
            console.log("No products were found");
            return;
        }
    }

    async updateProduct(id, { ...product }) {
        try {
            let res = await fs.readFile(this.path, "utf-8");
            let data = JSON.parse(res);
            this.products = data;

            let productIndex = data.findIndex((product) => id === product.id);

            if (productIndex !== -1) {
                this.products[productIndex] = {
                    ...this.products[productIndex],
                    ...product,
                };
            } else {
                console.log("The product with the following id wasn't found");
            }
            await fs.writeFile(this.path, JSON.stringify(this.products));
        } catch (err) {
            console.log(
                "No products were found. Instead try adding a new product"
            );
            return;
        }
    }

    async deleteProduct(id) {
        try {
            let res = await fs.readFile(this.path, "utf-8");
            let data = JSON.parse(res);
            this.products = data;

            let productIndex = data.findIndex((product) => id === product.id);

            if (productIndex !== -1) {
                this.products.splice(productIndex, 1);
                await fs.writeFile(this.path, JSON.stringify(this.products));
            } else {
                console.log("The product with the following id does not exist");
            }
        } catch (err) {
            console.log("No products were found");
        }
    }

    async unlinkProducts() {
        await fs.unlink(this.path);
    }
}

// PROCESO DE TESTING

const productManager = new ProductManager("./products.json");
// productManager.addProduct({
//     title: "producto prueba",
//     description: "Este es un producto prueba",
//     price: 200,
//     thumbnail: "Sin imagen",
//     code: "abc123",
//     stock: 25,
// });
// productManager.getProducts();
// productManager.getProductById(1);
// productManager.updateProduct(1, {
//     title: "test 2",
//     description: "test description",
//     price: 1000,
// });
// productManager.deleteProduct(1);
productManager.unlinkProducts();
