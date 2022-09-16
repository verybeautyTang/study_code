/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const dfs = (low, high) => {
    if (low > high) return null;
    let mid = low + ((high - low) >> 1);
    return new TreeNode(nums[mid], dfs(low, mid - 1), dfs(mid + 1, high));
  };
  return dfs(0, nums.length - 1);
};
