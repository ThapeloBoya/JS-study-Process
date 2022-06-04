//compare values

function compareResult(num1, num2, num3) {

    if ((num1 <= 20 || num1 >= 20 || num1 < num2 || num1 < num3) || (num2 <= 20 || num2 >= 20 || num2 < num1 || num2 < num3) || (num3 <= 20 || num3 >= 20 || num3 < num1 || num3 < num1)) {
        document.write("is either less/greater than 20, or less than number 2 & number 3")
    } else {
        document.write("nothing to report")
    }
}

num1 = parseInt(prompt("value 1:"))
num2 = parseInt(prompt("value 2:"))
num3 = parseInt(prompt("value 3:"))

compareResult(num1, num2, num3)
