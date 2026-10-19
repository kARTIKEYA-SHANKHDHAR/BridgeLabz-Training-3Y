let salary = 50000;
let incrementRate = 10;
let result = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;

    result.push({
        Year: year,
        Salary: Math.round(salary)
    });
}
console.table(result);