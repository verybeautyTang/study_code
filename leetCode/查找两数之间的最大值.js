function findMax(arr, left, right) {
  if (left === right) {
    return arr[left]
  }
  // >> 表示除以2 << 表示乘以2
  const middle = left + ((right- left) >> 1)
  const leftMax = findMax(arr, left, middle)
  const rightMax = findMax(arr,middle+1, right)
  return Math.max(leftMax, rightMax)
}
console.log(findMax([1,2,3,4], 0 , [1,2,3,4].length - 1));