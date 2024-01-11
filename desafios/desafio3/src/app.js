const express = require("express");
const ProductManager = require("./ProductManager");

const app = express();
const productManager = new ProductManager();

app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
    let limitQuery = Number(req.query.limit);
    if (!limitQuery) return res.send(await productManager.getProducts());

    let products = await productManager.getProducts();
    let limitedProducts = await products.slice(0, limitQuery);
    res.send(limitedProducts);
});

app.get("/products/:pid", async (req, res) => {
    let paramsId = Number(req.params.pid);

    let product = await productManager.getProductById(paramsId);
    return res.send(product);
});

app.listen(8080, () => console.log("Listening on port 8080"));
