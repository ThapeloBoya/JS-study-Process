function rangeNumber() {
    if ((num1 >= 40 && num1 <= 60 || num1 >= 70 && num1 <= 100) || (num2 >= 40 && num2 <= 60 || num2 >= 70 && num2 <= 100)) {
        document.write(true)
    }
    else {
        document.write(false)
    }
}

let num1 = prompt("number one:");
let num2 = prompt("number two:");
rangeNumber()