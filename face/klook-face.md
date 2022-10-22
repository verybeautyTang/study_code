// 平铺数组
let newArray = [];
function getArray(arr) {
  if (arr.length === 0) return arr;
  for(let i = 0; i< arr.length; i++) {
    if(typeof(arr[i]) === 'object') {
      getArray(arr[i])
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// 串形异步循环
const bucket = {
  apple: 3,
  pear: 2,
  peach:1,
  banana: 10,
  kiwi: 8,
  lemeon: 7,
  mango: 5,
}

// 计数一种水果，每个水果需要话1s进行计时，最终输出水果的名称和水果的数量
function countSingleFruits(fruit) {
  return new Promise((resolve) => {
    setTimeout(() =>  resolve(fruit),bucket[fruit] *1000);
  }).then((res)=> {
    console.log(`${bucket[fruit] }秒后`);
    console.log(res)
  })
}

// 第一种代码实现方式：[通过对象转化成数组，再用for of 的方式]
function countAll1() {
  let fruit = Object.keys(bucket)
  for (let f of fruit) {
    countSingleFruits(f);
  }
}

// 第二种代码实现方式：[通过对象转化成数组，直接使用async await]
async function countAll2() {
  let fruit = Object.keys(bucket);
  for(let i  = 0; i < fruit.length; i++) {
    await countSingleFruits(fruit[i]);
  }
}

// countAll2()