
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChars = ["!", "@", "#", "$", "%", "^", ]

// Where I am stuck: getting the length of the password as a var, generating the userSelections into a string with all the vars, generating password on screen
var generatePassword = function () {
  var userSelections = [];
  // How long do you want to password to be? (Prompt)
  var passwordLength = prompt("How long do you want your password to be? (8 - 128 characters).")


  var wantsLowerCase = confirm("Do you want lower case?");
 
  if (wantsLowerCase) {
    userSelections = userSelections.concat(lowerCase);
  }

  var wantsUpperCase = confirm("Do you want upper case?");
  if (wantsUpperCase) {
    userSelections = userSelections.concat(upperCase);
  }

  var wantsNumbers = confirm("Do you want numbers?");
  if (wantsNumbers) {
    userSelections = userSelections.concat(numbers);
  }

  var wantsSpecialChar = confirm("Do you want special characters?");
  if (wantsSpecialChar) {
    userSelections = userSelections.concat(specialChars);
  }
  console.log(userSelections);

  var password = ""
  // for = we are starting some kind of loop
  // var i = 0 = the variable that we are looping over and what number ot's starting with 
  // i< passwordLength = thisis our condition if the condition is true, then we continue the loop, if it's not true, we break it or stop it
  // i++ = after we run the code, change the looping variable 
  for (var i = 0; i < passwordLength; i++){
    var rand = Math.floor(Math.random() * userSelections.length)
    password += userSelections[rand]
    console.log(password)
  }
return password
};
// Write password to the #password input

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  // THEN I am presented with a series of prompts for password criteria
  //WHEN prompted for the length of the password
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // Assignment Code






