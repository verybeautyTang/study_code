let foo = 1
const data = (foo) => {
  foo =123
  console.log(foo)
}
data(foo)
console.log(foo)
console.log('1111111111111')

let temp = {bar : 1}
const tempFunc = (temp) => {
  temp.bar = 2
  console.log(temp)
}
tempFunc(temp)
console.log(temp)
console.log("ð ~ file: jså½æ°åæ°ä¼ é.js ~ line 17 ~ temp", temp)


let tempData = {bar: 2}
const tempFunction = (obj) => {
  obj = 2;
  console.log(obj)
}
tempFunction(tempData)
console.log("ð ~ file: jså½æ°åæ°ä¼ é.js ~ line 26 ~ tempData", tempData)