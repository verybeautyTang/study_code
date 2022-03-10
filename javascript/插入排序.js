/**
 * O(X) 一般表示最差情况的时间复杂度
 * 一般其他的不用记录 
 */
function insertSort(arr) {
    if(!arr || arr.length < 2) return false;
    /**
     * 0~0 是有序的
     * 0~n 是想要有序的
     */
    for (let i = 1; i < arr.length; i++) {
        /**
         * 判断当前数据与前一个的数据
         */
        for (let j = i-1; j >=0 && arr[j] > arr[j+1]; j--) {
            console.log(arr[j],arr[j+1])
            swap(arr, j, j + 1);
        }    
    }
    return arr;
}

/** 交换函数 */
/** 用这种办法 如果i和j是同一个位置的话 会出错 */
function swap (arr, val1, val2) {
    arr[val1] = arr[val2] ^ arr[val1];
    arr[val2] = arr[val2] ^ arr[val1];
    arr[val1] = arr[val2] ^ arr[val1];
}
console.log(insertSort([1,5,4,3,7,3,8]))