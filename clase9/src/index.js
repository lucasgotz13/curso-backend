import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import router from "./routes/views.router.js";

const PORT = 8080;

const USERS = [
    {
        name: "John",
        surname: "Doe",
        age: 30,
        email: "john.doe@example.com",
        phone: "123-456-7890",
    },
    {
        name: "Jane",
        surname: "Doe",
        age: 28,
        email: "jane.doe@example.com",
        phone: "098-765-4321",
    },
    {
        name: "Bob",
        surname: "Smith",
        age: 35,
        email: "bob.smith@example.com",
        phone: "111-222-3333",
    },
    {
        name: "Alice",
        surname: "Johnson",
        age: 32,
        email: "alice.johnson@example.com",
        phone: "444-555-6666",
    },
    {
        name: "Charlie",
        surname: "Brown",
        age: 27,
        email: "charlie.brown@example.com",
        phone: "777-888-9999",
    },
];

const app = express();

app.engine("handlebars", handlebars.engine());

app.set("views", __dirname + "/views");

app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.use("/", router);

const server = app.listen(PORT, () => console.log("Listening on port", PORT));
