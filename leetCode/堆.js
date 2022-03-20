// 时间复杂度    O(N*logN)
// 额外空间复杂夫 O(1)
function heapSort(arr) {
  if (!arr || arr.length < 2) {
    return 
  }
  for (let i = 0; i < arr.length; i++) { // O(N)
    heapInsert(arr, i) // O(logN)
  }
  let heapSize = arr.length
  // 下标从0开始 所以要减去1
  heapSize--; 
  // 第一个跟最后一个交换
  swap(arr, 0, heapSize);
  while (heapSize > 0) { // O(N)
    heapIfy(arr, 0, heapSize);//  O(logN)
    heapSize--;
    swap(arr, 0, heapSize) //O(1)
  }
  return arr;
}

// 生成大根堆【ps：生成新数字】
function heapInsert (arr, index) {
  while (arr[index] > arr[Math.floor((index - 1) / 2)]) {
    swap(arr, index, Math.floor((index - 1) / 2));
    index = Math.floor((index - 1 )/ 2);
  }
}


// 从某个位置开始往下钻 【移除新数字】
function heapIfy(arr, index, heapSize) {
  // 获取左孩子节点
  let left = index * 2 + 1;
   // 这里判断是否存在孩子节点 因为左孩子是2i+1 右孩子是2i+2
  while (left < heapSize) {
    // 判断右孩子是否存在并且左右孩子比较哪个更大读哪个
    let largeIndex = left + 1 < heapSize && arr[left] < arr[left + 1] ? left + 1 : left; 
    // 更大节点与当前节点相比 获取最大的节点
    largeIndex = arr[index] > arr[largeIndex] ? index : largeIndex; 
     // 如果最大节点与传入的index一致 证明已经最大了 返回
    if (largeIndex === index) {
      break;
    }
    // 交换
    swap(arr, index, largeIndex); 
    // index到下一个节点去
    index = largeIndex; 
     // 获取下一个节点的左孩子
    left = index * 2 + 1;
  }
}
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

console.log(heapSort([5,3,7,1,2,8,4,0])) // 0,1,2,3,4,5,7,8