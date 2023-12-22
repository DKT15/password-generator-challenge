// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var pwLength = prompt(
    "How many characters would you like your password to contain?"
  );

  pwLength = parseInt(pwLength); //this converts the password length to accept an integer.

  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    // if the password length is less than 8, more than 128 or is a NaN. The alert will display the message below and will not continue  through the function.
    alert("password length is not correct");
    return;
  }

  // list of confirms
  var isNumeric = confirm("Click OK to confirm including numeric characters");
  var isSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  );
  var isUppercase = confirm(
    "Click OK to confirm including lowercase characters"
  );
  var isLowercase = confirm(
    "Click OK to confirm including uppercase characters"
  );

  //the passwords length along with the characters are returned inside of this function passwordOptions.
  return {
    pwLength: pwLength,
    isNumeric: isNumeric,
    isSpecialCharacters: isSpecialCharacters,
    isUppercase: isUppercase,
    isLowercase: isLowercase,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomCharacter = arr[Math.floor(Math.random() * arr.length)]; // this picks out a random element from the passwordOptions array.
  return randomCharacter; //randomCharacter has been assigned the random arrays random character. The randomCharacter is then returned, so it can be activated.
}

// Function to generate password with user input
function generatePassword() {
  var pwOptions = getPasswordOptions(); //PwOptions takes the contents of the getPasswordOptions function its been made to equal.
  var finalArr = []; //Created a final array variable.
  var randomPw = ""; //Created a randomPw varable.

  // checks the users answer and then pushes the last characters onto the final array.
  if (pwOptions.isNumeric === true) {
    finalArr.push(...numericCharacters);
  }

  if (pwOptions.isSpecialCharacters === true) {
    finalArr.push(...specialCharacters);
  }

  if (pwOptions.isUppercase === true) {
    finalArr.push(...upperCasedCharacters);
  }

  if (pwOptions.isLowercase == true) {
    finalArr.push(...lowerCasedCharacters);
  }

  if (finalArr.length === 0) {
    alert("choose one type of character.");
  }

  for (var i = 0; i < pwOptions.pwLength; i++) {
    //This loops over the pwoptions password length. We get access to this variable from the getPasswordOptions function.
    randomPw = randomPw + getRandom(finalArr); //Random password is concatinated here and it is and it takes the getRandom function that generates the random password and then it takes the finalArray as an input.
  }

  return randomPw; //random password is then returned so it can be accessed.
}

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
