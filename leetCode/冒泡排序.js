// 冒泡排列的逻辑： 前一个跟后一个进行比较，如果前一个比后一个大或者小，则进行切换
function bubbleSort(arr) {
  // 检查输入的合理性
  if(!arr && arr.length < 2) return ;
  // 
  for(i= arr.length - 1 ; i > 0 ; i--){
    for(let j = 0; j< i; j++) {
      if(arr[j] > arr[j+1]){
        sort(arr, j ,j+1)
      }
    }
  }
  return arr
}
function sort (arr, i ,j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}
console.log(bubbleSort([1,3,5,2,4,6,7,0]))