//ask for two input
//check whether one is positive and ther other isnt

function integer(num1, num2) {
    if (num1 < 0 && num2 > 0) {
        document.write('The negative number is ' + num1);
    }
    else if (num1 > 0 && num2 < 0) {
        document.write('the positive number is ' + num1);
    }
    else if (num1 < 0 && num2 < 0) {
        document.write('both numbers are negative');
    }
    else {
        document.write('both numbers are positive');
    }
}

let num1 = prompt("Enter number");
let num2 = prompt("Second number");
integer(num1, num2)
