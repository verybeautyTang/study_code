/**
 * 首先选择排序的定义： 假定当前数据为最大或者最小，然后判断里面的数据是否有比设置的数据大或者小，如果有，则替换，如没有，则一直保持，直到遍历完毕，然后进行数据切换
 */

function chooseSort(arr) {
  // 判断传入的有效性
  if(!arr || arr.length < 3) return arr;
  for(let i = 0; i< arr.length - 1; i++) {
    // 设置当前数据为最小数据
    let minIndex = i
    for(let j = i + 1; j< arr.length; j++) {
      minIndex = arr[j] < arr[minIndex]?  j : minIndex;
    }
    // 进行数据交换
    sortSwap(arr, i, minIndex)
  }
  return arr 
}
function sortSwap(arr, i, minIndex) {
  let temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] =temp;
}

console.log(quiteSort([2,3,1,7,4,5]))
