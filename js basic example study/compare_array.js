function compareNumbers(numbers) {

    let last = numbers.length - 1

    if (numbers[0] == numbers[last]) {
        document.write(true)
    } else {
        document.write(false)
    }
}

compareNumbers()