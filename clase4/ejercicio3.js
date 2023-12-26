const fs = require("fs/promises");

class Manager {
    async createUser({ name, surname, age, course }) {
        let user = { name, surname, age, course };
        let users = [];
        try {
            let data = await fs.readFile("./Usuarios.json", "utf-8");
            users = JSON.parse(data);
            users.push(user);
            return await fs.writeFile("./Usuarios.json", JSON.stringify(users));
        } catch (err) {
            users.push(user);
            return await fs.writeFile("./Usuarios.json", JSON.stringify(users));
        }
    }

    async getUsers() {
        const res = await fs.readFile("./Usuarios.json", "utf-8");
        console.log(JSON.parse(res));
    }
    async deleteUsers() {
        await fs.unlink("./Usuarios.json");
    }
}

const manager = new Manager();
manager.createUser({
    name: "Lucas",
    surname: "Gotz",
    age: 18,
    course: "5to año",
});
setTimeout(() => manager.getUsers(), 2000);
