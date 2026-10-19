let marks = [78, 85, 67, 90, 72];
let total = 0;
let detained = false;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];

    if (marks[i] < 35) {
        detained = true;
    }
}
let average = total / marks.length;
let percentage = (total / 500) * 100;

console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");





if (detained) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage <= 84) {
    console.log("Promoted");
} else {
    console.log("Detained");
}