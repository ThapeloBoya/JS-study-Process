//add module constant in curly brackets 
const { readFileSync, writeFileSync } = require('fs')

//create const and parse the document using the path
const data = readFileSync('./first.txt', 'utf8')

console.log(data)

writeFileSync('./third.txt', `im the last:`, { flag: 'a' })

// JavaScript source code

console.log('i am the second text')
