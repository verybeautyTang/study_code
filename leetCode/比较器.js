/**
 * 比较器: 一般用于比较大小的一种手段
 * 比如sort()可以直接比较数据,但是如果是有字段的数据,如果用sort直接比较的话,sort会比较内存大小,不正确
 *
 * 比较器规则---升序情况
 *  前者大于后者 则返回1
 *  前者小于后者 则返回-1
 *  前者等于后者 返回0
 */
function arraySort(arr, compareData){
    arr.forEach((i, index) => {
        if (index <= arr.length - 2) {
            compareData(i,arr[index + 1])
            console.log(compareData(i,arr[index + 1]))
        }
        return i;
    })
    return arr;
}

function compareData (arr1, arr2) {
    /** 通俗写法 */
    // if (arr1.id > arr2.id) {
    //     return 1
    // } else if (arr1.id < arr2.id) {
    //     return -1
    // } else {
    //     return 0
    // }

    /** 简单排序 */
    return (arr1.id - arr2.id)
}
const arr = 
    [{
        name: '222',
        id: 3,
    },
    {
        name: '111',
        id: 2,
    },
    {
        name: '000',
        id: 1,
    }]

    console.log(arraySort(arr,compareData))