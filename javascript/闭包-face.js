// for (var i = 1; i < 5; i++) {
//   setTimeout(function timer() {
//     console.log(i)
//   }, i * 1000)
// }

// for (var i = 1; i < 5; i++) {
//   function cl(j){
//     setTimeout(function timer() {
//       console.log(j)
//     }, j * 1000)
//   }
  
//   cl(i)
// }

for (var i = 1; i < 5; i++) {
  setTimeout(function timer(j) {
    console.log(j)
    // 
  }, 0, i)
  console.log('ss', i)
}