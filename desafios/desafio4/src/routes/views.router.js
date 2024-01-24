import { Router } from "express";

const viewsRouter = Router();

export let PRODUCTS = [
    {
        id: "a4ba52de-3269-4177-85d3-fc5db8516c31",
        name: "Product 1",
        description: "This is product 1",
        price: 100,
        stock: 50,
        code: "P1",
    },
    {
        id: "e86691d1-be23-47d0-88cd-a40dc45c6108",
        name: "Product 2",
        description: "This is product 2",
        price: 200,
        stock: 40,
        code: "P2",
    },
    {
        id: "aa485aa9-597d-4004-b3f3-927f276b27a6",
        name: "Product 3",
        description: "This is product 3",
        price: 300,
        stock: 30,
        code: "P3",
    },
    {
        id: "6158bce4-4115-4820-8c96-9704b382726d",
        name: "Product 4",
        description: "This is product 4",
        price: 400,
        stock: 20,
        code: "P4",
    },
    {
        id: "0166d816-86a0-4719-aced-dddff804f872",
        name: "Product 5",
        description: "This is product 5",
        price: 500,
        stock: 10,
        code: "P5",
    },
];
viewsRouter.get("/", (req, res) => {
    res.render("home", { PRODUCTS });
});

viewsRouter.get("/realTimeProducts", (req, res) => {
    res.render("realTimeProducts", { PRODUCTS });
});

export default viewsRouter;
