//creates a website
const http = require('http')

const server = http.createServer((req, res)=>{
	if(req.url === '/'){
		res.end('welcome to the home page')
	}
	if(req.url === '/about'){
		res.end('skobadobolidoo')
	}
	res.end(`<h1>oppsi daiay</h1>`

		)
}
)

server.listen(5000)