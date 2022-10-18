// 代码1
function Expample1 () {

  // intanceof 源码
  const frogeIntanceOf = (L, R) => {
    if(typeof L !== 'object') return false;
    while(true) {
      if( L ===  null) return false; // 这里看是不是已经遍历到了顶点
      if(R.prototype === L.__proto__) return true;
      L = L.__proto__;
    }
  }
}



new Promise.resolve().then(() => {
  console.log(0);
  return new Promise.resolve(4)
}).then((res) => {
  console.log(res)
})

new Promise.resolve.then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })
