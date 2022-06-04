//let user enter a random number
//if user guess the right one, white "good work" or otherwise wr4ite "not matched"
//if user enters any other value but a number, prompt again


function getInterger(promptMessage) {
    let gotCorrectValue = false;
    let input = '';

    while (gotCorrectValue == false) {
        input = prompt(promptMessage);
        if (isNaN(input)) {
            alert('Invalid input. Expecting number.');
        }
        else {
            gotCorrectValue = true;
        }
    }



}


function makeGuess(randomNumber) {
    alert(randomNumber);
    for (let i = 1; i <= 3; i++) {
        let userValue = getInterger("Please provide max value: ");

        if (randomNumber == userValue) {
            document.write('Good Work. the number is ' + randomNumber);
            isMatch = true;
        } else {
            alert('Not matched. Try again.');
        }
    }
}


let randomNumber = Math.floor((Math.random() * 10) + 1);
makeGuess(randomNumber);
