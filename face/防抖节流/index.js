const content = document.getElementById('content');

const onChange = () => {
  console.log('first')
  content.addEventListener('change', function(e) {
    console.log(e.target.value)
  })
}

/**
 * 防抖
 */
function fn_debound(fn, delay = 1000) {
  let timer;
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn(args)
      }, delay);
  }
}

/** 节流 */

function throttle(fn, delay =1000) {
  let timer;
  return (...args) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}


/**
 * 点击按钮事件
 */
const onclick = () => {
  fn_debound(() => {
    console.log('我点击了，我执行了', 1000)
  })
}