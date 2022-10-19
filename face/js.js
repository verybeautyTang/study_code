
// 例子1
function WeakMaps() {
  let vMap = new WeakMap();
  vMap.set({}, 2)
  function getMaps () {
    const obj = {x: 1000};
    vMap.set(obj, 1)
  }
  getMaps();
  console.log(vMap) // obj被垃圾回收了 WeakMap、 WeakSet都是弱类型，所以打印不出来东西
}
WeakMaps()

function MapTest() {
  let map = new Map();
  function getMaps () {
    const obj = {x: 1000};
    map.set('2', obj)
  }
  getMaps();
  console.log(map)
}
MapTest()


//  例子2 
// 深拷贝源码
 function DeepClone(obj ={}) { 
  // 不是引用类型不需要深拷贝
  if(typeof obj !== 'object' || obj === null) return obj;
  let result ;
  // 根据obj来获取result的类型
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for(let  key in obj) {
    // 保证key不是原型上的对象
    if(obj.hasOwnProperty(key)) {
      // 完成深拷贝【递归】
      result[key] = DeepClone(obj[key])
    }
  }

   return result;
 }
 class People {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
  sayHi () {
    console.log(`name is ${this.name} and number is ${this.number}`);
  }
 }
 // 通过类声明实例/对象
 const hsy = new People ('jasmine', 1111);
 hsy.sayHi()


class Student extends People { 
  constructor(name, number) {
    super(name, number);
  }
  sayHello () {
    console.log(`name is ${this.name} and number is ${this.number}`);
  }
}

// 手写一个jQuery[考虑拆插件和拓展性]
class jQueryForge {
  constructor (selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
     this[i] =  result[i];
    }
    this.length = length;
  }
  get (index) {
    return this(index);
  }
  each (fn) {
    for(let i = 0; i< this.length; i++) {
      const item = this[i];
      fn(item)
    }
  }
  on (type, fn) {
    return this.each((item) => {
      item.addEventListener(type, fn, false);
    })
  }
}

// 插件

jQueryForge.prototype.create = function (options) {
  alert('create', options)
}

// 拓展
class MyQuery extends jQueryForge {
  constructor (options) {
    super(options)
  }
}

// 闭包的应用[隐藏数据，比如做一个小小的缓存]

function createCache() { 
  const data = {};
  return {
    set: function (key, value) {
      data[key] = value;
    },
    get: function (key) {
      return data[key]
    }
  }
}
const c = createCache();
c.set('foo', 'bar');
console.log(c.get('foo'));

// 写一个通用函数传入数组arr返回下列格式, 
// [
//   {
//       "row": 3,
//       "col": 32,
//       "formule": "IFERROR(V5:V5/F5:F5,\"\")"
//   },
//   {
//       "row": 3,
//       "col": 34,
//       "formule": "IFERROR(AH5:AH5/L5:L5,\"\")"
//   },
//   {
//       "row": 4,
//       "col": 3,
//       "formule": "SUM(E5:E5+F5:F5+G5:G5+H5:H5+I5:I5+J5:J5+K5:K5+L5:L5+M5:M5+N5:N5+O5:O5+P5:P5)"
//   }
// ]

function getFormual (arr) {
  if(!arr.length) return false;
  let data = []
  for(let i = 0; i< arr.length; i++) {
    let temp = arr[i].formule;
    if(temp.indexOf('SUM') >= 0) {
      let new_for = temp.replace('SUM(', '').replace(')','').split('+');
      let new_fors = ''
      for(let j = 0; j < new_for.length; j++) {
        new_fors += new_for[j]+ ':' + new_for[j]
        if(j !== new_for.length - 1) new_fors += '+';
        }
      data.push({
        row: arr[i].row,
        col: arr[i].col,
        formule: `SUM(${new_fors})`
      })
    }
    else if(temp.indexOf('IFERROR') >=0) {
      let new_for = temp.replace('IFERROR(', '').replace(')','').replace('\"\"','').split('+');
      let new_fors = ''
      for(let j = 0; j < new_for.length; j++) {
        new_fors += new_for[j]+ ':' + new_for[j]
        if(j !== new_for.length - 1) new_fors += '/';
        }
      data.push({
        row: arr[i].row,
        col: arr[i].col,
        formule: `IFERROR(${new_fors},\"\")`
      })
      return await;
      
    }
  }
  return data;
}

let arrs = [
  {
    "row": 3,
    "col": 32,
    "formule": "IFERROR(V5/F5,\"\")"
  },
  {
    "row": 3,
    "col": 34,
    "formule": "IFERROR(AH5/L5,\"\")"
  },
  {
    "row": 4,
    "col": 3,
    "formule": "SUM(E5+F5+G5+H5+I5+J5+K5+L5+M5+N5+O5+P5)"
  }
]
console.log(getFormual(arrs))