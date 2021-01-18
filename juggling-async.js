const http = require('http')

function asyncGet(url) {
	return new Promise((resolve, reject) => {
		http.get(url, res => {
			res.setEncoding = 'utf8'
			let data = ''
			res.on('data', chunk => data += chunk)
			res.on('end', () => resolve(data))
			res.on('err', err => reject(err))
		})
	})
}

Promise.all([
	asyncGet(process.argv[2]),
	asyncGet(process.argv[3]),
	asyncGet(process.argv[4])
]).then(vals => {
	vals.forEach(val => console.log(val))
}).catch(err => {
	console.log(err)
})