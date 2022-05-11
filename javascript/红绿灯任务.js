const target = document.querySelector('#root')
function redLight() {
  target.style.color = 'red'
  console.log('red')
}
function yellowLight() {
  target.style.color = 'yellow'
  console.log('yellow')
}
function GreenLight() {
  target.style.color = 'green'
  console.log('green')
}

function redGreenLight(timer, light, callback) {
  setTimeout(() => {
    if (light === 'red') {
      redLight()
    } else if (light === 'green') {
      GreenLight()
    } else if (light === 'yellow') {
      yellowLight()
    } else {
      console.log('error')
    }
    callback && callback()
  }, timer);
}
// const step = () => {
//   redGreenLight(3000, 'red', () => {
//     redGreenLight(1000, 'green', () => {
//       redGreenLight(2000, 'yellow', step())
//     })
//   })
// }
// step()


/** promise实现 */

const task = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        redLight()
      } else if (light === 'green') {
        GreenLight()
      } else if (light === 'yellow') {
        yellowLight()
      }
      resolve()
    }, timer);
  })
}
const step = () => {
  task(3000, 'red').then(() => {
    return task(1000, 'green')
  }).then(() => {
    return task(2000, 'yellow')
  }).then(() => {
    step()
  })
}
step()