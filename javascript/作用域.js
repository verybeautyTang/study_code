function bar() {
  var a = 'sss'
  fn = () => {
    console.log(a)
  }
  fn()
}
bar()

/**
 * 变量提升
 */
function upParams () {
  console.log(q)
  var q = 1
}
upParams()

/**
 * 暂时性死区
 */
var foo1 = 'foo1';
function bar1() {
  var foo2 = 'foo2'
  function bar2() {
    var foo3 = 'foo3'
  }
}
console.log(bar1.bar2)


function test( arg1 = arg2, arg2) {
  console.log(arg1, arg2)
}
test(';', 'arg2')

void function () {
  console.log('first')
}()

/**
 *  执行上下文
 */

function upDownWord(arva) {
  let arv;
}
upDownWord('arqqv')

/**
 * js预编译过程
 * 1、变量声明
 * 2、变量提升并赋值undefined
 * 3、非表达式的函数的变量提升
 */
function bar() { // 声明式
  console.log('function')
}
var bar = function () { // 表达式
  console.log('var')
}
bar()