const { readFile } = require('fs')

//will run 1st
console.log(`i come first`)

//will run last
readFile('./file-system/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

//will run 2nd
console.log('i am the last text')