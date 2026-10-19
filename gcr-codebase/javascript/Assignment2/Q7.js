let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ");
let wordCount = words.length;
let hasBad = feedback.toLowerCase().includes("bad");
let hasPoor = feedback.toLowerCase().includes("poor");

if (!hasBad && !hasPoor) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);