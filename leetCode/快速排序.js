// 时间复杂度为O(N*logN)
// 求L到R数据的时间复杂度
// [2,3,46,3,21,34,65,423]
function fastSort(arr, L, R) {
  if (L < R) {
    let randomData = Math.floor(Math.random() * (R - L + 1))
    swapData(arr, L + randomData, R )
    let data = partition(arr, L, R)
    // 左边
    fastSort(arr, L, data[0] - 1)
    // 右边
    fastSort(arr, data[1] + 1, R)
    return arr;
  } else return ;
}
// 遍历数据
function partition (arr, L, R) {
  // 左边第一个
  let LeftMap = L - 1;
  // 右边第一个
  let RightMap = R;
  while (L< RightMap) { // 证明遍历完了已经
    if (arr[L] < arr[R]) {
      LeftMap++;
      swapData(arr,LeftMap, L);
      L++;
    }
    else if(arr[L] > arr[R]) {
      RightMap--;
      swapData(arr, RightMap, L);
    }
    else {
      L++;
    }
  }
  swapData(arr, RightMap, R)
  return [LeftMap + 1, RightMap]
}
// 交换数据
function swapData (arr, L, R) {
  let temp = arr[L];
  arr[L] = arr[R];
  arr[R] = temp;
}

console.log(fastSort([2,3,46,3,21,421,65,24], 0 , 7))