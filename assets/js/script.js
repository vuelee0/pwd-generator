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


// function to generate the password base on user's criteria selection
function generatePassword() {

  var passwordLength = prompt("Please type a number between 8 and 128. This is your new password length.");
  var pwdLengthInt = parseInt(passwordLength);

    if (pwdLengthInt < 8 || pwdLengthInt > 128 || isNaN(pwdLengthInt)) {
      alert("Password must be at least 8 charaters, less than 128 characters and must be a number.")
      generatePassword()
    }

  var lowerCase = confirm("Do you want your new password to include lowercase letters?");
  var upperCase = confirm("Do you want your new password to include uppercase letters?");
  var numericChar = confirm("Do you want your new password to include numbers?");
  var specialChar = confirm("Do you want your new password to include special characters?");

    if (!lowerCase && !upperCase && !numericChar && !specialChar) {
      alert("You must choose at least one option.")
      generatePassword()
    }

  console.log("After if")

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

  // push selected characters to for loop
  var userChoices = []
    if (lowerCase === true) {
      userChoices.push(getPwdCharArray.getLowerCase);
    }

    if (upperCase === true) {
      userChoices.push(getPwdCharArray.getUpperCase);
    }

    if (numericChar === true) {
      userChoices.push(getPwdCharArray.getNumericChar);
    }

    if (specialChar === true) {
      userChoices.push(getPwdCharArray.getSpecialChar);
    }
    console.log(userChoices)

  // for loop to iterate through the array
  var newRandomPassword = "";
    for (var i = 0; i < pwdLengthInt; i++) {
      console.log(i)
      newRandomPassword = newRandomPassword + userChoices[Math.floor(Math.random()*userChoices.length)]()
  }

  return newRandomPassword;
};