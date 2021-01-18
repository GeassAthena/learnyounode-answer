const http = require('http')
const fs = require('fs')
const map = require('through2-map')

const port = process.argv[2]

const server = http.createServer((req, res) => {
	if(req.method == 'POST'){
		req.pipe(map(chunk => {
			return chunk.toString().toUpperCase()
		})).pipe(res)
	}else{
		console.log(req.method)
	}
})

server.listen(+port)