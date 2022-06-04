// JavaScript source code
//reads files in the asynchronous way
const { readFile, writeFile } = require('fs')

readFile('./first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

//used to create a file in the specified file
let data = "its all gosssod"
writeFile('./third.txt', data, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
})
console.log(`second text`)
