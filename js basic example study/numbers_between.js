//propmpt user to enter values
//check if one of them is between 50 and 99(inclusive)

function askNumbers(num1, num2) {

    if (num1 <= 99 && num1 >= 51 || num2 <= 99 && num2 >= 51) {
        document.write(true)
    }
    else {
        document.write(false)
    }
}
let num1 = prompt("number1:");
let num2 = prompt("number2:");
askNumbers(num1, num2)