const http = require('http')
const url = require('url')
const port = process.argv[2]

let parseUnix = function (date){
	return {
		"unixtime": date.getTime()
	}
}
let parseDate = function (date) {
	return {
		"hour": date.getHours(),
		"minute": date.getMinutes(),
		"second": date.getSeconds()
	}
}
let handleRoute = function (url) {
	let date = new Date(url.query.iso)
	if(cur_url.pathname == '/api/parsetime'){
		return parseDate(date)
	}else if(cur_url.pathname == '/api/unixtime'){
		return parseUnix(date)
	}
}
const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify(handleRoute(url.parse(req.url, true))))
})

server.listen(+port)