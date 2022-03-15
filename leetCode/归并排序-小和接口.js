/** 小和问题 【左边的数据比右边的数据小的总和】
 * [1,2,5,4,7,3,0]
 *  |
 *  左侧比1小的为 0 
 *    |
 *    左侧比2小的为 1， 0
 *      |
 *      左侧比5小的有2，1，0
 *        |
 *        左侧比4小的有2，1，0
 *          |
 *           左侧比7小的有 4，5，2，1，0
 *            |
 *            左侧比3小的有2，1，0
 *             |
 *              左侧比0小的有 0
 * 所以小和为： 0 + 1 + 0 + 2 + 1 + 0 + 2 + 1 + 0 + 4 + 5 + 2 + 1 + 0 + 2 + 1 + 0 = 22
 * 
*/

/** 用遍历可以求解小和，但是时间复杂度比较高为O(N²) 
 *  用归并排序 ，时间复杂度为N*logN
*/
function minCount(arr, L, R) {
  if (L === R) return 0;
  const M = L + (R - L >> 1)
  return minCount(arr, L, M) + minCount(arr, M + 1, R) + mergeSort(arr, L, M, R)
}
function mergeSort(arr, L, M, R) {
  let newArr = [];
  let i = 0; // 新数组的下标
  // 新数组长度
  newArr.length = R - L + 1;
  // 最小和初始化
  let total = 0;
  // 左边从L开始
  let leftPoint = L;
  // 右边从M + 1 开始
  let rightPoint = M + 1;
  // 两边都不越界的情况下
  while (leftPoint <= M && rightPoint <= R) {
    // 这里如果左边跟右边相等的情况下，先导出右边数据，因为是从左边跟右边比较，把右边导出。
    if(arr[leftPoint] < arr[rightPoint]) {
      total +=  (R - rightPoint + 1)* arr[leftPoint];
      newArr[i] = arr[leftPoint];
      leftPoint++;
    } else {
      total += 0;
      newArr[i] = arr[rightPoint];
      rightPoint++;
    }
    i++;
  }
  // 右边溢出左边不溢出
  while (leftPoint <= M) {
    newArr[i] = arr[leftPoint];
    i++;
    leftPoint++;
  }
  // 左边溢出右边不溢出
  while (rightPoint <= R) {
    newArr[i] = arr[rightPoint];
    i++;
    rightPoint++;
  }
  // 把排好顺序的数据再返回回去
  for (let i = 0; i < newArr.length; i++) {
    arr[L + i] = newArr[i]
  }
  console.log(total)
  return total;
}
console.log(minCount([1,2,5,4,7,3,0], 0, 6))