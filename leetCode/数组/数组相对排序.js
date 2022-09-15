/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr = []
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                arr.push(arr1[j])
            }
        }
    }
    arr.push(...arr1.filter(i => arr.indexOf(i) == -1).sort((a, b) => a - b))
    return arr
};
