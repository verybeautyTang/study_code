/**
 * @param {number[]} nums
 * @return {number}给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */
var maxSubArray = function(nums) {
    if(nums.length < 2) return nums[0];
    let count = nums[0];
    let result = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if((count + nums[i]) > nums[i]) {
            count = count + nums[i]
        } else {
            count = nums[i]
        }
        if(count > result) {
            result = count
        }
    }
    return result;
};
