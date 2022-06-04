const {readFileSync, writeFileSync} = require('fs')

//reads content in the files
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first, second)

//creates a new document in the specified folder, if it doesnt exist
//overrides content in the specified folder
writeFileSync('./content/thrid.txt',`third file: ${first}, ${second}`)

//to keep everythinng and add new values add a flag
writeFileSync('./content/thrid.txt',`third file: ${first}, ${second}`,{flag: 'a'})