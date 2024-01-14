// ejemplo del profe
import { promises as fs } from "fs";
import crypto from "crypto";

export class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
    }

    static id = 0;

    async getProducts() {
        const products = JSON(await fs.readFile(this.path, "utf-8"));
        return products;
    }

    async getProductsById(id) {
        const products = JSON(await fs.readFile(this.path, "utf-8"));
        const product = products.find((prod) => prod.id === id);
        return product;
    }

    async addProduct(prod) {
        const products = JSON(await fs.readFile(this.path, "utf-8"));
        const prodExists = products.find(
            (producto) => prod.code === producto.code
        );
        if (prodExists) return false;
        prod.id = crypto.randomBytes(16).toString("hex"); // id unico
        products.push(prod);
        await fs.writeFile(this.path, JSON.stringify(products));
        return true;
    }

    async updateProduct(id, prod) {
        const products = JSON(await fs.readFile(this.path, "utf-8"));
        const prod = products.find((producto) => producto.id === id);

        if (prod) {
            prod.title = producto.title;
            prod.description = producto.description;
            prod.price = producto.price;
            prod.stock = producto.stock;
            prod.thumbnail = producto.thumbnail;
            prod.code = producto.code;
            products.push(prod);
            await fs.writeFile(this.paths, JSON.stringify(products));
        }
    }
}
