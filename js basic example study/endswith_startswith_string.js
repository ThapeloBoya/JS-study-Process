function givenString(str1) {

    let len = str1.length
    let ends = str1.endsWith("p")
    let starts = str1.startsWith("p")

    if (starts == true || ends == true) {
        document.write(str1.substr(1, len - 2))
    } else {
        document.write(str1)
    }
}
str1 = "peeeeep"

givenString(str1)