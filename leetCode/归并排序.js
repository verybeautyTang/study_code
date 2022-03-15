// 问题：求解从L到R上数据有序排列
function mergeSort (arr, L, R) {
  if (L === R)  return ;
  let M = L + (R-L >> 1)
  mergeSort(arr, L, M)
  mergeSort(arr, M+1, R)
  return mergeData(arr, M, L, R)
}
function mergeData (arr, M, L, R) {
  let newArr = [] // 用一个新数组来装数据
  newArr.length = R-L + 1
  let i  = 0;
  let LP = L; // 左侧最小数据
  let RP = M + 1; // 右侧最小数据
  while (LP <= M && RP <= R) {
    if( arr[LP] <= arr[RP] ) {
      newArr[i] = arr[LP] 
      LP++;
    } else {
      newArr[i] = arr[RP]
      RP++;
    }
    i++;
  }
  while (LP <= M) {
    newArr[i] = arr[LP]
    i++;
    LP++;
  }
  while (RP <= R) {
    newArr[i] = arr[RP]
    i++;
    RP++;
  }
  for(let j = 0 ; j < newArr.length; j++) {
    arr[L + j] = newArr[j]
  }
  return arr;
} 
console.log(mergeSort([3,2,1,5,6,2], 0, 5))