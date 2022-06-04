function repeatString(str) {
	let length = str.length
	//create a string using the middle three characters
	if (length >= 3) {
		document.write(str.slice(str.length - 3).concat(str.substr(0, str.length / 2)))
	}
	else {
		document.write("string too short")
	}
}
str = "numbe"



repeatString(str)
