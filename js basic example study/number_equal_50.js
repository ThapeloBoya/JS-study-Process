//promp user for two numbers
//if one number is  more than 50 true
//if the sum is greater

function giveNumbers(num1, num2) {

    if (num1 == 50 || num2 == 50 || (num1 * 1) + (num2 * 1) == 50) {
        document.write(true);
    } else {
        document.write(false);
    }
}
let num1 = prompt("1st number:");
let num2 = prompt("2nd number:");

giveNumbers(num1, num2)
