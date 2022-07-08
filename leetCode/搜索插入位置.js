/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。请必须使用时间复杂度为 O(log n) 的算法。
 */
var searchInsert = function(nums, target) {
    let left = nums[0];
    if(left === target || left > target) return 0;
    if(nums[nums.length -1] < target) return nums.length
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === target) return i;
        if(nums[i] > target && left < target) {
            return i;
        }
        left = nums[i]
    }
};
