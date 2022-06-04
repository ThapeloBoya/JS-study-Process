const http = require('http')

const server = http.createServer((req, res) => {
    console.log(`connected successfully`)
    //will show this on the website
    res.end(`its all good baby baby`)
})

server.listen(5000, () => {
    console.log(`server is listening`)
})