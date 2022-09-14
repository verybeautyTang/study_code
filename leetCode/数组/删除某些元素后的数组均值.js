/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b) => a-b);
    let count = arr.length * 0.05;
    let result = 0;
    for(let i = count; i< arr.length - count; i++) {
        result += arr[i]
    }
    return result / (arr.length * 0.9)
};
