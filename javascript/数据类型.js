const a = 1
const b = 'hello'
const c = undefined
const d = null
const e = []
const f = {}
const g = () => {
  return 0;
}
const h = Symbol('')


/**
 * typeof判断数据类型
 */
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);
console.log(h , typeof h);


console.log('instanceof判断数据类型', new Number(a) instanceof Number);
console.log('instanceof判断数据类型', b instanceof String);
// console.log('instanceof判断数据类型', c instanceof undefined);
// console.log('instanceof判断数据类型', d instanceof Null); 
console.log('instanceof判断数据类型', e instanceof Array);
console.log('instanceof判断数据类型', f instanceof Object);
console.log('instanceof判断数据类型', g instanceof Function);
console.log('instanceof判断数据类型', h instanceof Symbol);


/**模拟instanceof */
const instanceOf = (left, right) => {
  if (typeof left !== 'object') {
    return false;
  }
  while (true) {
    /** 判断是否到了顶部或者直接是null的情况 */
    if (left === null) {
      return false;
    }
    if(right.prototype === left.__proto__) {
      return true;
    }
    left = left.__proto__;
  }
}

console.log('hhhh', instanceOf(new Number(a), Number));
function Person() {
  this.name = '';
}
const p  = new Person();
console.log('Person',instanceOf(p, Person));
/**
 * Object.prototype.toString.call()
 */

console.log('Object.prototype.toString.call')
console.log(Object.prototype.toString.call(a));
console.log(Object.prototype.toString.call(b));
console.log(Object.prototype.toString.call(c));
console.log(Object.prototype.toString.call(d));
console.log(Object.prototype.toString.call(e));
console.log(Object.prototype.toString.call(f));
console.log(Object.prototype.toString.call(g));
console.log(Object.prototype.toString.call(h));
