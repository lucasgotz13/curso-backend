import express from "express";
import handlebars from "express-handlebars";
import __dirname from "../../clase10/src/utils.js";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io";

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

    // socket.on("evento_para_socket_individual", (data) => {
    //     console.log(data);
    // });
    // socket.on("evento_para_todos_menos_el_actual", (data) => {
    //     console.log(data);
    // });
    // socket.on("evento_para_todos", (data) => {
    //     console.log(data);
    // });

    const msjs = [];

    socket.on("msj", (data) => {
        console.log(data);
        msjs.push(data);
        socket.emit("mensajeDelChat", msjs);
    });
});
