function difference(num) {


    if (num <= 40 || num >= 10000) {
        document.write(false)
    } else if (num >= 40 && num <= 10000) {
        document.write(true)
    } else {
        document.write(false)
    }
}

num = parseInt(prompt("value 1:"));

difference(num)
