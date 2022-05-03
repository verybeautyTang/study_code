/** 把while打开会进入死循环,并且不会输出任何log */
setTimeout(() => {
  console.log('setTimeOut')
}, 1000);
// while(true) {

// }
console.log('first')


/**
 * 其他
 */
setTimeout(() => {
  while (true) {
    
  }
}, 100);
console.log('second')


/**  其他*/

const t1 = new Date()

setTimeout(() => {
  const t3 = new Date()
  console.log('setTimeout src', t3 - t1)
}, 100);

const t2 = new Date
while (t2 - t1 < 200) {
  t2 = new Date()
  
}
console.log('window Date')