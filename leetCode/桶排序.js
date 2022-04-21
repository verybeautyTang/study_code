function bucketSort(arr) {
  if (!arr || arr.length < 2) {
    return false;
  }
  /** 获取arr上面的最大进制的数据的长度 */
  const digit = getMaxLength(arr);
  return getBucket(arr, 0, arr.length - 1, digit);
}

/** 获取arr上面最大进制数据的长度 */
function getMaxLength(arr) {
  let max = Math.max(...arr);
  let i = 0;
  while (max > 9) {
    i++;
    max = max / 10;
  }
  return i;
}
/** 桶排序【从L到R的长度】 */
function getBucket(arr, L, R, digit) {
  /** 从0-9的长度 */
  const oneToNight = 10;
  /** 临时变量 */
  let i = 0;
  let j = 0;
  /** 桶排序数组 */
  let bucketArray = Array(R - L + 1).fill(0);
  for (let d = 1; d <= digit; d++) {
    /** 临时数组，用于保存当前数等于当前下标的个数有几个 */
    let count = Array(oneToNight).fill(0);
    for (i = L; i <= R; i++) {
      j = getDigit(arr[i], d);
      count[j] = count[j] + 1;
    }
    for (i = 1; i < oneToNight; i++) {
      count[i] = count[i] + count[i - 1];
    }
    for (i = R; i >= L; i--) {
      j = getDigit(arr[i], d);
      bucketArray[count[j] - 1] = arr[i];
      count[j]--;
    }
    for (i = L, j = 0; i <= R; i++, j++) {
      arr[i] = bucketArray[j];
    }
  }
  return arr;
}

/** 计算数据 */
function getDigit(arr, digit) {
  return Math.floor((arr / Math.pow(10, digit - 1)) % 10);
}
/**  */
console.log(bucketSort([1, 22, 3, 43, 5, 64, 7, 10, 200, 1222]));
