//create a string 
//slkice it
//return sliced string

function newString(str1) {

    if (str1.length <= 1) {
        return str1;
    }
    mid_char = str1.substring(1, str1.length - 1);
    return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);

}

newString(str1);