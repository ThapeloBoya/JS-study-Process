const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json([{ name: 'ken' }, {name:'sara lee'}])
})

app.listen(5000, () => {
    console.log('server is currently listening...')
})