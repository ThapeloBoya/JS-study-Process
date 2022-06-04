function givenNumber(num) {

    if (0 == num % 3 || 0 === num % 7) {
        document.write(true);
    } else {
        document.write(false);
    }
}
let num = prompt("Enter value");

givenNumber(num);