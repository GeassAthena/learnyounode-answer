const filepath = process.argv[2]
const fs = require('fs')
fs.readFile(filepath, (err, data) => {
	if(err){
		console.log(err)
	}else{
		console.log(data.toString().split('\n').length - 1)
	}
})