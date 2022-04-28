/**
 * 生成器函数、异步生成器函数和异步普通函数跟普通函数行为是一致的，异步箭头函数与箭头函数行为是一致的
 * 嵌套的箭头函数中的代码都指向外层 this
 * Function.prototype.call 和 Function.prototype.apply 可以指定函数调用时传入的 this 值
 * Function.prototype.bind 它可以生成一个绑定过的函数，这个函数的 this 值固定了参数
 */
/**
 * 普通函数的this
 * 谁调用它，this就指向谁
 */
function normalThis() {
    console.log('我执行了')
    console.log(this)
}
let normalObject = {
    normalThis: normalThis
}
normalThis();
normalObject.normalThis()


/**
 * 箭头函数
 * this指向定义该函数的作用域，【谁定义它，他就指向谁】
 */
const arrowsFunc = () => {
    console.log(this)
}
let arrowsObject = {
    arrowsFunc: arrowsFunc
}
arrowsFunc();
arrowsObject.arrowsFunc();


/**
 * 类方法
 */
class classFunc {
    classFunction () {
        console.log('我是类方法的this', this)
    }
}
const func = new classFunc()
const obj = func.classFunction
obj();
func.classFunction();


var a = 1
foos()

var b = 2
function foos () {
    console.log(b)
console.log(a)

}


/** 
 * 嵌套的箭头函数
 */
var o = {}
o.foo = function foo(){
    console.log('foo',this);
    return () => {
        console.log('return',this);
        return () => console.log('return-return',this);
    }
}
o.foo()()();

/** 
 * bind apply call改变this指向 *
 */
function fooBind(a, b, c){
    console.log(this);
    console.log(a, b, c);
}
fooBind(1,2,4)
fooBind.bind({}, 1, 2, 3)();