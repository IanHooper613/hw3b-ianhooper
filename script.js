// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword(){
    const lowOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const capsOptions = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const specCharOptions = ['!','@','#','$','%','^','&','*'];
    const numbersOptions = ['0','1','2','3','4','5','6','7','8','9'];
    let password = ""

    let howManyNums = prompt('How many characters would you like your password to be?')
    if (howManyNums > 128 || howManyNums < 8) {
        alert('You must enter a number greater than 8 and less than 128.')
        return
    }
    //These are the questions that the user is asked
    let caps = confirm('Will your password contain upper case letters?')
    let low = confirm('Will your password contain lower case letters?')
    let specChar = confirm('Will your password contain special characters?')
    let numbers = confirm('Will your password contain numbers?')
    if(caps === true || low === true || specChar === true || numbers === true){
        while(password.length < howManyNums){
            if(low === true){
                password += lowOptions[Math.floor(Math.random() * lowOptions.length)]
            }
            if(caps === true){
                password += capsOptions[Math.floor(Math.random() * capsOptions.length)]
            }
            if(specChar === true){
                password += specCharOptions[Math.floor(Math.random() * specCharOptions.length)]
            }
            if(numbers === true){
                password += numbersOptions[Math.floor(Math.random() * numbersOptions.length)]
            }
        }
        return password.slice(0, howManyNums)
    } else {
        alert("you have to select one of the criteria")
        return 
    }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
