let expenses = [5000, 2000, 12000, 3000, 1500];
let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}
let average = total / expenses.length;

let tax = total * 10 / 100;
let finalAmount = total + tax;
console.log("Total Expense: ₹" + total.toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Final Amount after Tax: ₹" + finalAmount.toFixed(2));