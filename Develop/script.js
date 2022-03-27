// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var getPwdCharArray = {
  getLowerCase: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },

  getUpperCase: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },

  getNumericChar: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },

  getSpecialChar: function() {
    var specialCharacters = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
    return specialCharacters[Math.floor(Math.random() * specialCharacters.passwordLength)];
  }
};


var passwordLength = prompt("Please type a number between 8 and 128. This is your new password length.");
var lowerCase = confirm("Do you want your new password to include lowercase letters?");
var upperCase = confirm("Do you want your new password to include uppercase letters?");
var numericChar = confirm("Do you want your new password to include numbers?");
var specialChar = confirm("Do you want your new password to include special characters?");


// function generatePassword() {
//   let generatePassword = "";
  
//   if (lowerCase === true) {
//     inputLowerCase = getPwdCharArray.getLowerCase();
//   }

//   if (upperCase === true) {
//     inputUpperCase = getPwdCharArray.getUpperCase();
//   }

//   if (numericChar === true) {
//     inputNumericChar = getPwdCharArray.getNumericChar();
//   }

//   if (specialChar === true) {
//     inputSpecialChar = getPwdCharArray.getSpecialChar();
//   }
  

//   let newRandomPassword = "";
//   for (let i = 0; i < getPasswordLength; i++) {
//     var newRandomNum = Math.floor(Math.random() * 4);

//     newRandomPassword += newRandomNum;
//   }

//   newRandomPassword += inputLowerCase;
//   newRandomPassword += inputUpperCase
//   newRandomPassword += inputNumericChar
//   newRandomPassword += inputSpecialChar

//   return newRandomPassword;

// };