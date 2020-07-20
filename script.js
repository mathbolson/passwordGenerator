var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [ "<", ">", "?","~", "!", "%", "&", ",", "*", "+", "-", ".", "/"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength;
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

document.querySelector("#generate").addEventListener("click", writePassword);


function generatePassword() {
  var confirmLength = (prompt("How many characters do you want in your password?"));

  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password must be between 8-128 characters. Try again");
      var confirmLength = (prompt("How many characters do you want in your password?"));
      } 

      alert(`Your password will have ${confirmLength} characters`);


    var confirmSpecialCharacter = confirm("Confirm if you want to include special characters");
    var confirmNumericCharacter = confirm("Confirm if you want to include numeric characters");    
    var confirmLowerCase = confirm("Confirm if you want to include lowercase characters");
    var confirmUpperCase = confirm("Confirm if you want to include uppercase characters");


      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Confirm if you want to include special characters");
        var confirmNumericCharacter = confirm("Confirm if you want to include numeric characters");    
        var confirmLowerCase = confirm("Confirm if you want to include lowercase characters");
        var confirmUpperCase = confirm("Confirm if you want to include uppercase characters");   
    } 


      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerLetter)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperLetter)
    }

      console.log(passwordCharacters)

      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

