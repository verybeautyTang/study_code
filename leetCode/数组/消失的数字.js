/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 从0-n缺失了一个数字
    nums.sort((a,b) => a -b);
    for(let i=0; i<= nums.length; i++) {
        if(i!== nums[i] )return i;
    }
};
