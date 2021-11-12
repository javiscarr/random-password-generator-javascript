// Assignment Code
//variable inputs for user
var enter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmCharacter;

//numeric characters
number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
//alphabetical characters
alpha = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//space for conversion of Uppercase letters
space =[];
//declared outside of if statements
var choices;

//this function converts letters to uppercase
var toUpper = function (x) {
    return x.toUpperCase();
};

//new variable created for uppercase conversion
alpha2 = alpha.map(toUpper);


var get  = document.querySelector("#generate");

get.addEventListener("click", function() {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;

});

// Write password to the #password input
function generatePassword() {
    //This will ask for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    //for user validation
    if (!enter) {
        alert("A value needs to be entered!");
 } else if (enter < 8 || enter > 128) {

    //user input is validated
    //user input prompts begin
    enter = parseInt(prompt("You must choose between 8 and 128"));
 } else {
     //continues after user input is validated
     confirmNumber = confirm("Will your password contain numbers?");
     confirmUppercase = confirm("Will your password contain Uppercase letters?");
     confirmLowercase = confirm("Will your password contain Lowercase letters?");
     confirmCharacter = confirm("Will your password contain special characters?");

 }; 

 if (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmCharacter) {
     choices = alert("You must choose password criteria!");
 }