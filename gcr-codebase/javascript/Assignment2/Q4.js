let scores = Array.from({ length: 8 }, () => {
    return Math.floor(Math.random() * 71) + 30;
});
let studentScores = scores.map((score, index) => {
    return `Student ${index + 1}: ${score}`;
});
let total = scores.reduce((sum, score) => {
    return sum + score;
}, 0);

let average = total / scores.length;
let passedStudents = scores.filter(score => score >= 50);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

console.log(`
Student Performance :
Scores: ${scores.join(", ")}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed: ${passedStudents.length}`);

console.log("Student Details:");
console.log(studentScores);