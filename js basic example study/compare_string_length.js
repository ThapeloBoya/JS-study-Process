function twoStrings(str1, str2) {
    let strOne = str1.length
    let strTwo = str2.length

    // concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string

    if (strOne > strTwo) {
        document.write(str1.substr(0, str2.length).concat(str2))
    } else if (strOne < strTwo) {
        document.write(str2.substr(0, str1.length).concat(str1))
    } else {
        document.write(str1.concat(str2))
    }
}

str1 = "loved"
str2 = "hateme"

twoStrings(str1, str2)
