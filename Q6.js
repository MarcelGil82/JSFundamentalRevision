// 6.Create a variable that is a string. 
// Use an if/else statement to log whether the string has the value "yes". lesson 5

let myString = "i'm looking for yes";
let hasYes = myString.includes("yes")
if (hasYes) {
    return console.log(`The string has the value 'yes'`);
} else {
    console.log(`The string does not have 'yes'`);
}

