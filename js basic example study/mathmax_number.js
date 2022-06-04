//propmt user for three values 
//spit out the largest value

function largestNumber(num1, num2, num3) {

    let sum = Math.max(num1, num2, num3);
    let words = "the largest value is:  ";

    document.write(words, sum)

}

let num1 = prompt("first number:");
let num2 = prompt("second number:");
let num3 = prompt("third number:");

largestNumber(num1, num2, num3)