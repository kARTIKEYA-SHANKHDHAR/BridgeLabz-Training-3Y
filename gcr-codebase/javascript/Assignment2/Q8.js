const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce((sum, product) => {
    return sum + product.price;
}, 0);

let finalTotal = total;

for (let i = 0; i < cart.length; i++) {
    if (cart[i].category === "electronics") {
        finalTotal -= cart[i].price * 10 / 100;
    } else if (cart[i].category === "fashion") {
        finalTotal -= cart[i].price * 5 / 100;
    }
}

if (total > 50000) {
    finalTotal -= finalTotal * 5 / 100;
}
console.log("Total Cart Value: ₹" + total);
console.log("Final Total: ₹" + finalTotal);