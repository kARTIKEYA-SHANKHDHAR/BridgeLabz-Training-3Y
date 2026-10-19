let userName = "Kartik";

let currentHour = new Date().getHours();       //provides us current time in 24 hours format 

if (currentHour < 12) {                        //using if else condition to greet user based on time
    console.log(`Good Morning ${userName}!`);
} 
else if (currentHour >= 12 && currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} 
else {
    console.log(`Good Evening ${userName}!`);
}