// 例子1 
function ActionScope1 () {
  let  a = 'action-scope';
  console.log(a); 
}
ActionScope1(); // action-scope 函数块级作用域

var b = 'action-scope2'
function ActionScope2() {
  console.log(b);
}
ActionScope2(); // action-scope2 全局作用域

function ActionScope () {
  var scope = 'can i print out?'
}
function ActionScope3() {
console.log(scope);
}
// ActionScope3(); // ReferenceError: scope is not defined


// 变量提升
function VariableAscension () {
  console.log(obj);
  var obj = {} // 如果把var变成let或者const 那么就会报错，Uncaught ReferenceError: obj is not defined
  // 使用let、const会针对这个变量形成一个封闭的块级作用域，如果在变量声明前使用则会报错。
}
VariableAscension() // undefined 由于var会变量提升，所以会先执行obj = undefined


function TDZ () {
  console.log('2222');
  console.log('wihf');
  let i =  0;
  console.log(i)
}
TDZ() // 在函数作用域中ES6的变量声明情况下，32、33这两行叫做暂时性死区【规范】。在规范里面，从花括号开始到变量声明那一行为止前面的都叫死区，如果在死区内获取变量，就会报错

// 暂时性死区的另一个特殊情况【函数参数的默认数据设置】

function funcTDZ (val1 = val2, val2) {
  console.log(val1, val2);
}
// funcTDZ(undefined,'ssss') // ReferenceError: Cannot access 'val2' before initialization
// val2被当成了暂时性死区【因为undefined相当于没有传递。于是就把val1 = 'ssss'， val2并没有声明定义，所以报错。
funcTDZ(null,'ssss') //  null ssss

// 问题 为什么undefined会出现这个问题，但是null不会出现这个问题？


function Extend (obj) {
  // let obj // 这里是我注释了的
}
Extend('obj') // 报错SyntaxError: Identifier 'obj' has already been declared


// 例子2
function Example2 () {
  function bar1 () {
    console.log('function');
  }
  var bar1 = function () {
    console.log('const')
  }
  bar1() // const

  var bar2= function () {
    console.log('const')
  }
 
  function bar2 () {
    console.log('function');
  }

  bar2() // const 

  // 原因：因为function类型的bar在预编译阶段被变量提升了，但是表达式的bar并没有，所以在执行的时候从上往下执行，所有都是输出const

  foo(10);
  function foo (num) {
    console.log(foo); // undefined
    foo = num;
    console.log(foo); // 10
    var foo;
  }
  console.log(foo); // function foo
  foo = 1;
  console.log(foo); // 1
}


// Example2()

//例子3
function Example3() {
  // 闭包
  function newClosure() {
    let num = 1;
    num ++; // num是闭包对象
    return () => {
      console.log('example3', num)
    }
  }
  
    let news = new newClosure();
    news();
    
    // 内存泄漏
    function MemoryLakeage1() {
      let element = document.createElement('div');
      element.innerHTML = 'action-scope';
      function removeEle () { // 移除节点 
      element.parentNode.removeChild(element); // 这里只是把div节点移除了，但是并没有把elemnt变量移除。 导致的内存泄漏，应该加上element = null；
      }
    }

    // 

}
Example3();