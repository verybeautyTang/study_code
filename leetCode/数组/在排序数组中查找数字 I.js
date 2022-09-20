/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return nums.filter((i) => i === target) ? nums.filter((i) => i === target).length : 0
};
