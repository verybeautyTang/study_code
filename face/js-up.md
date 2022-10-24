请回答事件循环的机制event-loop？
  铺垫：
  js如何执行？
    从前向后，一行一行执行，如果报错，停止执行下面的代码
    先把同步的代码执行完，再执行异步
  Q：eventLoop的整个过程
  A：
    1、同步代码，一行一行放入call stack执行
    2、遇到异步，先记录下，等待时机【网络请求、定时等】
    3、call statck为空， eventLoop开始工作
    4、eventLoop轮询查找callbackQueue,如果有就移动到call stack进行执行
    5、继续轮训查找【永动机】
  Q：dom事件和eventLoop的关系？dom事件并不是异步～
  A： 都是基于eventLoop事件，dom事件的触发时机是用户什么时候点击什么时候触发回调。

什么是宏任务和微任务，有什么区别？

 Promise
    pending  加载中
    resolved 加载成功
    rejected 加载失败
  变化不可逆
  pending -> rejected
  pending -> resolved

  
  async-await: async await是使用同步的语法来解决异步问题
  async  await  是解决异步调用的终极武器，跟promise并不是互斥的，甚至是相辅相成的


Q：async与promise的关系？
A：
  1、执行async函数，返回的是Promise对象
  2、await相当于调用promse.then
  3、async await使用try、catch去捕获错误，相当于promise使用catch捕获错误一致

await后面的内容都是作为callback的一个形式

for... of 是常用一个异步的循环，一个一个返回。不是跟for、for... in 这样同步全部返回


初始化promise的时候，传入的函数会立即执行