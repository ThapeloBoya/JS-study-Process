function addNumbers(num1, num2) {

    let sum1 = (num1) + (num2)

    if (num1 == 8 || num2 == 8) {
        document.write("one number equal to 8")
    }
    else if (sum1 == 8 || sum1 % 8 == 0) {
        document.write("both Is equal to 8")
    }
    else {
        document.write("nothing to report")
    }
}
num1 = parseInt(prompt("value 1:"));
num2 = parseInt(prompt("value 2:"));

addNumbers(num1, num2)