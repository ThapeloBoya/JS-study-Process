//display current date

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
document.write("Today is:", day, "<br>");

let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
document.write("Current time is:", time);