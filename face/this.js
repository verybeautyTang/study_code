// 例子1
// 实例一
function fn1 () {
  console.log(this);
};
function fn2 () {
  'use strict';
  console.log(this)
}

fn1(); // window
fn2(); // undefined


// 实例二
const test = {
  name: 'bob',
  setName: function () {
    console.log(this)
  }
}
let t = test.setName;
t(); // window
// t()的this仍然是指向window，因为t()是在全局环境下执行的


// 实例三
const test2 = {
  name:'miro',
  getName: function() { 
    console.log(this)
  }
}
test2.getName() // 这里的this指向test2，

// 例子2
const person = {
  name: 'John',
  brother: {
    name:'Mike',
    fn: function () {
      return this.name
    }
  }
}
console.log(person.brother.fn()) // Mike


const o1 = {
  text: 'o1',
  fn: function () {
    return this.text;
  }
}
const o2 = {
  text: 'o2',
  fn: function () {
    return o1.fn();
  }
}

const o3 = {
  test: 'o3',
  fn: function () {
    var fn = o1.fn;
    return fn();
  }
}

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1
console.log(o3.fn()); // undefined


// 例子3
// new 的构造过程
function News() {

}
let obj = {};
obj.__proto__ =  News.prototype;
News.call(obj)
// 这里需要注意，如果在构造函数中出现了显式的return的情况，有两种情况需要考虑


// 场景1
function Scenc1 () {
  this.name = "scenc1";
  const org = {}
  return org;
}
const instance = new Scenc1();
console.log(instance.name) // undefined，因为此时instance返回的数据是一个空对象

// 场景2 
function Scenc2 () {
  this.name = "Scenc2";
  return 1;
}
const instance2 = new Scenc2();
console.log(instance2.name); // Scenc2

// 例子4
const this_foo = {
  fn: function () {
    setTimeout(function () {
      console.log(this);
    })
  }
}
console.log(this_foo.fn) // window

function this_foo1 () {
  fn:  () =>{
    setTimeout(() => {
      console.log(this);
    })
  }
}
console.log(this_foo1.fn) // this_foo1


// 例子4
// 优先级调用1
function fn (a) {
  console.log(this.a)
}

const priority1 = {
  a : 1,
  fn: fn,
}

const priority2= {
  a: 2,
  fn: fn,
}

priority1.fn.call(priority2) // 2
priority1.fn.apply(priority1) // 1

// 证明call、apply的显式绑定一般来说优先级更高

// 优先级调用2
function fn2 (a) {
  this.a = a
}
const priority3 = {}

let p =  fn2.bind(priority3);
p(2)
console.log(priority3.a) // 2

let news = new p(3);
console.log(news.a) // 3 原因：p本身是bind改变了this的指向为priority3，但是它作为构造函数被new调用的时候，返回的实例已经与priority3解绑了，new绑定改变了bind绑定中的this指向。
// new的优先级比bind的优先级更高

//优先级3
function p2 () {
  return a => {
    console.log(this.a)
  }
}
let obj3 ={
  a: 2
}
let obj4 = {
  a: 3
}
let bars = p2.call(obj3);
console.log(bars.call(obj4)); // 2

//箭头函数的绑定无法修改


// 优先级4
var a = 123;
const p3 = () => a => console.log(this.a)
bars = p3.call(obj3);
console.log(bars.call(obj4)); // 123