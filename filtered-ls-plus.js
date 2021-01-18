const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const ext = '.' + process.argv[3]
loop(dir)
function loop(dir){
	let list = fs.readdirSync(dir)
	list.forEach(file => {
			if(fs.lstatSync(path.join(dir, file)).isDirectory()) {
				loop(path.join(dir, file))
			}else{
				if(path.extname(file) === (ext)) {
					console.log(file)
				}
			}
	})
}
