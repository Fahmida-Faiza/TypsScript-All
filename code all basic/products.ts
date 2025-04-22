type Product = {
    name: string;
    price: number;
    quantity: number;
}

const product: Product = {
    name: "laptop",
    price: 1000,
    quantity: 5
}
const product1: Product = {
    name: "moblie",
    price: 500,
    quantity: 5
}

const calculateTotalPrice = (product1: Product) => {
    return `${product1.name} Total Cost: ${product1.price * product1.quantity}`;
}

console.log(calculateTotalPrice(product1));
