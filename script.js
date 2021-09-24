

//
// I need the generator to start when the user hits a button
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 








// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword(){  //main function

  //this uses user imputed data to determine the amout of characters going to be used.
  questionAmmt = prompt("howmany characters would you like?", "min 8  max 128");

  var passwordLength = parseInt(questionAmmt);

  //this makes sure the entered ammount is withing the desired range
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please keep the generated password within 8 and 128 characters!");
    return;
  }


  //This generates true/false booleans to determine what character sets to add into the generated password.
  var questionLower   = confirm("Would you like to include lowercase letters?");    //  boolean confirmation box for if statement
  var questionUpper   = confirm("Would you like to include uppercase letters?");    //  boolean confirmation box for if statement
  var questionNumber  = confirm("Would you like to include numbers?");              //  boolean confirmation box for if statement
  var questionSymbol  = confirm("Would you like to include symbols?");              //  boolean confirmation box for if statement

  //This concatinates all the strings together for the generated password to utilize.
  var charset = "";                                               //  empty placeholder set
  if (questionLower)  {charset += "abcdefghijklmnopqrstuvwxyz"};  //  lowercase character set   the += adds to empty placeholder set
  if (questionUpper)  {charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"};  //  capital character set     the += adds to empty placeholder set
  if (questionNumber) {charset += "0123456789"};                  //  number character set      the += adds to empty placeholder set
  if (questionSymbol) {charset += "*&^%$#@!?[]{}"};               //  symbol character set      the += adds to empty placeholder set

  //this makes sure there has been at least one character set selected.
  if (charset == "") {
    alert("You need to have some characters selected! \nPlease try again.");
    return;
  }


  // console.log(passwordLength);   used for debugging
  // console.log(charset);          used for debugging
  
  var createdPassword = "";  //placeholder for created password

  for (i=0; i < passwordLength; i++) {  //for loop loops 
    createdPassword += charset.charAt(Math.floor(Math.random() * charset.length)); //random character determined with math.random using the charset.length as the maximum height.
    // this gets the empty createdPassword string and adds a random letter from the charset
  }  
  
  //console.log(createdPassword);  //used for debugging
  
  return createdPassword; //returns created password
}
