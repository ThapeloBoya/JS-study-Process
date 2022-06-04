//ask user for two numbers
//if two number are not within the range ask to try agaim
//if true find the max number

function lessInterger() {
    let count = Math.max(num1, num2)

    if ((num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)) {
        document.write("the largest number is: ", count)
    } else {
        alert("try again with new values:")
    }
}

let num1 = prompt("enter value one:");
let num2 = prompt("enter value two:");

lessInterger()