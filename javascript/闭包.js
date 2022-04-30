/**
 * 简单闭包
 * 闭包的定义：函数嵌套函数时候，内部函数引用了外部函数的变量，并且全局作用域下可以访问到内部函数，导致了闭包的形成
 * 闭包的原理：外层函数返回的函数里面使用了外层函数的变量，外界可以通过返回的函数得到原来外部函数的变量值
 */
function foo() {
  let i = 10;
  return () => {
    console.log(i)
  }
}
const f = foo();
f()

/**
 * 内存泄漏：指内存空间明明已经不被使用了但是还是没有被释放的情况
 */
// var element = document.getElementById('root')

function foos() {
  let value = 122;
  function bar() {
    console.log(value)
  }
  bar()
}
foos()


var arr = [];
function createNode() {
  let div;
  let i = 100;
  let frag = document.createDocumentFragment();
  for(; i > 0; i--) {
    div = document.createElement('div');
    div.appendChild(document.createTextNode(i));
    div.innerHTML = i
    frag.appendChild(div)
  }
}
function badCode() {
  arr.push([...Array(10000).keys()]);
  createNode();
  setTimeout(() => {
    badCode()
  }, 1000);
}

badCode();

/**
 * 闭包实战
 */
const fooAdd = (function () {
  var v = 0;
  return () => {
    return v++ ;
  }
}())

for(let i = 0; i< 10; i++) {
  fooAdd()
}
console.log(fooAdd())


const fooTwo =  () => {
  var arr = [];
  var i;
  for(i = 0; i < 10; i++) {
    arr[i] =function () {
      console.log(i)
    }
  }
  return arr[0]
}
fooTwo()()


var fn = null
const foo3 = () => {
  var a = 2
  function inner() {
    console.log(a)
  }
  fn = inner
}
const bar =  () => {
  fn()
}
foo3()
bar()




var fn2 = null
var c = 100
const foo4 = () => {
  var a = 2
  function inner() {
    console.log(a)
    console.log(c)
  }
  fn = inner
}
const bar2 =  () => {

  fn()
}
foo4()
bar()

