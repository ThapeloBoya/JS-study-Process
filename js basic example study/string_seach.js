//checks if string has given string
//if true return string without
//if false return original string

function givenString() {
    let str1 = "I a Script currently";
    let str2 = str1.search("Script")

    if (str2 = true) {

        document.write(str1.substr(0, 3).concat(str1.substr(10, 10)))
    }
    else {
        document.write(str1)
    }
}

givenString()