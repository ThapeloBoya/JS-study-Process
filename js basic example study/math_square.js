let x = 5;
let y = 6;
let z = 7;

let perimeter = (x + y + z) / 2;
var area = Math.sqrt(perimeter * ((perimeter - x) * (perimeter - y) * (perimeter - z)));

document.write(area);