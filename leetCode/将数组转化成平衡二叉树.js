/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length == 0) return null
    const num = Math.floor(nums.length / 2)
    const val = nums[num];
    const left = sortedArrayToBST(nums.slice(0, num))
    const right = sortedArrayToBST(nums.slice(num+1, nums.length))
    const  tree = new TreeNode(val, left, right)
    return tree
};
