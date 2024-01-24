import express from "express";
import routerProd from "./routes/products.routes.js";
import { __dirname } from "./path.js";
import path from "path";

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", routerProd);
app.use("/static", express.static(path.join(__dirname, "/public")));

app.listen(PORT, () => {
    console.log("Server on port", PORT);
});
