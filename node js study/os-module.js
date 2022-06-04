const os  = require('os')

//info about current user
const user = os.userInfo()

console.log(user)

//method returns system uptime in seconds
console.log(`the system uptime is ${os.uptime} sec`)

const curOS = {
	name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(curOS)