/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    let minSortData = [...nums].sort((a,b) => a-b)
    console.log(minSortData)
    let count = 0;
    for(let i = 0; i < minSortData.length ; i++) {
        if(i+1 < minSortData.length) {
            count += Math.min(minSortData[i], minSortData[i+1]) 
        }
        i++;
    }
    return count;
};