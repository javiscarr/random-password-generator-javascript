// Assignment Code
//variable inputs for user
var enter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmCharacter;

//numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//alphabetical characters
alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//special characters
character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
//space for conversion of Uppercase letters
space = [];
//declared outside of if statements
var choices;

//this function converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};

//new variable created for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
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
    enter = (prompt("You must choose between 8 and 128"));


  
  } else {
    //continues after user input is validated
    confirmNumber = confirm("Will your password contain numbers?");
    confirmUppercase = confirm("Will your password contain Uppercase letters?");
    confirmLowercase = confirm("Will your password contain Lowercase letters?");
    confirmCharacter = confirm("Will your password contain special characters?");
  
  };
  

  if (
    !confirmUppercase &&
    !confirmLowercase &&
    !confirmNumber &&
    !confirmCharacter
 ) {
    choices = alert("You must choose password criteria!");
  }

  //User prompt choices determined for 4 true statements
  else if (
    confirmCharacter &&
    confirmNumber &&
    confirmUppercase &&
    confirmLowercase
  ) {
    choices = character.concat(number, alpha, alpha2);

    //// Choices determined for 4 true criteria
  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);

    // Choices determined for 3 true criteria
  } else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  } else if (confirmCharacter && confirmUppercase && confirmLowercase) {
    choices = character.concat(alpha2, alpha);
  }else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }else if (confirmNumber && confirmUppercase && confirmLowercase) {
    choices = number.concat(alpha2, alpha);
  


  // Choices determined for 2 true criteria
  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);
  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha2);
  } else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  } else if (confirmUppercase && confirmNumber) {
    choices = alpha2.concat(number);
  } else if (confirmUppercase & confirmLowercase) {
    choices = alpha2.concat(alpha);
  } else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

    // Choices determined for 1 true criteria
  } else if (confirmCharacter) {
    choices = character;
  } else if (confirmNumber) {
    choices = number;
  } else if (confirmLowercase) {
    choices = alpha;
  } else if (confirmUppercase) {
    choices = space.concat(alpha2);
  };

//array placeholder for generated amount of length
  var password = [];


//initiates random selection for all variables
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  //password is converted into a string
  var ps = password.join("");
  UserInput(ps);
  return ps;

  function UserInput(ps) {
    document.getElementById("password").textContent = ps;
  }

}