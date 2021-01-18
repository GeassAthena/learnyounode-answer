module.exports = function (dir, ext, callback) {
	const fs = require('fs')
	const path = require('path')
	fs.readdir(dir, (err, list) => {
		if(err){
			callback(err)
		}else{
			callback(null, list.filter(file => {
				return path.extname(file) === ('.' + ext)
			}))
		}
	})
}