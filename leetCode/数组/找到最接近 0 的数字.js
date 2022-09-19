/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let min = Math.min.apply(null, nums.map(i => i < 0 ? -i : i));
    return nums.indexOf(min) < 0 ? -min : min;
};
