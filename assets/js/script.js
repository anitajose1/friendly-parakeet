// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Array for special characters
var symbols = ["!", "@", ".", "%", "#", "&", "$", "_", "'", ";", "-", " ", "(", ")", "^", "*", "+", ":", "<", ">", "=", "/", "?", "[", "]", "`", "~", "|"];

// Array for numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array for letters, which is then split into uppercase & lowercase arrays
var letters = 'abcdefghijklmnopqrstuvwxyz';
var lettersArr = letters.split('');
console.log(lettersArr);
var upperLettersArr = letters.toUpperCase().split('');
console.log(upperLettersArr);

// Array to store final characters (based on the user's selections)
var finalCharacters = [];

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
  console.log(length);
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters!");
    return generatePassword();
  }
  if (passwordLength > 128) {
    alert("Password length can be a maximum of 128 characters!");
    return generatePassword();
  }
  // If the user selected "Okay" for that specific character, push it into the finalCharacter array
  var special = confirm("Click OK to confirm including special characters.");
  if (special === true) {
    for (let i=0; i<symbols.length; i++){
      finalCharacters.push(symbols[i]);
  }
  }
  var numeric = confirm("Click OK to confirm including numeric characters.");
  if (numeric === true) {
    for (let i=0; i<numbers.length; i++){
      finalCharacters.push(numbers[i]);
  }
  }
  var uppercase = confirm("Click OK to confirm including uppercase characters.");
  if (uppercase === true) {
    for (let i=0; i<upperLettersArr.length; i++){
      finalCharacters.push(upperLettersArr[i]);
  }
}
  var lowercase = confirm("Click OK to confirm including lowercase characters.");
  if (lowercase === true) {
    for (let i=0; i<lettersArr.length; i++){
      finalCharacters.push(lettersArr[i]);
  }
}
  if (special === false && numeric === false && uppercase === false && lowercase === false){
    alert("Please select at least one option")
    return generatePassword();
  }
  console.log(finalCharacters);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
