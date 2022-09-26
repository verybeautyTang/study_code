/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    nums.sort((a,b) => a - b);
    for(let i = 0; i< nums.length; i++) {
        if(i + 1 < nums.length) {
            if(nums[i] === nums[i+1]) return nums[i]
        }
    }
};
