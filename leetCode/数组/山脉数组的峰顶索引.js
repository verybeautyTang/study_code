/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    if (arr.length < 3 ) return [];
    let data =0;
    for(let i =1; i< arr.length-1; i++) {
        if(arr[i]> arr[i-1] && arr[i] > arr[i+1]) {
            data = i 
        }
    }
    return data
};
