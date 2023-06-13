// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// var lengthOfPassword = prompt("How long do you want your password to be?")

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=+<>,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());

//We need a new, secure password
//Clicking the button will give us a series of prompts
//We select which criteria we want
//Criteria includes: how long (8 or more characters), lowercase, uppercase, numeric, special characters
//When all prompts are answers and validated, password is generated
//Password is displayed in an alert

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
