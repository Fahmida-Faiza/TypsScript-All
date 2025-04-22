var product = {
    name: "laptop",
    price: 1000,
    quantity: 5
};
var product1 = {
    name: "moblie",
    price: 500,
    quantity: 5
};
var calculateTotalPrice = function (product1) {
    return "".concat(product1.name, " Total Cost: ").concat(product1.price * product1.quantity);
};
console.log(calculateTotalPrice(product1));
