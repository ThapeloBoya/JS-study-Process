const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let day = days[d.getDay()];
let month = months[d.getMonth()];

let time = day + "/" + d.getDate() + "/" + month + "/" + d.getFullYear();
document.write("Current date:", time);