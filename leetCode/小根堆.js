function getSmallHeap (arr,index) {
  if (!arr || arr.length < 2) {
    return false;
  }
  while (arr[index] > arr[Math.floor((index - 1) / 2)]) {
    swap(arr, index, Math.floor((index - 1) / 2));
    index = Math.floor((index - 1 )/ 2);
  }
  return arr;
}

function swap(arr, target, real) {
  const temp = arr[target];
  arr[target]= arr[real];
  arr[real] = temp;
  console.log(arr)
}
console.log(getSmallHeap([5,3,7,1,2,8,4,0], [5,3,7,1,2,8,4,0].length)) 