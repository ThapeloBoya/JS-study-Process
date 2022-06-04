const EventEmitter = require('events')

const emitter = new EventEmitter

//second step, callback function
emitter.on('response', (name, age) => {
    console.log(`data logged for ${name} aged:${age}`)
})

//second step, raise an event
emitter.emit('response', 'hugo', 87)