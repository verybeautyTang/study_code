/**
 * 
 * promise特性
 *  1、具有凝固性
 *  2、then方法第二个参数可以错误处理
 *  3、可以有多个then方法
 */
function MyPromise(executor) {
  this.status = 'pending';
  this.value = null;
  this.reason = null;
  /** 异步调用第一步 */
  this.onResolvedFunc = [];
  this.onRejectedFunc = [];
  /** 如果不用箭头函数，就要把this进行保存，因为要用this拿到Promise的实例化 */
  const onResolve = (value) => {
    /** 执行顺序 */
    if (value instanceof MyPromise) {
      return value.then(onResolve, onReject);
    }
    setTimeout(() => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onResolvedFunc.forEach((func) => {
          func(value);
        });
      } 
    });
  }
  const onReject = (reason) => {
  setTimeout(() => {
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.reason = reason;
      this.onRejectedFunc.forEach((func) => {
        func(reason);
      });
    }
  })
  }
  try {
    executor(onResolve, onReject);
  } catch (error) {
    onReject(error);
  }
}
/**
 * 
 * @param {返回的promise实例} promise 
 * @param {函数执行后的返回值 reject或者resolve} result 
 * @param {promise实例的resolve方法} resolve 
 * @param {promise实例的reject方法} reject 
 */
const resolvePromise = (promise, result, resolve, reject) => {

}
  /** then方法放在Promise的实例对象上是因为通过原型调用会更节省时间和内存 */
  MyPromise.prototype.then = function(resolve, reject) {
    resolve = typeof resolve === 'function' ? resolve : data => data;
    reject = typeof reject === 'function' ? reject : error => {throw error};
    /** 链式调用声明并返回 */
    let promiselink;
    if (this.status === 'fulfilled') {
      return promiselink = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            let result = resolve(this.value);
            resolvePromise(promiselink, result, resolve, reject);
          }
          catch (error) {
            reject(error);
          } 
        });
      })
    } else if (this.status === 'rejected') { 
      return promiselink = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            let result = resolve(this.reason);
            resolvePromise(promiselink, result, resolve, reject);
          }
          catch (error) {
            reject(error);
          } 
        });
      })
    } else {
      return promiselink = new MyPromise((resolve, reject) => {
        this.onResolvedFunc.push(() => {
          try {
            let result = resolve(this.value);
            resolvePromise(promiselink, result, resolve, reject);
          }
          catch (error) {
            reject(error);
          }
        });
        this.onRejectedFunc.push(() => {
          try {
            let result = resolve(this.reason);
            resolvePromise(promiselink, result, resolve, reject);
          }
          catch (error) {
            reject(error);
          }
        });
      })
    }
  }

  /**实现 */


  let promise = new MyPromise((resolve, reject) => {
    resolve();
  })
  promise.then((data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promise2 then data');
      }, 4000);
      })
  }).then((data) => {
    console.log(data);
  })

let promiseq = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1');
  }, 1000);
})
// promiseq.then((data) => {
//   console.log(data)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('promise2 then data');
//     }, 4000);
//     })
// }).then((data) => {
//   console.log(data);
// })