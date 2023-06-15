
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c"]
var upperCase= ["A", "B", "C"]

var generatePassword = function () {
  var userSelections = []
  // How long do you want to password to be? (Prompt)
    // store length in var
  // Do you want lower case? (Confirm)
  var wantsLowerCase = confirm ("Do you want lower case?")
    // If yes
    if (wantsLowerCase) {
      //merge lowerCase array into userSelections array
      userSelections = userSelections.concat(lowerCase);
    }
    
// If no, do nothing
  // Do you want upper case? (Confirm)

   var wantsUpperCase = confirm("Do you want upper case?");
   // If yes
   if (wantsUpperCase) {
     //merge lowerCase array into userSelections array
     userSelections = userSelections.concat(upperCase);
   }

    // If no, do nothing
  // Do you want numbers? (Confirm)
   // If yes
      //merge  numbers array into userSelections array
    // If no, do nothing
  // Do you want special characters? (Confirm)
     // If yes
      //merge specialChars array into userSelections array
    // If no, do nothing

console.log(userSelections)

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
};

// Write password to the #password input

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





