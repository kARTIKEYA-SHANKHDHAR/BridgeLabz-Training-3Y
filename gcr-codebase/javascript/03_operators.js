/* types of operators : Arithmetic operators , Logical operators , Bitwise operators, Assignment operator,  */

//Arithmetic operator
// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2%2);


//Comparison operator
// console.log(2>2);
// console.log(2==2);
// console.log(2===2);
// console.log(2<2);
// console.log(2<=2);
// console.log(2>=2);
// console.log(2!=2);


//Logical operator
// console.log(2>2 && 4<5);
// console.log(2>2 || 4<5);

//bitwise operator
// console.log(2>2 ^ 4<5);

//Assignment operator
// let a=5;
// let b =403+"203"
// console.log(typeof b)

// console.log(403-"203")
// console.log(2*"5")
// let a = 2*"5"
// console.log(typeof a)

//calculate booking amount of movie tickets, if ticket quantity is > 3, apply discount of 50 rupees , age should be > 18

const TicketAmount = 350
let Discount = 50
let NoOfTicket = 4
let age = 18
let movie = "Dhurandhar"
let searchTerm = "dhar"

function calculateBookingAmount(noOfTicket, age) {
   if (age <= 18 && NoOfTicket==0) {
      return "You are not eligible";
   }

   let totalAmount = TicketAmount * noOfTicket
   if (noOfTicket > 3) {
      totalAmount= totalAmount-Discount
   }
   return totalAmount
}

console.log(calculateBookingAmount(NoOfTicket, age))
// Print movie name in uppercase
console.log(movie.toUpperCase());

//Print its length
console.log(movie.length);

//Check whether it includes the search term
console.log(movie.includes(searchTerm));

//Extract first four characters
console.log(movie.slice(0, 4));

// Booking message using template literal
console.log(`You have successfully booked ${movie}. Enjoy your ${category} movie!`);