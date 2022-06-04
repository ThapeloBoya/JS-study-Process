//create a function
//ask user for prompt
//if prompt is higher than 13 then double the difference

function double(number) {



    if (number > 13) {
        let difference = (number - 13) * 2;
        document.write(difference);
    }
    else {
        let less = 13 - number;
        document.write(less);
    }
}
let number = prompt('enter a number');

double(number);