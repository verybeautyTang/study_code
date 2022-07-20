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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = []
    const getRender = (root) => {
        if (!root) {
            return ;
        }
         getRender(root.left)
         res.push(root.val)
        getRender(root.right)
    }
    getRender(root);
    return res
};
