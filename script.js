
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

var generatePassword = function () {
  var userSelections = [];

  var passwordLength = prompt("How long do you want your password to be? (8 - 128 characters).")
    if (passwordLength < 8 || passwordLength > 128) {
      alert ("Password must be between 8 and 128 characters.")
      return
    } 

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








