const mymodule = require('./mymodule.js')

const dir = process.argv[2]
const ext = process.argv[3]

mymodule(dir, ext, function(err, data){
	data.forEach(i => {
		console.log(i)
	})
})