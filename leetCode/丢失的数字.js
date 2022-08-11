/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const data = nums.sort((a,b) => a-b );
    for(let i = 0; i< data.length; i++) {
        if(i!== data[i]) {
            return i 
        }
    }
    return nums.length
};
