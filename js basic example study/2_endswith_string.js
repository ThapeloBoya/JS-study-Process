function checkString(str) {
    let length = str.length
    let endsWithString = str.endsWith("String")

    if (length >= 6) {
        document.write(endsWithString)
    }
    else {
        document.write(false)
    }
}
str = "is a String"

checkString(str)