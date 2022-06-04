//let user enter a random number
//if user guess the right one, white "good work" or otherwise wr4ite "not matched"



let userValue = parseInt(prompt("Please Provide a random value:"));

let randomNumber = Math.floor((Math.random() * 10) + 1);

if (randomNumber == userValue) {
    document.write('Good Work');
} else {
    document.write('Not matched');
}
