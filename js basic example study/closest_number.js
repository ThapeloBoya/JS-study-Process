//ask user for two values 
// minus values from 100
//number with closest wins

//failed to do if num1 == num2

function closestNumber() {
    let sum1 = 100 - num1;
    let sum2 = 100 - num2;


    if (sum1 <= sum2) {
        document.write("the closest number to 100 is: ", num1)
    }
    else {
        document.write("the closest number to 100 is: ", num2)
    }

}
//let num1 = prompt("first value");
//let num2 = prompt("second value");


closestNumber()