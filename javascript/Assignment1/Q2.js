let userName = "Kartik";
let age = 21;
let isStudent = true;
let hobbies = ["singing", "gaming", "travel"];
let user = {
    city: "mathura",
    course: "b.tech"
};
let address = null;
let phoneNumber;

console.table([
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "Age",
        value: age,
        type: typeof age
    },
    {
        label: "Is Student",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "Hobbies",
        value: hobbies,
        type: Array.isArray(hobbies) ? "array" : typeof hobbies
    },
    {
        label: "User",
        value: user,
        type: typeof user
    },
    {
        label: "Address",
        value: address,
        type: address === null ? "null" : typeof address
    },
    {
        label: "Phone Number",
        value: phoneNumber,
        type: typeof phoneNumber
    }
]);