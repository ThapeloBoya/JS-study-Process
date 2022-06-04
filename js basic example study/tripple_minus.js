function number(value) {
    if (value > 19) {
        let triple = (value - 19) * 3;
        document.write(triple);
    } else {
        let sum = 19 - value;
        document.write(sum);
    }
}
let value = prompt("enter value: ");
number(value);
