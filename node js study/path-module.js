const path = require('path')

console.log(path.sep)

//fnd the whole path
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//find the base file, the first file 
const base = path.basename(filePath)
console.log(base)

//find path from directory name leading to the base file
const absolute = path.resolve(__dirname,'/content','subfolder','test.txt')
console.log(absolute)