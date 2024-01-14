import express from "express";
import routerProd from "./routes/products.routes.js";

const PORT = 4000;
const app = express();

app.use("/api/products", routerProd);

app.listen(PORT, () => {
    console.log("Server on port", PORT);
});
