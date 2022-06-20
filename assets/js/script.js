// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Array for special characters
var symbols = ["!", "@", ".", "%", "#", "&", "$", "_", "'", ";", "-", " ", "(", ")", "^", "*", "+", ":", "<", ">", "=", "/", "?", "[", "]", "`", "~", "|"];
console.log(symbols.length);

// Array for numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.length);

var letters = 'abcdefghijklmnopqrstuvwxyz';
console.log(letters);

var lettersArr = letters.split('');
console.log(lettersArr);

var upperLettersArr = letters.toUpperCase().split('');
console.log(upperLettersArr);

function generatePassword() {
  var length = prompt("How many characters would you like your password to contain?");
  console.log(length);
  if (length < 8) {
    alert("Password length must be at least 8 characters!");
    return generatePassword();
  }
  if (length > 128) {
    alert("Password length can be a maximum of 128 characters!");
    return generatePassword();
  }
  var finalCharacters = []
  // If the user selected Okay for that specific character, you are going to push it into the finalCharacter array

  var special = confirm("Click OK to confirm including special characters.");
// if special === true push the special array of character into the final character array

  var numeric = confirm("Click OK to confirm including numeric characters.");
  var uppercase = confirm("Click OK to confirm including uppercase characters.");
  var lowercase = confirm("Click OK to confirm including lowercase characters.");
  if (special === false && numeric === false && uppercase === false && lowercase === false){
    alert('Please select at least one option')
  }

  // ONce you get all of the users desired characters
  // You are going to loop through that final character array, and we are looping based on the length the user decided on
var finalPassword = ''
  for (let i = 0; i < length; i++) { 
    // We going to use math.random to randomize the finalCharacter array and push each random character into the final password variable 
  }
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
