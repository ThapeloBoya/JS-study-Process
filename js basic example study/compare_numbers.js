function computeSum(num1, num2) {
    let sum = (num1) + (num2);

    if (sum >= 50 && sum <= 80) {
        document.write(65)
    } else {
        document.write(80)
    }

}
//parseint so the code reads the input as a number and not the string
num1 = parseInt(prompt("number 1:"))
num2 = parseInt(prompt("number 2:"))
computeSum(num1, num2)
