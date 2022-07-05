const a = {
  name: '222',
  other: {
    hobby: ['dance', 'sing', 'fish']
  }
}

Object.freeze(a)

a.name = 'ssss'
a.other.hobby = ['我是改编后的冻结的数据']

console.log(a.other)

// freeze是浅冻结，需要深度遍历进入深冻结阶段


const deepFreeze = (obj) => {
  if(typeof obj === 'object') {
    
  }
}