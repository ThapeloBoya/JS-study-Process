const _ = require('lodash')
//will place array in single like, in order
const items = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(items)
console.log(newItems)