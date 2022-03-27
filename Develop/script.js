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






function generatePassword() {

  var passwordLength = prompt("Please type a number between 8 and 128. This is your new password length.");
  var pwdLengthInt = Math.ceil(parseInt(passwordLength) / 5);
  var lowerCase = confirm("Do you want your new password to include lowercase letters?");
  var upperCase = confirm("Do you want your new password to include uppercase letters?");
  var numericChar = confirm("Do you want your new password to include numbers?");
  var specialChar = confirm("Do you want your new password to include special characters?");

  // function code for randomizing character stored in an array
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
      const specialCharacters = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  };

  let newRandomPassword = "";
  for (let i = 0; i < pwdLengthInt; i++) {
    // var newRandomNum = Math.ceil(pwdLengthInt / 5);
    // var newRandomNum = Math.floor(Math.random() * 4);
    // newRandomPassword += newRandomNum;
  
    if (pwdLengthInt >= 8 || pwdLengthInt <= 128) {
      newRandomPassword += pwdLengthInt;
    }

    if (lowerCase === true) {
      newRandomPassword += getPwdCharArray.getLowerCase();
    }

    if (upperCase === true) {
      newRandomPassword += getPwdCharArray.getUpperCase();
    }

    if (numericChar === true) {
      newRandomPassword += getPwdCharArray.getNumericChar();
    }

    if (specialChar === true) {
      newRandomPassword += getPwdCharArray.getSpecialChar()
    }
  }

  


  return newRandomPassword;
};