// [1, 2, 3].map(parseInt)输出什么？
// parseInt(string:字符串, radix: 进制) => 返回一个10进制的数据

// 简单一点写这样的 

const arr = [1,2,3] 
const res = arr.map((item, index) => {

  // parseInt(1,0) // 0代表默认10进制，除非字符串是0x开头的，那么默认是16进制
  // parseInt(2,1) // 1进制里面没有2
  // parseInt(3,2) // 二进制里面没有3
  return parseInt(item, index)
}) 
console.log(res) // [1,NAN, NAN]


// 考点： 赋值传递[eslint建议函数的参数不要修改，当作常量]
function changeArg (x) { x = 200};
let num = 100;
changeArg(num);
console.log('changeArg num', num); // 100 


let obj ={ name: 'hsy'}
changeArg(obj);
console.log('changeArg obj', obj)  // obj：{name:'hsy'}


// 手写一个convert函数，将数组转化为树

// 思路 1、 遍历数组 2、 