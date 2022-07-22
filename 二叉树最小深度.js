/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一个二叉树，找出其最小深度。最小深度是从根节点到最近叶子节点的最短路径上的节点数量。说明：叶子节点是指没有子节点的节点。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    // 左子树和右子树都没有
    if(!root.left && !root.right) return 1;
    // 其中一边没有，只有单子树
     if(!root.left ||  !root.right) return minDepth(root.left) + minDepth(root.right) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};
