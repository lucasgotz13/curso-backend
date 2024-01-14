import { Router } from "express";
import ProductManager from "../models/ProductManager.js";

const routerProd = Router();
const productManager = new ProductManager();

routerProd.get("/", async (req, res) => {
    const { limit } = req.query;
    const products = await productManager.getProducts();
    if (!limit) return res.status(200).send(products);
    const prods = products.slice(0, limit);
    return res.status(200).send(prods);
});

routerProd.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await productManager.getProductById(id);
    if (!product) return res.status(404).send("Producto no encontrado");
    return res.status(200).send(product);
});

routerProd.post("/", async (req, res) => {
    const conf = await productManager.addProduct(req.body);
});

routerProd.put("/:id", async (req, res) => {
    const { id } = req.params;
});

routerProd.delete("/:id", async (req, res) => {
    const { id } = req.params;
});

export default routerProd;
