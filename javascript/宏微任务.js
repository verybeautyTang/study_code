console.log('start')
new Promise ((resolve, reject) => {
  console.log('first promise')
  resolve()
}).then(() => {
  console.log('first then')
  new Promise ((resolve, reject) => {
    console.log('second promise')
    resolve()
  }).then(() => {
    console.log('second then end')
  })
}).then(() => {
  console.log('first another then end')
})
console.log('end')

