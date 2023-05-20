var generateBtn = document.querySelector("#generate");

// declaring variables
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~","[","]","{","}","|",";",":","'",",","<",">",".","?","/"];



function getPasswordOptions() {

  // variable to store users length of password input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );


  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // conditional statement to make sure password is atleast 8 characters
  if (length<8){
    alert('Password length must be atleast 8 characters.')
    return null;
  }

  // conditional statement to make sure password is less than 128 characters
  if (length>128){
    alert('Password length must be less than 129 characters.')
    return null;
  }

// refactor for lower upper and numeric


  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

   // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercaseCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

   // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );


   // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );


   // Object to store user input
   var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters,
    hasNumericCharacters: hasNumericCharacters
    // add more properties and values here
   }

   return passwordOptions;
}



// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

   // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
// conditional statement that adds lower characters into array of possible characters based on user input
// 
  if (options.hasLowercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(getRandom(lowercaseCharacters));
  }

  if (options.hasUppercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(getRandom(uppercaseCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
// for loop generating random characters based on users given length
  for (var i = 0; i<options.length; i++){
    var possibleCharacter = getRandom(possibleCharacters);
    result.push (possibleCharacter);
  }

  // create for loop for garrunteed characters to be included in results
  for (let i = 0; i<possibleCharacter; i++){
    console.log(possibleCharacter[i]);
  }
 

    // Transform the result into a string and pass into writePassword
    return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
