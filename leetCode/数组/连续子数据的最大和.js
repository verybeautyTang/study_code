/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
      pre = Math.max(pre + x, x);
      maxAns = Math.max(pre, maxAns)
  })
    return maxAns;
};
