/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1, -1],
      len = nums.length,
      left = 0,
      right = len - 1;
  
  // 迭代查找右边界
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    
    if (nums[mid] === target && (mid === len - 1 || nums[mid + 1] > target)) {
      ans[1] = mid;
      break;
    }
    
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  // 迭代查找左边界
  left = 0;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    
    if (nums[mid] === target && (mid === 0 || nums[mid - 1] < target)) {
      ans[0] = mid;
      break;
    }
    
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return (ans[0] === -1 || ans[1] === -1) ? [-1, -1] : ans;
};
