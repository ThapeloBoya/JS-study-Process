// program to check leap year
function leapYear(year) {

	if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
		document.write(year + ' is a leap year');
	}
	else {
		document.write(year + ' is not a leap year');
	}
}
function isNum(checkYear) {
	return !isNaN(val)
}
let year = prompt('Enter year!');
if (typeof year == 'number') {

}

leapYear(year);