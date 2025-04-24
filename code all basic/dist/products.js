"use strict";
const product = {
    name: "laptop",
    price: 1000,
    quantity: 5
};
const product1 = {
    name: "moblie",
    price: 500,
    quantity: 5
};
const calculateTotalPrice = (product1) => {
    return `${product1.name} Total Cost: ${product1.price * product1.quantity}`;
};
console.log(calculateTotalPrice(product1));
