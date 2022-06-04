
function showLeftDays() {
    var now = new Date();
    var thisYear = now.getFullYear();
    var Xmas = "December 25, " + thisYear;
    var nextXmas = new Date(Xmas);

    // Number of milliseconds per day
    var msPerDay = 24 * 60 * 60 * 1000;
    var daysLeft = (nextXmas.getTime() - now.getTime()) / msPerDay;
    daysLeft = Math.round(daysLeft);
    alert("Number of Shopping Days until Christmas: "
        + daysLeft);
}

showLeftDays()