const names = require('./module1')
const sayHi = require('./module2')
const data = require('./alternative-module')
require('./module3')

console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)