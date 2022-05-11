/**
 *  绘制路径回调
 * 移动页面上的元素从原点出发，先往左移动20px，再向上移动50px，最后向左移动30px，请把运动路径动画实现出来
 */

const target = document.getElementById('root')
target.style.cssText = `
    position: absolute;
    left: 0;
    top: 0;`
const walk = (direction, distance, callback) => {
  setTimeout(() => {
    let currentLeft = parseInt(target.style.left, 10);
    let currentTop = parseInt(target.style.top, 10);

  const shouldFinish = (direction === 'left' && currentLeft === -distance) || (direction === 'top' && currentTop === -distance);
  if (shouldFinish) {
    callback && callback();
  } else { 
    if (direction === 'left') {
      currentLeft--;
      target.style.left = currentLeft + 'px';
    }
    if (direction === 'top') {
      currentTop--;
      target.style.top = currentTop + 'px';
    }
    walk(direction, distance, callback);
  }
  }, 20);
}
// walk('left', 20, () => {
//   walk('top', 50, () => {
//     walk('left', 30, Function.prototype);
//   });
// });


/**
 * 用promise实现
 */

const walkPromise = (direction, distance) => {
  return new Promise((resolve, reject) => {
    const innerWalk = () => {
      setTimeout(() => {
        let currentLeft = parseInt(target.style.left, 10);
        let currentTop = parseInt(target.style.top, 10);
        const shouldFinish = (direction === 'left' && currentLeft === -distance) || (direction === 'top' && currentTop === -distance);
        if (shouldFinish) {
          console.log('FINISH')
          resolve();
        } else {
          if (direction === 'left') {
            currentLeft--;
            target.style.left = currentLeft + 'px';
          } else if (direction === 'top') {
            currentTop--;
            target.style.top = currentTop + 'px';
          }
          innerWalk();
        }
      }, 20);
    }
    innerWalk();
  });
}

// walkPromise('left', 20)
// .then(() => walkPromise('top', 50))
// .then(() => walkPromise('left', 30))


/** 用generator调用 */


// function *taskGenerator () {
//   yield walkPromise('left', 20);
//   yield walkPromise('top', 50);
//   yield walkPromise('left', 30);
// }
// const gen = taskGenerator();
// gen.next().value.then(() => gen.next().value.then(() => gen.next().value));

/**
 * 用async/await调用
 */
const walkAsync = async () => {
  await walkPromise('left', 20);
  await walkPromise('top', 50);
  await walkPromise('left', 30);
}
walkAsync();