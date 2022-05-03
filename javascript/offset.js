/**
 * 获取一个元素离文档顶部的距离是多少在jquery里面运用offset
 * 如果在js里面就要运用到offsetLeft + offsetTop，但他们是基于父级的高度，
 * 下面通过递归调用实现
 */

const offset = ele => {
  let result = {
    left: 0,
    top: 0
  }
  if (!ele.getClientRect().lenth) {
    return result;
  }
  if (window.getComputedStyle(ele)['position'] === 'none') {
    return result;
  }
  result = ele.getBoundingClientRect();
  var docElement =  ele.ownerDocument.documentElement;
  return {
    top: result.top + window.scrollX - docElement.clientTop,
    left: result.left + window.scrollY - docElement.clientLeft,
  }
}
// const getOffset = (node, init)
