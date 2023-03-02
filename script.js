// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
    function generatePassword(){
      var length= prompt ("choose length between 8 and 128 characters");
      var special = prompt("Should it have special characters?(Y/N)");
      var upper = prompt("Should it have upper case letters?(Y/N)");
      var lower = prompt("Should it have lower case letters?(Y/N)");
 
      var password= "";
      if (upper = "Y");
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
             if (lower= "Y");
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                 if (special = "Y")
                var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#${}[].,';
            
              
            for (let i = 0; i <= length; i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                password += str.charAt(char)
            }
              
            return password;
        }
          
        
    }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
