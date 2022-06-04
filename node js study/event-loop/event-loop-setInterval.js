//will run 1st
console.log(__dirname)

//will run last
setInterval(() => {
console.log(`second`)
}, 2000)

//will run 2nd
console.log(`last`)