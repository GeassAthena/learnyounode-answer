const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const filepath = process.argv[3]

const server = http.createServer((req, res) => {
	fs.createReadStream(filepath).pipe(res)
})

server.listen(+port)