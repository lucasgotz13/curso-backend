class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }

    addProduct({ name, description, price, thumbnail, code, stock }) {
        if (!name || !description || !price || !thumbnail || !code || !stock) {
            console.log("Faltan campos por completar");
            return;
        }
        if (!this.products.some((product) => product.code === code)) {
            this.id++;
            let newProduct = {
                id: this.id,
                name,
                description,
                price,
                thumbnail,
                code,
                stock,
            };
            this.products.push(newProduct);
            console.log("Product added");
        } else {
            console.log(`Product with code: "${code}" already exists`);
        }
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        const product = this.products.find((product) => product.id === id);
        return product ?? "Product not found";
    }
}

// Proceso de testing

const productManager = new ProductManager();

console.log(productManager.getProducts());

productManager.addProduct({
    name: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
});

console.log(productManager.getProducts());

productManager.addProduct({
    name: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
});

console.log(productManager.getProductsById(1));
console.log(productManager.getProductsById(3));
