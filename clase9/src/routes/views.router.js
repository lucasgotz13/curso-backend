import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
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
            role: "admin",
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
    const FOODS = [
        { name: "Pizza", price: 10.99 },
        { name: "Burger", price: 8.99 },
        { name: "Pasta", price: 11.99 },
        { name: "Salad", price: 7.99 },
        { name: "Ice Cream", price: 4.99 },
    ];
    const user = USERS[Math.floor(Math.random() * USERS.length)];
    res.render("index", {
        user: user,
        style: "index.css",
        role: user.role === "admin",
        FOODS,
    });
});

router.get("/user", (req, res) => {
    res.render("register");
});

router.post("/user", function (req, res) {
    console.log("test");
});

export default router;
