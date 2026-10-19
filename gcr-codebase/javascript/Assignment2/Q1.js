// let bonus = 5000; // this is a global variable

// function calculateSalary() {
//     let salary = 40000; // but this is a local variable and can be only accessed within the function
//     let isPermanent = true; // local variable

//     let totalSalary = salary;

//     if (isPermanent) {
//         totalSalary = salary + bonus;
//     }

//     console.log("Total Salary: ₹" + totalSalary);
// }
// calculateSalary();
// console.log("Global Bonus: ₹" + bonus);


// changing is permanent variable scope

let bonus = 5000;
function calculateSalary() {
    let salary = 40000;
    let isPermanent = false;

    let totalSalary = salary;

    if (isPermanent) {
        totalSalary = salary + bonus;
    }

    console.log("Total Salary: ₹" + totalSalary);
}
calculateSalary();
console.log("Global Bonus: ₹" + bonus);