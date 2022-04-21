function heapSort(arr, index) {
    while (arr[index] < arr[Math.floor((index -1)/ 2)]) {
        swap(arr, index,Math.floor((index -1)/ 2))
        index = Math.floor((index -1)/ 2)
        console.log(arr)
    }
}
function swap (arr, real, target) {
    const temp = arr[real];
    arr[real] = arr[target];
    arr[target] = temp;
}

function getSmallHeap(arr) {
    for (let i = arr.length;  i > 0; i--) {
        heapSort(arr, i)
    }
    return arr
}

console.log(getSmallHeap([9,8,7,6,5,4,3,2,1,0]))