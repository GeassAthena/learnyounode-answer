let argvs = process.argv.slice(2)

const reducer = (acc, cur) => Number(cur) + Number(acc) 
let res = argvs.reduce(reducer)
console.log(res)