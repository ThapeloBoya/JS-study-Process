function vowels(str) {

    let tCount = str.match(/t/g).length
    let pCount = str.match(/p/g).length

    if (tCount == pCount) {
        document.write("equal number of p's and t's")
    }
    else {
        document.write("not equal number of p's and t's")
    }
}

str = "this is a string pep"
vowels(str)