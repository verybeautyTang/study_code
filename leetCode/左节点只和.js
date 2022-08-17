/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root || !root.left) return 0;
    let count = 0
    if(root==null) return 0;
    if(root.left!=null && root.left.left == null && root.left.right == null){
        count += root.left.val;
    }
    sumOfLeftLeaves(root.left);
    sumOfLeftLeaves(root.right);
    return count
};
