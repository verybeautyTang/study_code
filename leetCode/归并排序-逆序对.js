/** 逆序对问题 在一个数组中，如果左边的数比右边的数大，则这两个数构成一个逆序对，请打印所有逆序对,所有逆序对的对数
 * 
*/


function minCount(arr, L, R) {
  if (L === R) return 0;
  const M = L + (R - L >> 1)
  return minCount(arr, L, M) + minCount(arr, M+1, R) + mergeSort(arr, L, M, R)
}
function mergeSort(arr, L, M, R) {
  let newArr = [];
  newArr.length = R - L + 1;
  let total = 0;
  let i = 0;
  let leftPoint = L;
  let rightPoint = M + 1;
  while (leftPoint <= M && rightPoint <= R) {
    if(arr[leftPoint] > arr[rightPoint]) {
      total += 1;
      console.log('逆序对有：',arr[leftPoint], arr[rightPoint])
      newArr[i] = arr[leftPoint];
      leftPoint++;
    } else {
      newArr[i] = arr[rightPoint];
      rightPoint++;
    }
    i++;
  }
  while(leftPoint <= M) {
    newArr[i] = arr[leftPoint];
    leftPoint++;
    i++;
  }
  while (rightPoint <= R) {
    newArr[i] = arr[rightPoint];
    rightPoint++;
    i++;
  }
  for (let i = 0; i < newArr.length; i++) {
    arr[L + i] = newArr[i];  
  }
  return total;
}
console.log(minCount([1,2,5,4,7,3,0], 0, [1,2,5,4,7,3,0].length - 1))