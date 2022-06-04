function myFunction() {
    const numbers = [1, 9, 1, 1];

    let last = numbers.length - 1;

    if (1 == numbers[0] && 1 == numbers[last]) {
        document.write("1 appears at the end and start")
    } else if (1 == numbers[last]) {
        document.write("1 appears at the end")
    } else if (1 == numbers[0]) {
        document.write("1 appears at the end and start")
    } else {
        document.write(false)
    }
}

myFunction()
