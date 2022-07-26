(function(){const a = b =1})()
console.log(typeof a !== 'undefined')


const serverce = function(id='tempod', config={user: 'admin'}) {
  console.log(id,config)
}
serverce(null, )


const promiseFn = () => {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      reject(Error('foo'))
    }, 500)
  })
}
const cachePromise = promiseFn().catch((err) => {
  return err
})
cachePromise.then((res) => {console.log(res)})