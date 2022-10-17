/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a,b) => b-a);
    // let numsSet = [...new Set(nums)]
    return nums[k-1]
};
