// let category = "Action";

// let movie = "Avengers";
// let searchTerm = "ger";

// switch (category) {
// case "Action":
// console.log("This is action movie");
//   break;

// case "Comedy":
//  console.log("This is comedy movie");
//      break;

// case "Drama":
//    console.log("This is drama movie");
//     break;

// default:
//     console.log("No category is selected");
// }

       // for Loop
// var i =0;
// for(var i=5; i<10; i++){
//     console.log(i);
// }
// console.log("This is outside block ",i)

       // for-of Loops      ... itrates over the objects value 

// let branch = ["CSE","IT","ECE"]
// branch.newBranch="AIML"
// for(const b of branch){             //... of value print karega but agr in use kra toh sirf uski indexing karega print 
//                                     // it itrates over the object value
//     console.log(b);
// }

// for(const b in branch){             //... of value print karega but agr in use kra toh sirf uski indexing karega print 
//                                     // it itreates over object keys 
//     console.log(b);
// }

// let studentInfo ={
//     name:"kartikeya shankhdhar",
//     age:"21",
//     gender:"male",

//     college_details:{
//         university_rn:2415000789,
//         class_rn:28,
//         attendance:80,
//     },
//     acedamic_details:{
//         "10th_perc":85,
//         "12th_perc":75,
//     },
//     branch_info:{
//         branch:"CSE",
//         specialization:"cloud",
//     },
//     subjects: {
//         core_subjects:["Automata", "DSA", "DA", "computer networks"],
//     },
//     faculty: {
//         class_advisor:"suneet agnihotri",
//         dean:"Ashok bhansali",
//         program_coordinator:"subhash chandra",
//     },
//     term_marks:{
//         mid_term:7.5,
//         endterm:7.8,
//     },
// }

// for( branch_info of studentInfo){
//     console.log(branch_info);
// }