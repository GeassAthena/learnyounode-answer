const port = process.argv[2]
const net = require('net')
const server = net.createServer(socket => {
	socket.end(formatDate(new Date()))
})

server.listen(port)

function formatDate(date) {
	let month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth()
	let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() 
	let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
	return `${date.getFullYear()}-${month}-${date.getDate()} ${hour}:${min}\n`
}