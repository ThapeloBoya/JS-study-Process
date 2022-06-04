//prompt to add two values
//values are the same then tripple the 

function sum(num1, num2) {

    if (num1 == num2) {
        let triple = (num1 * 3) + (num2 * 3);
        document.write("The answer is " + triple);
    } else {
        let sum = (num1 * 1) + (num2 * 1);
        document.write("The answer is " + sum);
    }


}
let num1 = prompt("Add 1st number");
let num2 = prompt("Add 2nd number");

sum(num1, num2);
