import express from "express";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io";
import __dirname from "./utils.js";
import { PRODUCTS } from "./routes/views.router.js";

const app = express();
const PORT = 8080;

const httpServer = app.listen(PORT, () => {
    console.log("Servidor escuchando en", PORT);
});

const socketServer = new Server(httpServer);

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.use("/", viewsRouter);

socketServer.on("connection", (socket) => {
    console.log("Nuevo cliente conectado");

    let newProducts = PRODUCTS;

    socket.emit("sendProducts", newProducts);

    socket.on("addProd", (data) => {
        newProducts.push(data);
        socket.emit("sendProducts", newProducts);
    });

    socket.on("updateProducts", (data) => {
        newProducts.splice(data, 1);
    });
});
