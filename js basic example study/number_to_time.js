function getTime(num) {
    //math.floor takes result to nearest digit
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    document.write("the time is ", hours, ":", minutes);
}
num = parseInt(prompt("enter number:"))

getTime(num)