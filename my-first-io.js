const filepath = process.argv[2]
const fs = require('fs')
const file = fs.readFileSync(filepath)
const str = file.toString()
console.log(str.split('\n').length - 1)