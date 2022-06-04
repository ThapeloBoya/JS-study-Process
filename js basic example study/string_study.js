let str1 = "i am confused"
let str2 = "i do not know how to react"

//charAt() - return character at specified position
document.write(str1.charAt(5));

//charCodeAt - return unicode of specified character
document.write(str1.charCodeAt(5));

//concat - joins two or more strings and returns new one
document.write(str1.concat(str2))

//endswith - checks if a string ends with specified value
document.write(str1.endsWith("ed "))

//fromCharCode - convert unicode to character
document.write(String.fromCharCode(99))

//includes check if string contains specified character
document.write(str1.includes("am"))

//indexof returns the value of the first occurance of the specified value
document.write(str1.indexOf("am"))

//lastIndexOf -returns last occurance of string
document.write(str1.charAt("ed"))

//match - search string and return all the matches
document.write(str2.match(/ow/g))

//repeat return new string with specified number of copies of an existing string
document.write(str1.repeat(5))

//replace serach a string and returns a new string with new specifioed value
document.write(str1.replace(/am/g, "WAS"))

//search, search string and return position of the match
document.write(str1.search("am"))

//slice extract specified part of a string and return a new string
document.write(str1.slice(2, 4))

//split, split string into an array of substrings, you can split splaces
document.write(str1.split(" "))

//startsWith, check if string starts with specified value
document.write(str1.startsWith(0))

//substr cuts string  from specified value, second param indicates how many characters to take
document.write(str1.substr(2, 4))

//substring,
document.write(str1.substring(2, 3))

//tolowercase, convertts string to lowercase
document.write(str1.toLowerCase())

//toUpppercase, convertts string to uppercase
document.write(str1.toUpperCase())

//trim remove white space from either side of string
//tolowercase, convertts string to lowercase
document.write(str1.trim())