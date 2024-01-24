import { promises as fs } from "fs";

async function getData() {
    let res = await fs.readFile("./products.json", "utf-8");
    let data = JSON.parse(res);
    return data;
}
export default class ProductManager {
    constructor() {
        this.path = "./products.json";
        this.products = [];
    }

    async addProduct({ title, description, price, thumbnail, code, stock }) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Faltan campos por completar");
            return;
        }

        try {
            this.products = await getData();
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
                await fs.writeFile(this.path, JSON.stringify(this.products));
                return true;
            } else {
                console.log(`Product with code: "${code}" already exists`);
                return false;
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
            await fs.writeFile(this.path, JSON.stringify(this.products));
            return true;
        }
    }

    async getProducts() {
        try {
            let data = await getData();
            return data;
        } catch (err) {
            return this.products;
        }
    }

    async getProductById(id) {
        try {
            let data = await getData();
            let product = data.find((element) => parseInt(id) === element.id);
            return product ?? "No product exists with the requested id";
        } catch (err) {
            return "No products were found";
        }
    }

    async updateProduct(id, { ...product }) {
        try {
            this.products = await getData();
            let productIndex = this.products.findIndex(
                (product) => parseInt(id) === product.id
            );

            if (productIndex !== -1) {
                this.products[productIndex] = {
                    ...this.products[productIndex],
                    ...product,
                };
                await fs.writeFile(this.path, JSON.stringify(this.products));
                return true;
            } else {
                console.log("The product with the following id wasn't found");
                return false;
            }
        } catch (err) {
            console.log(
                "No products were found. Instead try adding a new product",
                err
            );
            return;
        }
    }

    async deleteProduct(id) {
        try {
            this.products = await getData();

            let productIndex = this.products.findIndex(
                (product) => parseInt(id) === product.id
            );

            if (productIndex !== -1) {
                this.products.splice(productIndex, 1);
                await fs.writeFile(this.path, JSON.stringify(this.products));
                return true;
            } else {
                console.log("The product with the following id does not exist");
                return false;
            }
        } catch (err) {
            console.log("No products were found");
            return;
        }
    }
}

// PROCESO DE TESTING

// const productManager = new ProductManager();
// productManager.addProduct({
//     title: "producto prueba 2",
//     description: "Este es un producto prueba",
//     price: 200,
//     thumbnail: "Sin imagen",
//     code: "abc124",
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
