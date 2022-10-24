//  实例1
function Promise1() {
  const p1 = new Promise((resolve) => {
    resolve()
  }).then((res) => {
  })
  console.log(p1)
}
Promise1()

Promise.resolve().then(() => {
  console.log(1)
  throw new Error('Promise') // 执行catch
}).catch(()=> {
  console.log(2) // 执行resolve
}).then(() => {
  console.log(3)
})

Promise.resolve().then(() => {
  console.log(1111);
  throw new Error('Error')
}).catch(()=> {
  console.log(1112)
}).catch(() => {
  console.log(2223)
})


// 

function muti (mun) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mun * mun)
    }, 1000)
  })
}

const nums = [1, 2, 3];
// 同步执行【全部执行完后一起返回】
nums.forEach(async(i) => {
  const res =await muti(i);
  console.log(res);
})




async function  async1 () {
  console.log('async1 strat');
  await async2()
  console.log('async1 end');
}

async function  async2 () {
  console.log('async2');
}

console.log('scrpt started')

async1();
setTimeout(() => {
  console.log('setTimeout');
}, 0)
new Promise((resolve, reject) => {
  console.log('promises started')
  resolve()
}).then(() =>{
  console.log('qqq')
})

console.log('scrpt end')