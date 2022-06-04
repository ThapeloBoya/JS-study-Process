function newLos(str1, str2) {

    let strOne = str1.startsWith("los");
    let strTwo = str2.startsWith("new")
    if (strOne == true || strTwo == true) {
        document.write(str1, " : ", str2)

    }
    else {
        document.write("blank")
    }
}
str1 = "los angel"
str2 = "new yolk"

newLos(str1, str2)