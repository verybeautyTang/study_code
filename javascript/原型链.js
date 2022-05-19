function Person(name){     // 1
  this.name = name;
}

Person.prototype.sayName = function(welcome) {     // 5
console.log(welcome, this.name);
}

var person1 = new Person('Smiley');     // 9
person1.sayName('Hello');         


/**
 * 在数组原型链上实现删除数组重复数据的方法
 */

function ProtoTypeDeleteSameData(data) {
  this.data = data
}
ProtoTypeDeleteSameData.prototype.filterSameData = function () {
  const newData = [];
  new Set(this.data).forEach((i) => {
    newData.push(i)
  });

  return newData
}

const data = new ProtoTypeDeleteSameData([1,2,3,4,6,7,8,1,2,3,6,7,5])
console.log(data.filterSameData())

/**
 * js原型链，原型链的顶端是什么？
 * null
 */


/**
 * Object的原型是什么？
 */

console.log(Object.prototype)

/**
 * Object的原型的原型是什么？
 */
console.log(Object.prototype)

/** 手写一个instanceof */

function MyInstanceOf (left, right) {
  /** 先决条件：instanceof只能解析类型为引用类型的数据， 
   * 因为instanceof是基于原型链实现的，
   * 且如果不是引用类型，没有必要用instanceof 直接用typeof就可以了 */
  if (typeof left !== 'object' || left == null) {
      return false
  }
  let _prop = left.__proto__
  while (_prop !== null)
  {
    if (_prop === right.prototype) {
      return true
    } else {
      _prop = _prop.__proto__
    };
  }
  return false
}

console.log(MyInstanceOf([], Object))