function Foo() {
    getName = function() {
        console.log(1);
    };
    return this;
}
Foo.getName = function() {
    console.log(2);
};
Foo.prototype.getName = function() {
    console.log(3);
};
var getName = function() {
    console.log(4);
};

function getName() {
    console.log(5);
}

//请写出以下输出结果：
Foo.getName();      //-> 2    Foo对象上的getName() ，这里不会是3，因为只有Foo的实例对象才会是3，Foo上面是没有3的
getName();          //-> 4    window上的getName，console.log(5)的那个函数提升后，在console.log(4)的那里被重新赋值
Foo().getName();    //-> 1    在Foo函数中，getName是全局的getName，覆盖后输出 1（当前的这个函数在调用的时候才会执行里面的语句）
getName();          //-> 1    window中getName();
new Foo.getName();  //-> 2    Foo后面不带括号而直接 '.'，那么点的优先级会比new的高，所以把 Foo.getName 作为构造函数
new Foo().getName();//-> 3    此时是Foo的实例，原型上会有输出3这个方法

let a = {
    b: function() {
      console.log(this)
    },
    c: () => {
      console.log(this)
    }
  }
  
  a.b()  // b
  a.c()  // window
  
  let d = a.b
  d() //window


  var name1 = 1;

function test() {
    let name1 = 'kin';
    let a = {
        name1: 'jack',
        fn: () => {
        var name1 = 'black'
        console.log(this.name1)       // 看当前外部，有函数，外层的this就是内部的this，没有的话就是window(JS只有全局作用域和函数作用域)
    }
  }
    return a;
}

test().fn() 



var foo = 123;
function print(){
	this.foo = 234;
    console.log(this); // window
	console.log(foo); // 234
}
print();	

/**
 * 开启严格模式后，函数内部this指向undefined，但全局对象window不会受影响
 */
"use strict";
var foo = 123;
function print(){
    console.log('print this is ', this);  // undefined
    console.log(window.foo) // 123
    console.log(this.foo); // 报错 ,没有foo
}
console.log('global this is ', this); // window
print();


let aa = 1;
const b = 2;
var c = 3;
function print() {
    console.log(this.aa); // undefined
    console.log(this.b); // undefined
    console.log(this.c); // 3
}
print();
console.log(this.aa); // undefined


a = 1;
function foo() {
    console.log(this.a); 
}
const obj = {
    a: 10,
    bar() {
        foo(); 
    }
}
obj.bar(); // 1


var ax = 1
function outer () {
  var ax = 2
  function inner () { 
    console.log(this.a)  // 1
  }
  inner()
}
outer()

a = 1;
(function(){
    console.log(this); // window
    console.log(this.a) // 1
}())
function bar() {
    b = 2;
    (function(){
        console.log(this); // window
        console.log(this.b) // 2
    }())
}
bar();

/**
 * 隐式绑定
 * this永远指向最后调用它的那个对象规则
 */
 var ac = 1;
 function foo() {
     console.log(this.ac); 
 }
 // 对象简写，等同于 {a:2, foo: foo}
 var objc = {a: 2, foo}
 foo(); // 1
 obj.fooc(); // 2


 /**
  * 对象链式调用
  */
  var obj1 = {
    a: 1,
    obj2: {
        a: 2,
        foo(){
            console.log(this.a)
        }
    }
}
obj1.obj2.foo() // 2

/**
 * 隐式绑定的丢失
 * 使用另一个变量作为函数别名，之后使用别名执行函数
    将函数作为参数传递时会被隐式赋值
    隐式绑定丢失之后，this的指向会启用默认绑定。
 */
    a = 1
    var objs = {
        a: 2,
        foo() {
            console.log(this.a)
        }
    }
    var foo = objs.foo;
    objs.foo(); // 2
    foo(); // 1

/**
 * 取函数别名
 */

    var ob = { 
        o: 1, 
        foo() {
            console.log(this.o)
        } 
    };
    var o = 2;
    var foo = ob.foo;
    var obj2 = { o: 3, foo: ob.foo }
    ob.foo(); // 1
    foo(); // 2
    obj2.foo(); // 3

    /**
     * 函数作为参数传递
     */
     function foo() {
        console.log(this.ba)
      }
      function doFoo(fn) {
        console.log(this)
        fn()
      }
      var obb = { ba: 1, foo }
      var ba = 2
      doFoo(obb.foo) // window 2

    /**
     * 函数作为参数传递
     */
     function foow() {
        console.log(this.as)
      }
      function doFoos(fn) {
        console.log(this)
        fn()
      }
      var objss = { as: 1, foow }
      var as= 2
      var obj2 = { as: 3, doFoos }
      obj2.doFoos(objss.foow) // 3 obj2




var name='zcxiaobao';
function introduce(){
    console.log('Hello,My name is ', this.name);
}
const Tom = {
    name: 'TOM',
    introduce: function(){
        setTimeout(function(){
            console.log(this)
            console.log('Hello, My name is ',this.name);
        })
    }
}
const Mary = {
    name: 'Mary',
    introduce
}
const Lisa = {
    name: 'Lisa',
    introduce
}
Tom.introduce(); //WINDOW  zcxiaobao
setTimeout(Mary.introduce, 100); // window zcxiaobao
setTimeout(function(){
    Lisa.introduce();// Lisa
},200);